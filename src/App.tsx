import { useEffect, useRef, useState } from 'react';
import './App.css';
import { PB } from './proto/dist/protos';
import { SmartKnobWebSerial } from './webserial';
import { exhaustiveCheck, findNClosest, lerp, NoUndefinedField } from './util';

interface SmartKnobLog {
  timestamp: number;
  tag?: string;
  msg: string;
}

function App() {
  const [macAddress, setMacAddress] = useState<string | null>(null);
  const [smartKnob, setSmartKnob] = useState<SmartKnobWebSerial | null>(null);
  const [smartKnobState, setSmartKnobState] = useState<
    NoUndefinedField<PB.ISmartKnobState>
  >(
    PB.SmartKnobState.toObject(
      PB.SmartKnobState.create({ config: PB.SmartKnobConfig.create() }),
      {
        defaults: true,
      },
    ) as NoUndefinedField<PB.ISmartKnobState>,
  );
  const [smartKnobLog, setSmartKnobLog] = useState<Array<SmartKnobLog>>([]);
  const logRef = useRef<HTMLOListElement>(null);

  const connectToSerial = async () => {
    var _smartKnobLog = [...smartKnobLog];
    try {
      if (navigator.serial) {
        // previousPressNonceRef.current = 0;
        // receivedPressNonceRef.current = false;

        const serialPort = await navigator.serial.requestPort({
          filters: SmartKnobWebSerial.USB_DEVICE_FILTERS,
        });
        serialPort.addEventListener('disconnect', () => {
          setSmartKnob(null);
        });
        const smartKnob = new SmartKnobWebSerial(serialPort, (message) => {
          if (message.macAddress !== null) {
            setMacAddress(message.macAddress);
          }

          if (
            message.payload === 'smartknobState' &&
            message.smartknobState !== null
          ) {
            const state = PB.SmartKnobState.create(message.smartknobState);
            const stateObj = PB.SmartKnobState.toObject(state, {
              defaults: true,
            }) as NoUndefinedField<PB.ISmartKnobState>;
            setSmartKnobState(stateObj);
          }

          if (message.payload === 'log' && message.log !== null) {
            // console.log('LOG from smartknob', message.log?.msg);
            const timestamp = Date.now();
            const log = { timestamp, msg: message.log?.msg || '' };
            _smartKnobLog = [..._smartKnobLog, log];
            setSmartKnobLog(_smartKnobLog);
          }
        });
        setSmartKnob(smartKnob);
        await smartKnob.openAndLoop();
      } else {
        console.error('Web Serial API is not supported in this browser.');
        setSmartKnob(null);
      }
    } catch (error) {
      console.error('Error with serial port:', error);
      setSmartKnob(null);
    }
  };

  useEffect(() => {
    logRef.current?.lastElementChild?.scrollIntoView();
  }, [smartKnobLog]);

  return (
    <>
      {smartKnob != null ? (
        <div className='flex flex-col items-center'>
          <div>SmartKnob Connected - {macAddress}</div>
          <div className='flex flex-col w-full gap-4'>
            {/* CONSOLE DEBUG INFO */}
            <h2>SmartKnob Log</h2>
            <div className='border-2 border-zinc-500 bg-zinc-900 rounded-xl p-4 overflow-visible'>
              <ol
                ref={logRef}
                className='h-96 scrollbar overflow-y-auto scrollbar flex flex-col'
              >
                {smartKnobLog.map((log, index) => {
                  const date = new Date(log.timestamp);
                  const hours = String(date.getHours()).padStart(2, '0');
                  const minutes = String(date.getMinutes()).padStart(2, '0');
                  const seconds = String(date.getSeconds()).padStart(2, '0');
                  const timeString = `${hours}:${minutes}:${seconds}`;

                  var logTypeClass = '';

                  switch (log.tag) {
                    case 'ERROR':
                      logTypeClass = 'border-rose-900 bg-red-200';
                      break;
                    case 'WARNING':
                      logTypeClass = 'border-orange-600 bg-yellow-200';
                      break;
                    case 'DEBUG':
                      logTypeClass = 'border-green-800 bg-green-200';
                      break;
                    default:
                      logTypeClass = 'border-blue-800 bg-blue-200';
                      log.tag = 'INFO';
                      break;
                  }

                  return (
                    <li key={index} className='p-1 flex items-center'>
                      <span className='text-blue-300'>{timeString}</span>
                      <span
                        title={log.tag}
                        className={`w-32 inline-block text-ellipsis overflow-hidden text-nowrap bg-zinc-400 p-1 ml-2 border-l-[3px] rounded-r-md mr-3 text-black text-sm ${logTypeClass}`}
                      >
                        {log.tag}
                      </span>
                      {log.msg}
                    </li>
                  );
                }, [])}
              </ol>
            </div>
          </div>
          <div className='m-4 gap-2 flex'>
            <button className='btn !bg-green-500 !text-zinc-700'>
              Download Log
            </button>
            <button
              className='btn'
              onClick={() => {
                smartKnob.sendCommand(PB.SmartKnobCommand.MOTOR_CALIBRATE);
              }}
            >
              Motor Calibration
            </button>
            <button
              className='btn'
              onClick={() => {
                smartKnob.sendCommand(PB.SmartKnobCommand.STRAIN_CALIBRATE);
              }}
            >
              Strain Calibration
            </button>
          </div>
        </div>
      ) : navigator.serial ? (
        <div className='flex items-center flex-col'>
          <button className='btn' onClick={connectToSerial}>
            Connect via Web Serial
          </button>
        </div>
      ) : (
        'Web Serial API is not supported in this browser.'
      )}
    </>
  );
}

export default App;

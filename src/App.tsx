import { useState } from 'react';
import './App.css';
import { PB } from './proto/dist/protos';
import { SmartKnobWebSerial } from './webserial';
import { exhaustiveCheck, findNClosest, lerp, NoUndefinedField } from './util';

function App() {
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
  const connectToSerial = async () => {
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
            console.log('LOG from smartknob', message.log?.msg);
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
  return (
    <>
      <div>
        {smartKnob != null ? (
          <div>smartknob connected</div>
        ) : navigator.serial ? (
          <button onClick={connectToSerial}>Connect via Web Serial</button>
        ) : (
          'Web Serial API is not supported in this browser.'
        )}
      </div>
    </>
  );
}

export default App;

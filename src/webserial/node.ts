const { SerialPort } = require('serialport');
import { MessageCallback, SmartKnobCore } from './core.ts';

export class SmartKnobNode extends SmartKnobCore {
  private port: typeof SerialPort | null;

  constructor(serialPath: string, onMessage: MessageCallback) {
    super(onMessage, (packet: Uint8Array) => {
      this.port?.write(Buffer.from(packet));
    });
    this.port = new SerialPort(serialPath, {
      baudRate: SmartKnobCore.BAUD,
    });
    this.port.on('data', (data: any) => {
      this.onReceivedData(data);
    });
    this.portAvailable = true;
  }
}

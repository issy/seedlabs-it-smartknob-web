// import SerialPort from 'serialport';
import { PB } from "../proto/dist/protos";
import { MessageCallback, SmartKnobCore } from "./core";

export class SmartKnobWebSerial extends SmartKnobCore {
  private port: SerialPort | null;
  private writer: WritableStreamDefaultWriter<Uint8Array> | undefined =
    undefined;

  constructor(port: SerialPort, onMessage: MessageCallback) {
    super(onMessage, (packet: Uint8Array) => {
      this.writer?.write(packet).catch(this.onError);
    });
    this.port = port;
    this.portAvailable = true;
    this.port.addEventListener("disconnect", async () => {
      console.log("Device disconnected");
      // this.port = null;
      // this.portAvailable = false;
      if (this.port !== null) {
        // console.log(this.port);
        // this.port.close();
        // for (let index = 0; index < 9; index++) {
        //   // if (this.port.)
        //   // this.port.close();
        //   await new Promise((resolve) => setTimeout(resolve, 2000));
        //   console.log("Trying to reconnect...");
        //   this.openAndLoop();
        // }
      }
    });
  }

  public async openAndLoop() {
    if (this.port === null) {
      return;
    }
    await this.port.open({ baudRate: SmartKnobCore.BAUD });
    if (this.port.readable === null || this.port.writable === null) {
      throw new Error("Port missing readable or writable!");
    }

    this.sendCommand(PB.SmartKnobCommand.GET_KNOB_INFO);

    const reader = this.port.readable.getReader();
    try {
      const writer = this.port.writable.getWriter();
      writer
        .write(Uint8Array.from([0, 0, 0, 0, 0, 0, 0, 0]))
        .catch(this.onError);
      this.writer = writer;
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            break;
          }
          if (value !== undefined) {
            this.onReceivedData(value);
          }
        }
      } finally {
        console.log("Releasing writer");
        writer?.releaseLock();
      }
    } finally {
      console.log("Releasing reader");
      reader.releaseLock();
      await this.port.close();
      console.log("Port closed");
    }
  }

  private onError(e: unknown) {
    console.error("Error writing serial", e);
    this.port?.close();
    this.port = null;
    this.portAvailable = false;
    this.writer = undefined;
  }
}

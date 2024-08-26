import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace PB. */
export namespace PB {

    /** Properties of a FromSmartKnob. */
    interface IFromSmartKnob {

        /** FromSmartKnob protocolVersion */
        protocolVersion?: (number|null);

        /** FromSmartKnob knob */
        knob?: (PB.IKnob|null);

        /** FromSmartKnob ack */
        ack?: (PB.IAck|null);

        /** FromSmartKnob log */
        log?: (PB.ILog|null);

        /** FromSmartKnob smartknobState */
        smartknobState?: (PB.ISmartKnobState|null);

        /** FromSmartKnob motorCalibState */
        motorCalibState?: (PB.IMotorCalibState|null);

        /** FromSmartKnob strainCalibState */
        strainCalibState?: (PB.IStrainCalibState|null);
    }

    /** Represents a FromSmartKnob. */
    class FromSmartKnob implements IFromSmartKnob {

        /**
         * Constructs a new FromSmartKnob.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IFromSmartKnob);

        /** FromSmartKnob protocolVersion. */
        public protocolVersion: number;

        /** FromSmartKnob knob. */
        public knob?: (PB.IKnob|null);

        /** FromSmartKnob ack. */
        public ack?: (PB.IAck|null);

        /** FromSmartKnob log. */
        public log?: (PB.ILog|null);

        /** FromSmartKnob smartknobState. */
        public smartknobState?: (PB.ISmartKnobState|null);

        /** FromSmartKnob motorCalibState. */
        public motorCalibState?: (PB.IMotorCalibState|null);

        /** FromSmartKnob strainCalibState. */
        public strainCalibState?: (PB.IStrainCalibState|null);

        /** FromSmartKnob payload. */
        public payload?: ("knob"|"ack"|"log"|"smartknobState"|"motorCalibState"|"strainCalibState");

        /**
         * Creates a new FromSmartKnob instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FromSmartKnob instance
         */
        public static create(properties?: PB.IFromSmartKnob): PB.FromSmartKnob;

        /**
         * Encodes the specified FromSmartKnob message. Does not implicitly {@link PB.FromSmartKnob.verify|verify} messages.
         * @param message FromSmartKnob message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IFromSmartKnob, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FromSmartKnob message, length delimited. Does not implicitly {@link PB.FromSmartKnob.verify|verify} messages.
         * @param message FromSmartKnob message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IFromSmartKnob, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FromSmartKnob message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FromSmartKnob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.FromSmartKnob;

        /**
         * Decodes a FromSmartKnob message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FromSmartKnob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.FromSmartKnob;

        /**
         * Verifies a FromSmartKnob message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FromSmartKnob message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FromSmartKnob
         */
        public static fromObject(object: { [k: string]: any }): PB.FromSmartKnob;

        /**
         * Creates a plain object from a FromSmartKnob message. Also converts values to other types if specified.
         * @param message FromSmartKnob
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.FromSmartKnob, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FromSmartKnob to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FromSmartKnob
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ToSmartknob. */
    interface IToSmartknob {

        /** ToSmartknob protocolVersion */
        protocolVersion?: (number|null);

        /** ToSmartknob nonce */
        nonce?: (number|null);

        /** ToSmartknob requestState */
        requestState?: (PB.IRequestState|null);

        /** ToSmartknob smartknobConfig */
        smartknobConfig?: (PB.ISmartKnobConfig|null);

        /** ToSmartknob smartknobCommand */
        smartknobCommand?: (PB.SmartKnobCommand|null);

        /** ToSmartknob strainCalibration */
        strainCalibration?: (PB.IStrainCalibration|null);

        /** ToSmartknob settings */
        settings?: (SETTINGS.ISettings|null);
    }

    /** Represents a ToSmartknob. */
    class ToSmartknob implements IToSmartknob {

        /**
         * Constructs a new ToSmartknob.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IToSmartknob);

        /** ToSmartknob protocolVersion. */
        public protocolVersion: number;

        /** ToSmartknob nonce. */
        public nonce: number;

        /** ToSmartknob requestState. */
        public requestState?: (PB.IRequestState|null);

        /** ToSmartknob smartknobConfig. */
        public smartknobConfig?: (PB.ISmartKnobConfig|null);

        /** ToSmartknob smartknobCommand. */
        public smartknobCommand?: (PB.SmartKnobCommand|null);

        /** ToSmartknob strainCalibration. */
        public strainCalibration?: (PB.IStrainCalibration|null);

        /** ToSmartknob settings. */
        public settings?: (SETTINGS.ISettings|null);

        /** ToSmartknob payload. */
        public payload?: ("requestState"|"smartknobConfig"|"smartknobCommand"|"strainCalibration"|"settings");

        /**
         * Creates a new ToSmartknob instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ToSmartknob instance
         */
        public static create(properties?: PB.IToSmartknob): PB.ToSmartknob;

        /**
         * Encodes the specified ToSmartknob message. Does not implicitly {@link PB.ToSmartknob.verify|verify} messages.
         * @param message ToSmartknob message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IToSmartknob, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ToSmartknob message, length delimited. Does not implicitly {@link PB.ToSmartknob.verify|verify} messages.
         * @param message ToSmartknob message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IToSmartknob, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ToSmartknob message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ToSmartknob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.ToSmartknob;

        /**
         * Decodes a ToSmartknob message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ToSmartknob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.ToSmartknob;

        /**
         * Verifies a ToSmartknob message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ToSmartknob message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ToSmartknob
         */
        public static fromObject(object: { [k: string]: any }): PB.ToSmartknob;

        /**
         * Creates a plain object from a ToSmartknob message. Also converts values to other types if specified.
         * @param message ToSmartknob
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.ToSmartknob, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ToSmartknob to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ToSmartknob
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Knob. */
    interface IKnob {

        /** Knob macAddress */
        macAddress?: (string|null);

        /** Knob ipAddress */
        ipAddress?: (string|null);

        /** Knob persistentConfig */
        persistentConfig?: (PB.IPersistentConfiguration|null);

        /** Knob settings */
        settings?: (SETTINGS.ISettings|null);
    }

    /** Initial knob information. */
    class Knob implements IKnob {

        /**
         * Constructs a new Knob.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IKnob);

        /** Knob macAddress. */
        public macAddress: string;

        /** Knob ipAddress. */
        public ipAddress: string;

        /** Knob persistentConfig. */
        public persistentConfig?: (PB.IPersistentConfiguration|null);

        /** Knob settings. */
        public settings?: (SETTINGS.ISettings|null);

        /**
         * Creates a new Knob instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Knob instance
         */
        public static create(properties?: PB.IKnob): PB.Knob;

        /**
         * Encodes the specified Knob message. Does not implicitly {@link PB.Knob.verify|verify} messages.
         * @param message Knob message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IKnob, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Knob message, length delimited. Does not implicitly {@link PB.Knob.verify|verify} messages.
         * @param message Knob message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IKnob, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Knob message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Knob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.Knob;

        /**
         * Decodes a Knob message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Knob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.Knob;

        /**
         * Verifies a Knob message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Knob message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Knob
         */
        public static fromObject(object: { [k: string]: any }): PB.Knob;

        /**
         * Creates a plain object from a Knob message. Also converts values to other types if specified.
         * @param message Knob
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.Knob, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Knob to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Knob
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MotorCalibState. */
    interface IMotorCalibState {

        /** MotorCalibState calibrated */
        calibrated?: (boolean|null);
    }

    /** Motor calibration state information */
    class MotorCalibState implements IMotorCalibState {

        /**
         * Constructs a new MotorCalibState.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMotorCalibState);

        /** MotorCalibState calibrated. */
        public calibrated: boolean;

        /**
         * Creates a new MotorCalibState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MotorCalibState instance
         */
        public static create(properties?: PB.IMotorCalibState): PB.MotorCalibState;

        /**
         * Encodes the specified MotorCalibState message. Does not implicitly {@link PB.MotorCalibState.verify|verify} messages.
         * @param message MotorCalibState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMotorCalibState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MotorCalibState message, length delimited. Does not implicitly {@link PB.MotorCalibState.verify|verify} messages.
         * @param message MotorCalibState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMotorCalibState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MotorCalibState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MotorCalibState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.MotorCalibState;

        /**
         * Decodes a MotorCalibState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MotorCalibState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.MotorCalibState;

        /**
         * Verifies a MotorCalibState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MotorCalibState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MotorCalibState
         */
        public static fromObject(object: { [k: string]: any }): PB.MotorCalibState;

        /**
         * Creates a plain object from a MotorCalibState message. Also converts values to other types if specified.
         * @param message MotorCalibState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MotorCalibState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MotorCalibState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MotorCalibState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StrainCalibState. */
    interface IStrainCalibState {

        /** StrainCalibState step */
        step?: (number|null);

        /** StrainCalibState strainScale */
        strainScale?: (number|null);
    }

    /** Strain calibration state information */
    class StrainCalibState implements IStrainCalibState {

        /**
         * Constructs a new StrainCalibState.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IStrainCalibState);

        /** StrainCalibState step. */
        public step: number;

        /** StrainCalibState strainScale. */
        public strainScale: number;

        /**
         * Creates a new StrainCalibState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StrainCalibState instance
         */
        public static create(properties?: PB.IStrainCalibState): PB.StrainCalibState;

        /**
         * Encodes the specified StrainCalibState message. Does not implicitly {@link PB.StrainCalibState.verify|verify} messages.
         * @param message StrainCalibState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IStrainCalibState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StrainCalibState message, length delimited. Does not implicitly {@link PB.StrainCalibState.verify|verify} messages.
         * @param message StrainCalibState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IStrainCalibState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StrainCalibState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StrainCalibState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.StrainCalibState;

        /**
         * Decodes a StrainCalibState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StrainCalibState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.StrainCalibState;

        /**
         * Verifies a StrainCalibState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StrainCalibState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StrainCalibState
         */
        public static fromObject(object: { [k: string]: any }): PB.StrainCalibState;

        /**
         * Creates a plain object from a StrainCalibState message. Also converts values to other types if specified.
         * @param message StrainCalibState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.StrainCalibState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StrainCalibState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StrainCalibState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Ack. */
    interface IAck {

        /** Ack nonce */
        nonce?: (number|null);
    }

    /** Lets the host know that a ToSmartknob message was received and should not be retried. */
    class Ack implements IAck {

        /**
         * Constructs a new Ack.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IAck);

        /** Ack nonce. */
        public nonce: number;

        /**
         * Creates a new Ack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ack instance
         */
        public static create(properties?: PB.IAck): PB.Ack;

        /**
         * Encodes the specified Ack message. Does not implicitly {@link PB.Ack.verify|verify} messages.
         * @param message Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ack message, length delimited. Does not implicitly {@link PB.Ack.verify|verify} messages.
         * @param message Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Ack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.Ack;

        /**
         * Decodes an Ack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.Ack;

        /**
         * Verifies an Ack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Ack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ack
         */
        public static fromObject(object: { [k: string]: any }): PB.Ack;

        /**
         * Creates a plain object from an Ack message. Also converts values to other types if specified.
         * @param message Ack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.Ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Ack
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** LogLevel enum. */
    enum LogLevel {
        INFO = 0,
        WARNING = 1,
        ERROR = 2,
        DEBUG = 3,
        VERBOSE = 4
    }

    /** Properties of a Log. */
    interface ILog {

        /** Log msg */
        msg?: (string|null);

        /** Log level */
        level?: (PB.LogLevel|null);

        /** Log origin */
        origin?: (string|null);

        /** Log isVerbose */
        isVerbose?: (boolean|null);
    }

    /** Represents a Log. */
    class Log implements ILog {

        /**
         * Constructs a new Log.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.ILog);

        /** Log msg. */
        public msg: string;

        /** Log level. */
        public level: PB.LogLevel;

        /** Log origin. */
        public origin: string;

        /** Log isVerbose. */
        public isVerbose: boolean;

        /**
         * Creates a new Log instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Log instance
         */
        public static create(properties?: PB.ILog): PB.Log;

        /**
         * Encodes the specified Log message. Does not implicitly {@link PB.Log.verify|verify} messages.
         * @param message Log message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.ILog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Log message, length delimited. Does not implicitly {@link PB.Log.verify|verify} messages.
         * @param message Log message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.ILog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Log message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Log
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.Log;

        /**
         * Decodes a Log message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Log
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.Log;

        /**
         * Verifies a Log message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Log message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Log
         */
        public static fromObject(object: { [k: string]: any }): PB.Log;

        /**
         * Creates a plain object from a Log message. Also converts values to other types if specified.
         * @param message Log
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.Log, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Log to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Log
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SmartKnobState. */
    interface ISmartKnobState {

        /** Current integer position of the knob. (Detent resolution is at integer positions) */
        currentPosition?: (number|null);

        /**
         * Current fractional position. Typically will only range from (-snap_point, snap_point)
         * since further rotation will result in the integer position changing, but may exceed
         * those values if snap_point_bias is non-zero, or if the knob is at a bound. When the
         * knob is at a bound, this value can grow endlessly as the knob is rotated further past
         * the bound.
         *
         * When visualizing sub_position_unit, you will likely want to apply a rubber-band easing
         * function past the bounds; a sublinear relationship will help suggest that a bound has
         * been reached.
         */
        subPositionUnit?: (number|null);

        /**
         * Current SmartKnobConfig in effect at the time of this State snapshot.
         *
         * Beware that this config contains position and sub_position_unit values, not to be
         * confused with the top level current_position and sub_position_unit values in this State
         * message. The position values in the embedded config message will almost never be useful
         * to you; you probably want to be reading the top level values from the State message.
         */
        config?: (PB.ISmartKnobConfig|null);

        /**
         * Value that changes each time the knob is pressed. Does not change when a press is released.
         *
         * Why this press state a "nonce" rather than a simple boolean representing the current
         * "pressed" state? It makes the protocol more robust to dropped/lost State messages; if
         * the knob was pressed/released quickly and State messages happened to be dropped during
         * that time, the press would be completely lost. Using a nonce allows the host to recognize
         * that a press has taken place at some point even if the State was lost during the press
         * itself. Is this overkill? Probably, let's revisit in future protocol versions.
         */
        pressNonce?: (number|null);
    }

    /** Represents a SmartKnobState. */
    class SmartKnobState implements ISmartKnobState {

        /**
         * Constructs a new SmartKnobState.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.ISmartKnobState);

        /** Current integer position of the knob. (Detent resolution is at integer positions) */
        public currentPosition: number;

        /**
         * Current fractional position. Typically will only range from (-snap_point, snap_point)
         * since further rotation will result in the integer position changing, but may exceed
         * those values if snap_point_bias is non-zero, or if the knob is at a bound. When the
         * knob is at a bound, this value can grow endlessly as the knob is rotated further past
         * the bound.
         *
         * When visualizing sub_position_unit, you will likely want to apply a rubber-band easing
         * function past the bounds; a sublinear relationship will help suggest that a bound has
         * been reached.
         */
        public subPositionUnit: number;

        /**
         * Current SmartKnobConfig in effect at the time of this State snapshot.
         *
         * Beware that this config contains position and sub_position_unit values, not to be
         * confused with the top level current_position and sub_position_unit values in this State
         * message. The position values in the embedded config message will almost never be useful
         * to you; you probably want to be reading the top level values from the State message.
         */
        public config?: (PB.ISmartKnobConfig|null);

        /**
         * Value that changes each time the knob is pressed. Does not change when a press is released.
         *
         * Why this press state a "nonce" rather than a simple boolean representing the current
         * "pressed" state? It makes the protocol more robust to dropped/lost State messages; if
         * the knob was pressed/released quickly and State messages happened to be dropped during
         * that time, the press would be completely lost. Using a nonce allows the host to recognize
         * that a press has taken place at some point even if the State was lost during the press
         * itself. Is this overkill? Probably, let's revisit in future protocol versions.
         */
        public pressNonce: number;

        /**
         * Creates a new SmartKnobState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SmartKnobState instance
         */
        public static create(properties?: PB.ISmartKnobState): PB.SmartKnobState;

        /**
         * Encodes the specified SmartKnobState message. Does not implicitly {@link PB.SmartKnobState.verify|verify} messages.
         * @param message SmartKnobState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.ISmartKnobState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SmartKnobState message, length delimited. Does not implicitly {@link PB.SmartKnobState.verify|verify} messages.
         * @param message SmartKnobState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.ISmartKnobState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SmartKnobState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SmartKnobState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.SmartKnobState;

        /**
         * Decodes a SmartKnobState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SmartKnobState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.SmartKnobState;

        /**
         * Verifies a SmartKnobState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SmartKnobState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SmartKnobState
         */
        public static fromObject(object: { [k: string]: any }): PB.SmartKnobState;

        /**
         * Creates a plain object from a SmartKnobState message. Also converts values to other types if specified.
         * @param message SmartKnobState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.SmartKnobState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SmartKnobState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SmartKnobState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SmartKnobConfig. */
    interface ISmartKnobConfig {

        /**
         * Set the integer position.
         *
         * Note: in order to make SmartKnobConfig apply idempotently, the current position
         * will only be set to this value when it changes compared to a previous config (and
         * NOT compared to the current state!). So by default, if you send a config position
         * of 5 and the current position is 3, the position may remain at 3 if the config
         * change to 5 was previously handled. If you need to force a position update, see
         * position_nonce.
         */
        position?: (number|null);

        /**
         * Set the fractional position. Typical range: (-snap_point, snap_point).
         *
         * Actual range is technically unbounded, but in practice this value will be compared
         * against snap_point on the next control loop, so any value beyond the snap_point will
         * generally result in an integer position change (unless position is already at a
         * limit).
         *
         * Note: idempotency implications noted in the documentation for `position` apply here
         * as well
         */
        subPositionUnit?: (number|null);

        /**
         * Position is normally only applied when it changes, but sometimes it's desirable
         * to reset the position to the same value, so a nonce change can be used to force
         * the position values to be applied as well.
         *
         * NOTE: Must be < 256
         */
        positionNonce?: (number|null);

        /** Minimum position allowed. */
        minPosition?: (number|null);

        /**
         * Maximum position allowed.
         *
         * If this is the same as min_position, there will only be one allowed position.
         *
         * If this is less than min_position, bounds will be disabled.
         */
        maxPosition?: (number|null);

        /** The angular "width" of each position/detent, in radians. */
        positionWidthRadians?: (number|null);

        /**
         * Strength of detents to apply. Typical range: [0, 1].
         *
         * A value of 0 disables detents.
         *
         * Values greater than 1 are not recommended and may lead to unstable behavior.
         */
        detentStrengthUnit?: (number|null);

        /**
         * Strength of endstop torque to apply at min/max bounds. Typical range: [0, 1].
         *
         * A value of 0 disables endstop torque, but does not make position unbounded, meaning
         * the knob will not try to return to the valid region. For unbounded rotation, use
         * min_position and max_position.
         *
         * Values greater than 1 are not recommended and may lead to unstable behavior.
         */
        endstopStrengthUnit?: (number|null);

        /**
         * Fractional (sub-position) threshold where the position will increment/decrement.
         * Typical range: (0.5, 1.5).
         *
         * This defines how hysteresis is applied to positions, which is why values >
         */
        snapPoint?: (number|null);

        /**
         * Arbitrary 50-byte string representing this "config". This can be used to identify major
         * config/mode changes. The value will be echoed back to the host via a future State's
         * embedded config field so the host can use this value to determine the mode that was
         * in effect at the time of the State snapshot instead of having to infer it from the
         * other config fields.
         */
        id?: (string|null);

        /**
         * For a "magnetic" detent mode - where not all positions should have detents - this
         * specifies which positions (up to 5) have detents enabled. The knob will feel like it
         * is "magnetically" attracted to those positions, and will rotate smoothy past all
         * other positions.
         *
         * If you want to have more than 5 magnetic detent positions, you will need to dynamically
         * update this list as the knob is rotated. A recommended approach is to always send the
         * _nearest_ 5 detent positions, and send a new Config message whenever the list of
         * positions nearest the current position (as reported via State messages) changes.
         *
         * This approach enables effectively unbounded detent positions while keeping Config
         * bounded in size, and is resilient against tightly-packed detents with fast rotation
         * since multiple detent positions can be sent in advance; a full round-trip Config-State
         * isn't needed between each detent in order to keep up.
         */
        detentPositions?: (number[]|null);

        /**
         * Advanced feature for shifting the defined snap_point away from the center (position 0)
         * for implementing asymmetric detents. Typical value: 0 (symmetric detent force).
         *
         * This can be used to create detents that will hold the position when carefully released,
         * but can be easily disturbed to return "home" towards position 0.
         */
        snapPointBias?: (number|null);

        /**
         * Hue (0-255) for all 8 ring LEDs, if supported. Note: this will likely be replaced
         * with more configurability in a future protocol version.
         */
        ledHue?: (number|null);
    }

    /** Represents a SmartKnobConfig. */
    class SmartKnobConfig implements ISmartKnobConfig {

        /**
         * Constructs a new SmartKnobConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.ISmartKnobConfig);

        /**
         * Set the integer position.
         *
         * Note: in order to make SmartKnobConfig apply idempotently, the current position
         * will only be set to this value when it changes compared to a previous config (and
         * NOT compared to the current state!). So by default, if you send a config position
         * of 5 and the current position is 3, the position may remain at 3 if the config
         * change to 5 was previously handled. If you need to force a position update, see
         * position_nonce.
         */
        public position: number;

        /**
         * Set the fractional position. Typical range: (-snap_point, snap_point).
         *
         * Actual range is technically unbounded, but in practice this value will be compared
         * against snap_point on the next control loop, so any value beyond the snap_point will
         * generally result in an integer position change (unless position is already at a
         * limit).
         *
         * Note: idempotency implications noted in the documentation for `position` apply here
         * as well
         */
        public subPositionUnit: number;

        /**
         * Position is normally only applied when it changes, but sometimes it's desirable
         * to reset the position to the same value, so a nonce change can be used to force
         * the position values to be applied as well.
         *
         * NOTE: Must be < 256
         */
        public positionNonce: number;

        /** Minimum position allowed. */
        public minPosition: number;

        /**
         * Maximum position allowed.
         *
         * If this is the same as min_position, there will only be one allowed position.
         *
         * If this is less than min_position, bounds will be disabled.
         */
        public maxPosition: number;

        /** The angular "width" of each position/detent, in radians. */
        public positionWidthRadians: number;

        /**
         * Strength of detents to apply. Typical range: [0, 1].
         *
         * A value of 0 disables detents.
         *
         * Values greater than 1 are not recommended and may lead to unstable behavior.
         */
        public detentStrengthUnit: number;

        /**
         * Strength of endstop torque to apply at min/max bounds. Typical range: [0, 1].
         *
         * A value of 0 disables endstop torque, but does not make position unbounded, meaning
         * the knob will not try to return to the valid region. For unbounded rotation, use
         * min_position and max_position.
         *
         * Values greater than 1 are not recommended and may lead to unstable behavior.
         */
        public endstopStrengthUnit: number;

        /**
         * Fractional (sub-position) threshold where the position will increment/decrement.
         * Typical range: (0.5, 1.5).
         *
         * This defines how hysteresis is applied to positions, which is why values >
         */
        public snapPoint: number;

        /**
         * Arbitrary 50-byte string representing this "config". This can be used to identify major
         * config/mode changes. The value will be echoed back to the host via a future State's
         * embedded config field so the host can use this value to determine the mode that was
         * in effect at the time of the State snapshot instead of having to infer it from the
         * other config fields.
         */
        public id: string;

        /**
         * For a "magnetic" detent mode - where not all positions should have detents - this
         * specifies which positions (up to 5) have detents enabled. The knob will feel like it
         * is "magnetically" attracted to those positions, and will rotate smoothy past all
         * other positions.
         *
         * If you want to have more than 5 magnetic detent positions, you will need to dynamically
         * update this list as the knob is rotated. A recommended approach is to always send the
         * _nearest_ 5 detent positions, and send a new Config message whenever the list of
         * positions nearest the current position (as reported via State messages) changes.
         *
         * This approach enables effectively unbounded detent positions while keeping Config
         * bounded in size, and is resilient against tightly-packed detents with fast rotation
         * since multiple detent positions can be sent in advance; a full round-trip Config-State
         * isn't needed between each detent in order to keep up.
         */
        public detentPositions: number[];

        /**
         * Advanced feature for shifting the defined snap_point away from the center (position 0)
         * for implementing asymmetric detents. Typical value: 0 (symmetric detent force).
         *
         * This can be used to create detents that will hold the position when carefully released,
         * but can be easily disturbed to return "home" towards position 0.
         */
        public snapPointBias: number;

        /**
         * Hue (0-255) for all 8 ring LEDs, if supported. Note: this will likely be replaced
         * with more configurability in a future protocol version.
         */
        public ledHue: number;

        /**
         * Creates a new SmartKnobConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SmartKnobConfig instance
         */
        public static create(properties?: PB.ISmartKnobConfig): PB.SmartKnobConfig;

        /**
         * Encodes the specified SmartKnobConfig message. Does not implicitly {@link PB.SmartKnobConfig.verify|verify} messages.
         * @param message SmartKnobConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.ISmartKnobConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SmartKnobConfig message, length delimited. Does not implicitly {@link PB.SmartKnobConfig.verify|verify} messages.
         * @param message SmartKnobConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.ISmartKnobConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SmartKnobConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SmartKnobConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.SmartKnobConfig;

        /**
         * Decodes a SmartKnobConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SmartKnobConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.SmartKnobConfig;

        /**
         * Verifies a SmartKnobConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SmartKnobConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SmartKnobConfig
         */
        public static fromObject(object: { [k: string]: any }): PB.SmartKnobConfig;

        /**
         * Creates a plain object from a SmartKnobConfig message. Also converts values to other types if specified.
         * @param message SmartKnobConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.SmartKnobConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SmartKnobConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SmartKnobConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RequestState. */
    interface IRequestState {
    }

    /** Represents a RequestState. */
    class RequestState implements IRequestState {

        /**
         * Constructs a new RequestState.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IRequestState);

        /**
         * Creates a new RequestState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestState instance
         */
        public static create(properties?: PB.IRequestState): PB.RequestState;

        /**
         * Encodes the specified RequestState message. Does not implicitly {@link PB.RequestState.verify|verify} messages.
         * @param message RequestState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IRequestState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestState message, length delimited. Does not implicitly {@link PB.RequestState.verify|verify} messages.
         * @param message RequestState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IRequestState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.RequestState;

        /**
         * Decodes a RequestState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.RequestState;

        /**
         * Verifies a RequestState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestState
         */
        public static fromObject(object: { [k: string]: any }): PB.RequestState;

        /**
         * Creates a plain object from a RequestState message. Also converts values to other types if specified.
         * @param message RequestState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.RequestState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RequestState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PersistentConfiguration. */
    interface IPersistentConfiguration {

        /** PersistentConfiguration version */
        version?: (number|null);

        /** PersistentConfiguration motor */
        motor?: (PB.IMotorCalibration|null);

        /** PersistentConfiguration strainScale */
        strainScale?: (number|null);
    }

    /** Represents a PersistentConfiguration. */
    class PersistentConfiguration implements IPersistentConfiguration {

        /**
         * Constructs a new PersistentConfiguration.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IPersistentConfiguration);

        /** PersistentConfiguration version. */
        public version: number;

        /** PersistentConfiguration motor. */
        public motor?: (PB.IMotorCalibration|null);

        /** PersistentConfiguration strainScale. */
        public strainScale: number;

        /**
         * Creates a new PersistentConfiguration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PersistentConfiguration instance
         */
        public static create(properties?: PB.IPersistentConfiguration): PB.PersistentConfiguration;

        /**
         * Encodes the specified PersistentConfiguration message. Does not implicitly {@link PB.PersistentConfiguration.verify|verify} messages.
         * @param message PersistentConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IPersistentConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PersistentConfiguration message, length delimited. Does not implicitly {@link PB.PersistentConfiguration.verify|verify} messages.
         * @param message PersistentConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IPersistentConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PersistentConfiguration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PersistentConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.PersistentConfiguration;

        /**
         * Decodes a PersistentConfiguration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PersistentConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.PersistentConfiguration;

        /**
         * Verifies a PersistentConfiguration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PersistentConfiguration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PersistentConfiguration
         */
        public static fromObject(object: { [k: string]: any }): PB.PersistentConfiguration;

        /**
         * Creates a plain object from a PersistentConfiguration message. Also converts values to other types if specified.
         * @param message PersistentConfiguration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.PersistentConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PersistentConfiguration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PersistentConfiguration
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MotorCalibration. */
    interface IMotorCalibration {

        /** MotorCalibration calibrated */
        calibrated?: (boolean|null);

        /** MotorCalibration zeroElectricalOffset */
        zeroElectricalOffset?: (number|null);

        /** MotorCalibration directionCw */
        directionCw?: (boolean|null);

        /** MotorCalibration polePairs */
        polePairs?: (number|null);
    }

    /** Represents a MotorCalibration. */
    class MotorCalibration implements IMotorCalibration {

        /**
         * Constructs a new MotorCalibration.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMotorCalibration);

        /** MotorCalibration calibrated. */
        public calibrated: boolean;

        /** MotorCalibration zeroElectricalOffset. */
        public zeroElectricalOffset: number;

        /** MotorCalibration directionCw. */
        public directionCw: boolean;

        /** MotorCalibration polePairs. */
        public polePairs: number;

        /**
         * Creates a new MotorCalibration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MotorCalibration instance
         */
        public static create(properties?: PB.IMotorCalibration): PB.MotorCalibration;

        /**
         * Encodes the specified MotorCalibration message. Does not implicitly {@link PB.MotorCalibration.verify|verify} messages.
         * @param message MotorCalibration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMotorCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MotorCalibration message, length delimited. Does not implicitly {@link PB.MotorCalibration.verify|verify} messages.
         * @param message MotorCalibration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMotorCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MotorCalibration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MotorCalibration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.MotorCalibration;

        /**
         * Decodes a MotorCalibration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MotorCalibration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.MotorCalibration;

        /**
         * Verifies a MotorCalibration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MotorCalibration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MotorCalibration
         */
        public static fromObject(object: { [k: string]: any }): PB.MotorCalibration;

        /**
         * Creates a plain object from a MotorCalibration message. Also converts values to other types if specified.
         * @param message MotorCalibration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MotorCalibration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MotorCalibration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MotorCalibration
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StrainState. */
    interface IStrainState {

        /** StrainState pressWeight */
        pressWeight?: (number|null);

        /** StrainState pressValue */
        pressValue?: (number|null);
    }

    /** Represents a StrainState. */
    class StrainState implements IStrainState {

        /**
         * Constructs a new StrainState.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IStrainState);

        /** StrainState pressWeight. */
        public pressWeight: number;

        /** StrainState pressValue. */
        public pressValue: number;

        /**
         * Creates a new StrainState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StrainState instance
         */
        public static create(properties?: PB.IStrainState): PB.StrainState;

        /**
         * Encodes the specified StrainState message. Does not implicitly {@link PB.StrainState.verify|verify} messages.
         * @param message StrainState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IStrainState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StrainState message, length delimited. Does not implicitly {@link PB.StrainState.verify|verify} messages.
         * @param message StrainState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IStrainState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StrainState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StrainState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.StrainState;

        /**
         * Decodes a StrainState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StrainState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.StrainState;

        /**
         * Verifies a StrainState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StrainState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StrainState
         */
        public static fromObject(object: { [k: string]: any }): PB.StrainState;

        /**
         * Creates a plain object from a StrainState message. Also converts values to other types if specified.
         * @param message StrainState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.StrainState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StrainState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StrainState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** SmartKnobCommand enum. */
    enum SmartKnobCommand {
        GET_KNOB_INFO = 0,
        MOTOR_CALIBRATE = 1,
        STRAIN_CALIBRATE = 2
    }

    /** Properties of a StrainCalibration. */
    interface IStrainCalibration {

        /** StrainCalibration calibrationWeight */
        calibrationWeight?: (number|null);
    }

    /** Represents a StrainCalibration. */
    class StrainCalibration implements IStrainCalibration {

        /**
         * Constructs a new StrainCalibration.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IStrainCalibration);

        /** StrainCalibration calibrationWeight. */
        public calibrationWeight: number;

        /**
         * Creates a new StrainCalibration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StrainCalibration instance
         */
        public static create(properties?: PB.IStrainCalibration): PB.StrainCalibration;

        /**
         * Encodes the specified StrainCalibration message. Does not implicitly {@link PB.StrainCalibration.verify|verify} messages.
         * @param message StrainCalibration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IStrainCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StrainCalibration message, length delimited. Does not implicitly {@link PB.StrainCalibration.verify|verify} messages.
         * @param message StrainCalibration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IStrainCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StrainCalibration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StrainCalibration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.StrainCalibration;

        /**
         * Decodes a StrainCalibration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StrainCalibration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.StrainCalibration;

        /**
         * Verifies a StrainCalibration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StrainCalibration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StrainCalibration
         */
        public static fromObject(object: { [k: string]: any }): PB.StrainCalibration;

        /**
         * Creates a plain object from a StrainCalibration message. Also converts values to other types if specified.
         * @param message StrainCalibration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.StrainCalibration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StrainCalibration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StrainCalibration
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace SETTINGS. */
export namespace SETTINGS {

    /** Properties of a Settings. */
    interface ISettings {

        /** Settings protocolVersion */
        protocolVersion?: (number|null);

        /** Settings screen */
        screen?: (SETTINGS.IScreen|null);

        /** Settings ledRing */
        ledRing?: (SETTINGS.ILedRing|null);
    }

    /** Represents a Settings. */
    class Settings implements ISettings {

        /**
         * Constructs a new Settings.
         * @param [properties] Properties to set
         */
        constructor(properties?: SETTINGS.ISettings);

        /** Settings protocolVersion. */
        public protocolVersion: number;

        /** Settings screen. */
        public screen?: (SETTINGS.IScreen|null);

        /** Settings ledRing. */
        public ledRing?: (SETTINGS.ILedRing|null);

        /**
         * Creates a new Settings instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Settings instance
         */
        public static create(properties?: SETTINGS.ISettings): SETTINGS.Settings;

        /**
         * Encodes the specified Settings message. Does not implicitly {@link SETTINGS.Settings.verify|verify} messages.
         * @param message Settings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SETTINGS.ISettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Settings message, length delimited. Does not implicitly {@link SETTINGS.Settings.verify|verify} messages.
         * @param message Settings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SETTINGS.ISettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Settings message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Settings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SETTINGS.Settings;

        /**
         * Decodes a Settings message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Settings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SETTINGS.Settings;

        /**
         * Verifies a Settings message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Settings message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Settings
         */
        public static fromObject(object: { [k: string]: any }): SETTINGS.Settings;

        /**
         * Creates a plain object from a Settings message. Also converts values to other types if specified.
         * @param message Settings
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SETTINGS.Settings, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Settings to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Settings
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Screen. */
    interface IScreen {

        /** Screen dim */
        dim?: (boolean|null);

        /** Screen maxBright */
        maxBright?: (number|null);

        /** Screen minBright */
        minBright?: (number|null);

        /** Screen timeout */
        timeout?: (number|null);
    }

    /** Represents a Screen. */
    class Screen implements IScreen {

        /**
         * Constructs a new Screen.
         * @param [properties] Properties to set
         */
        constructor(properties?: SETTINGS.IScreen);

        /** Screen dim. */
        public dim: boolean;

        /** Screen maxBright. */
        public maxBright: number;

        /** Screen minBright. */
        public minBright: number;

        /** Screen timeout. */
        public timeout: number;

        /**
         * Creates a new Screen instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Screen instance
         */
        public static create(properties?: SETTINGS.IScreen): SETTINGS.Screen;

        /**
         * Encodes the specified Screen message. Does not implicitly {@link SETTINGS.Screen.verify|verify} messages.
         * @param message Screen message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SETTINGS.IScreen, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Screen message, length delimited. Does not implicitly {@link SETTINGS.Screen.verify|verify} messages.
         * @param message Screen message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SETTINGS.IScreen, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Screen message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Screen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SETTINGS.Screen;

        /**
         * Decodes a Screen message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Screen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SETTINGS.Screen;

        /**
         * Verifies a Screen message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Screen message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Screen
         */
        public static fromObject(object: { [k: string]: any }): SETTINGS.Screen;

        /**
         * Creates a plain object from a Screen message. Also converts values to other types if specified.
         * @param message Screen
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SETTINGS.Screen, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Screen to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Screen
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Beacon. */
    interface IBeacon {

        /** Beacon enabled */
        enabled?: (boolean|null);

        /** Beacon brightness */
        brightness?: (number|null);

        /** Beacon color */
        color?: (number|null);
    }

    /** Represents a Beacon. */
    class Beacon implements IBeacon {

        /**
         * Constructs a new Beacon.
         * @param [properties] Properties to set
         */
        constructor(properties?: SETTINGS.IBeacon);

        /** Beacon enabled. */
        public enabled: boolean;

        /** Beacon brightness. */
        public brightness: number;

        /** Beacon color. */
        public color: number;

        /**
         * Creates a new Beacon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Beacon instance
         */
        public static create(properties?: SETTINGS.IBeacon): SETTINGS.Beacon;

        /**
         * Encodes the specified Beacon message. Does not implicitly {@link SETTINGS.Beacon.verify|verify} messages.
         * @param message Beacon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SETTINGS.IBeacon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Beacon message, length delimited. Does not implicitly {@link SETTINGS.Beacon.verify|verify} messages.
         * @param message Beacon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SETTINGS.IBeacon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Beacon message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Beacon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SETTINGS.Beacon;

        /**
         * Decodes a Beacon message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Beacon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SETTINGS.Beacon;

        /**
         * Verifies a Beacon message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Beacon message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Beacon
         */
        public static fromObject(object: { [k: string]: any }): SETTINGS.Beacon;

        /**
         * Creates a plain object from a Beacon message. Also converts values to other types if specified.
         * @param message Beacon
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SETTINGS.Beacon, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Beacon to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Beacon
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LedRing. */
    interface ILedRing {

        /** LedRing enabled */
        enabled?: (boolean|null);

        /** LedRing dim */
        dim?: (boolean|null);

        /** LedRing maxBright */
        maxBright?: (number|null);

        /** LedRing minBright */
        minBright?: (number|null);

        /** LedRing timeout */
        timeout?: (number|null);

        /** LedRing color */
        color?: (number|null);

        /** LedRing beacon */
        beacon?: (SETTINGS.IBeacon|null);
    }

    /** Represents a LedRing. */
    class LedRing implements ILedRing {

        /**
         * Constructs a new LedRing.
         * @param [properties] Properties to set
         */
        constructor(properties?: SETTINGS.ILedRing);

        /** LedRing enabled. */
        public enabled: boolean;

        /** LedRing dim. */
        public dim: boolean;

        /** LedRing maxBright. */
        public maxBright: number;

        /** LedRing minBright. */
        public minBright: number;

        /** LedRing timeout. */
        public timeout: number;

        /** LedRing color. */
        public color: number;

        /** LedRing beacon. */
        public beacon?: (SETTINGS.IBeacon|null);

        /**
         * Creates a new LedRing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LedRing instance
         */
        public static create(properties?: SETTINGS.ILedRing): SETTINGS.LedRing;

        /**
         * Encodes the specified LedRing message. Does not implicitly {@link SETTINGS.LedRing.verify|verify} messages.
         * @param message LedRing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SETTINGS.ILedRing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LedRing message, length delimited. Does not implicitly {@link SETTINGS.LedRing.verify|verify} messages.
         * @param message LedRing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SETTINGS.ILedRing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LedRing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LedRing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SETTINGS.LedRing;

        /**
         * Decodes a LedRing message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LedRing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SETTINGS.LedRing;

        /**
         * Verifies a LedRing message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LedRing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LedRing
         */
        public static fromObject(object: { [k: string]: any }): SETTINGS.LedRing;

        /**
         * Creates a plain object from a LedRing message. Also converts values to other types if specified.
         * @param message LedRing
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SETTINGS.LedRing, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LedRing to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LedRing
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

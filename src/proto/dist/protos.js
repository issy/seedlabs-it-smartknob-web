/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const PB = $root.PB = (() => {

    /**
     * Namespace PB.
     * @exports PB
     * @namespace
     */
    const PB = {};

    PB.FromSmartKnob = (function() {

        /**
         * Properties of a FromSmartKnob.
         * @memberof PB
         * @interface IFromSmartKnob
         * @property {number|null} [protocolVersion] FromSmartKnob protocolVersion
         * @property {PB.IKnob|null} [knob] FromSmartKnob knob
         * @property {PB.IAck|null} [ack] FromSmartKnob ack
         * @property {PB.ILog|null} [log] FromSmartKnob log
         * @property {PB.ISmartKnobState|null} [smartknobState] FromSmartKnob smartknobState
         * @property {PB.IMotorCalibState|null} [motorCalibState] FromSmartKnob motorCalibState
         * @property {PB.IStrainCalibState|null} [strainCalibState] FromSmartKnob strainCalibState
         */

        /**
         * Constructs a new FromSmartKnob.
         * @memberof PB
         * @classdesc Represents a FromSmartKnob.
         * @implements IFromSmartKnob
         * @constructor
         * @param {PB.IFromSmartKnob=} [properties] Properties to set
         */
        function FromSmartKnob(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FromSmartKnob protocolVersion.
         * @member {number} protocolVersion
         * @memberof PB.FromSmartKnob
         * @instance
         */
        FromSmartKnob.prototype.protocolVersion = 0;

        /**
         * FromSmartKnob knob.
         * @member {PB.IKnob|null|undefined} knob
         * @memberof PB.FromSmartKnob
         * @instance
         */
        FromSmartKnob.prototype.knob = null;

        /**
         * FromSmartKnob ack.
         * @member {PB.IAck|null|undefined} ack
         * @memberof PB.FromSmartKnob
         * @instance
         */
        FromSmartKnob.prototype.ack = null;

        /**
         * FromSmartKnob log.
         * @member {PB.ILog|null|undefined} log
         * @memberof PB.FromSmartKnob
         * @instance
         */
        FromSmartKnob.prototype.log = null;

        /**
         * FromSmartKnob smartknobState.
         * @member {PB.ISmartKnobState|null|undefined} smartknobState
         * @memberof PB.FromSmartKnob
         * @instance
         */
        FromSmartKnob.prototype.smartknobState = null;

        /**
         * FromSmartKnob motorCalibState.
         * @member {PB.IMotorCalibState|null|undefined} motorCalibState
         * @memberof PB.FromSmartKnob
         * @instance
         */
        FromSmartKnob.prototype.motorCalibState = null;

        /**
         * FromSmartKnob strainCalibState.
         * @member {PB.IStrainCalibState|null|undefined} strainCalibState
         * @memberof PB.FromSmartKnob
         * @instance
         */
        FromSmartKnob.prototype.strainCalibState = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * FromSmartKnob payload.
         * @member {"knob"|"ack"|"log"|"smartknobState"|"motorCalibState"|"strainCalibState"|undefined} payload
         * @memberof PB.FromSmartKnob
         * @instance
         */
        Object.defineProperty(FromSmartKnob.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["knob", "ack", "log", "smartknobState", "motorCalibState", "strainCalibState"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new FromSmartKnob instance using the specified properties.
         * @function create
         * @memberof PB.FromSmartKnob
         * @static
         * @param {PB.IFromSmartKnob=} [properties] Properties to set
         * @returns {PB.FromSmartKnob} FromSmartKnob instance
         */
        FromSmartKnob.create = function create(properties) {
            return new FromSmartKnob(properties);
        };

        /**
         * Encodes the specified FromSmartKnob message. Does not implicitly {@link PB.FromSmartKnob.verify|verify} messages.
         * @function encode
         * @memberof PB.FromSmartKnob
         * @static
         * @param {PB.IFromSmartKnob} message FromSmartKnob message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FromSmartKnob.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.protocolVersion != null && Object.hasOwnProperty.call(message, "protocolVersion"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.protocolVersion);
            if (message.knob != null && Object.hasOwnProperty.call(message, "knob"))
                $root.PB.Knob.encode(message.knob, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.ack != null && Object.hasOwnProperty.call(message, "ack"))
                $root.PB.Ack.encode(message.ack, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.log != null && Object.hasOwnProperty.call(message, "log"))
                $root.PB.Log.encode(message.log, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.smartknobState != null && Object.hasOwnProperty.call(message, "smartknobState"))
                $root.PB.SmartKnobState.encode(message.smartknobState, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.motorCalibState != null && Object.hasOwnProperty.call(message, "motorCalibState"))
                $root.PB.MotorCalibState.encode(message.motorCalibState, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.strainCalibState != null && Object.hasOwnProperty.call(message, "strainCalibState"))
                $root.PB.StrainCalibState.encode(message.strainCalibState, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FromSmartKnob message, length delimited. Does not implicitly {@link PB.FromSmartKnob.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.FromSmartKnob
         * @static
         * @param {PB.IFromSmartKnob} message FromSmartKnob message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FromSmartKnob.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FromSmartKnob message from the specified reader or buffer.
         * @function decode
         * @memberof PB.FromSmartKnob
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.FromSmartKnob} FromSmartKnob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FromSmartKnob.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.FromSmartKnob();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.protocolVersion = reader.uint32();
                        break;
                    }
                case 3: {
                        message.knob = $root.PB.Knob.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.ack = $root.PB.Ack.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.log = $root.PB.Log.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.smartknobState = $root.PB.SmartKnobState.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.motorCalibState = $root.PB.MotorCalibState.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.strainCalibState = $root.PB.StrainCalibState.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FromSmartKnob message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.FromSmartKnob
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.FromSmartKnob} FromSmartKnob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FromSmartKnob.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FromSmartKnob message.
         * @function verify
         * @memberof PB.FromSmartKnob
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FromSmartKnob.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
                if (!$util.isInteger(message.protocolVersion))
                    return "protocolVersion: integer expected";
            if (message.knob != null && message.hasOwnProperty("knob")) {
                properties.payload = 1;
                {
                    let error = $root.PB.Knob.verify(message.knob);
                    if (error)
                        return "knob." + error;
                }
            }
            if (message.ack != null && message.hasOwnProperty("ack")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.PB.Ack.verify(message.ack);
                    if (error)
                        return "ack." + error;
                }
            }
            if (message.log != null && message.hasOwnProperty("log")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.PB.Log.verify(message.log);
                    if (error)
                        return "log." + error;
                }
            }
            if (message.smartknobState != null && message.hasOwnProperty("smartknobState")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.PB.SmartKnobState.verify(message.smartknobState);
                    if (error)
                        return "smartknobState." + error;
                }
            }
            if (message.motorCalibState != null && message.hasOwnProperty("motorCalibState")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.PB.MotorCalibState.verify(message.motorCalibState);
                    if (error)
                        return "motorCalibState." + error;
                }
            }
            if (message.strainCalibState != null && message.hasOwnProperty("strainCalibState")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.PB.StrainCalibState.verify(message.strainCalibState);
                    if (error)
                        return "strainCalibState." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FromSmartKnob message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.FromSmartKnob
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.FromSmartKnob} FromSmartKnob
         */
        FromSmartKnob.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.FromSmartKnob)
                return object;
            let message = new $root.PB.FromSmartKnob();
            if (object.protocolVersion != null)
                message.protocolVersion = object.protocolVersion >>> 0;
            if (object.knob != null) {
                if (typeof object.knob !== "object")
                    throw TypeError(".PB.FromSmartKnob.knob: object expected");
                message.knob = $root.PB.Knob.fromObject(object.knob);
            }
            if (object.ack != null) {
                if (typeof object.ack !== "object")
                    throw TypeError(".PB.FromSmartKnob.ack: object expected");
                message.ack = $root.PB.Ack.fromObject(object.ack);
            }
            if (object.log != null) {
                if (typeof object.log !== "object")
                    throw TypeError(".PB.FromSmartKnob.log: object expected");
                message.log = $root.PB.Log.fromObject(object.log);
            }
            if (object.smartknobState != null) {
                if (typeof object.smartknobState !== "object")
                    throw TypeError(".PB.FromSmartKnob.smartknobState: object expected");
                message.smartknobState = $root.PB.SmartKnobState.fromObject(object.smartknobState);
            }
            if (object.motorCalibState != null) {
                if (typeof object.motorCalibState !== "object")
                    throw TypeError(".PB.FromSmartKnob.motorCalibState: object expected");
                message.motorCalibState = $root.PB.MotorCalibState.fromObject(object.motorCalibState);
            }
            if (object.strainCalibState != null) {
                if (typeof object.strainCalibState !== "object")
                    throw TypeError(".PB.FromSmartKnob.strainCalibState: object expected");
                message.strainCalibState = $root.PB.StrainCalibState.fromObject(object.strainCalibState);
            }
            return message;
        };

        /**
         * Creates a plain object from a FromSmartKnob message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.FromSmartKnob
         * @static
         * @param {PB.FromSmartKnob} message FromSmartKnob
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FromSmartKnob.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.protocolVersion = 0;
            if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
                object.protocolVersion = message.protocolVersion;
            if (message.knob != null && message.hasOwnProperty("knob")) {
                object.knob = $root.PB.Knob.toObject(message.knob, options);
                if (options.oneofs)
                    object.payload = "knob";
            }
            if (message.ack != null && message.hasOwnProperty("ack")) {
                object.ack = $root.PB.Ack.toObject(message.ack, options);
                if (options.oneofs)
                    object.payload = "ack";
            }
            if (message.log != null && message.hasOwnProperty("log")) {
                object.log = $root.PB.Log.toObject(message.log, options);
                if (options.oneofs)
                    object.payload = "log";
            }
            if (message.smartknobState != null && message.hasOwnProperty("smartknobState")) {
                object.smartknobState = $root.PB.SmartKnobState.toObject(message.smartknobState, options);
                if (options.oneofs)
                    object.payload = "smartknobState";
            }
            if (message.motorCalibState != null && message.hasOwnProperty("motorCalibState")) {
                object.motorCalibState = $root.PB.MotorCalibState.toObject(message.motorCalibState, options);
                if (options.oneofs)
                    object.payload = "motorCalibState";
            }
            if (message.strainCalibState != null && message.hasOwnProperty("strainCalibState")) {
                object.strainCalibState = $root.PB.StrainCalibState.toObject(message.strainCalibState, options);
                if (options.oneofs)
                    object.payload = "strainCalibState";
            }
            return object;
        };

        /**
         * Converts this FromSmartKnob to JSON.
         * @function toJSON
         * @memberof PB.FromSmartKnob
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FromSmartKnob.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FromSmartKnob
         * @function getTypeUrl
         * @memberof PB.FromSmartKnob
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FromSmartKnob.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PB.FromSmartKnob";
        };

        return FromSmartKnob;
    })();

    PB.ToSmartknob = (function() {

        /**
         * Properties of a ToSmartknob.
         * @memberof PB
         * @interface IToSmartknob
         * @property {number|null} [protocolVersion] ToSmartknob protocolVersion
         * @property {number|null} [nonce] ToSmartknob nonce
         * @property {PB.IRequestState|null} [requestState] ToSmartknob requestState
         * @property {PB.ISmartKnobConfig|null} [smartknobConfig] ToSmartknob smartknobConfig
         * @property {PB.SmartKnobCommand|null} [smartknobCommand] ToSmartknob smartknobCommand
         * @property {PB.IStrainCalibration|null} [strainCalibration] ToSmartknob strainCalibration
         * @property {SETTINGS.ISettings|null} [settings] ToSmartknob settings
         */

        /**
         * Constructs a new ToSmartknob.
         * @memberof PB
         * @classdesc Represents a ToSmartknob.
         * @implements IToSmartknob
         * @constructor
         * @param {PB.IToSmartknob=} [properties] Properties to set
         */
        function ToSmartknob(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ToSmartknob protocolVersion.
         * @member {number} protocolVersion
         * @memberof PB.ToSmartknob
         * @instance
         */
        ToSmartknob.prototype.protocolVersion = 0;

        /**
         * ToSmartknob nonce.
         * @member {number} nonce
         * @memberof PB.ToSmartknob
         * @instance
         */
        ToSmartknob.prototype.nonce = 0;

        /**
         * ToSmartknob requestState.
         * @member {PB.IRequestState|null|undefined} requestState
         * @memberof PB.ToSmartknob
         * @instance
         */
        ToSmartknob.prototype.requestState = null;

        /**
         * ToSmartknob smartknobConfig.
         * @member {PB.ISmartKnobConfig|null|undefined} smartknobConfig
         * @memberof PB.ToSmartknob
         * @instance
         */
        ToSmartknob.prototype.smartknobConfig = null;

        /**
         * ToSmartknob smartknobCommand.
         * @member {PB.SmartKnobCommand|null|undefined} smartknobCommand
         * @memberof PB.ToSmartknob
         * @instance
         */
        ToSmartknob.prototype.smartknobCommand = null;

        /**
         * ToSmartknob strainCalibration.
         * @member {PB.IStrainCalibration|null|undefined} strainCalibration
         * @memberof PB.ToSmartknob
         * @instance
         */
        ToSmartknob.prototype.strainCalibration = null;

        /**
         * ToSmartknob settings.
         * @member {SETTINGS.ISettings|null|undefined} settings
         * @memberof PB.ToSmartknob
         * @instance
         */
        ToSmartknob.prototype.settings = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ToSmartknob payload.
         * @member {"requestState"|"smartknobConfig"|"smartknobCommand"|"strainCalibration"|"settings"|undefined} payload
         * @memberof PB.ToSmartknob
         * @instance
         */
        Object.defineProperty(ToSmartknob.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["requestState", "smartknobConfig", "smartknobCommand", "strainCalibration", "settings"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ToSmartknob instance using the specified properties.
         * @function create
         * @memberof PB.ToSmartknob
         * @static
         * @param {PB.IToSmartknob=} [properties] Properties to set
         * @returns {PB.ToSmartknob} ToSmartknob instance
         */
        ToSmartknob.create = function create(properties) {
            return new ToSmartknob(properties);
        };

        /**
         * Encodes the specified ToSmartknob message. Does not implicitly {@link PB.ToSmartknob.verify|verify} messages.
         * @function encode
         * @memberof PB.ToSmartknob
         * @static
         * @param {PB.IToSmartknob} message ToSmartknob message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ToSmartknob.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.protocolVersion != null && Object.hasOwnProperty.call(message, "protocolVersion"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.protocolVersion);
            if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.nonce);
            if (message.requestState != null && Object.hasOwnProperty.call(message, "requestState"))
                $root.PB.RequestState.encode(message.requestState, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.smartknobConfig != null && Object.hasOwnProperty.call(message, "smartknobConfig"))
                $root.PB.SmartKnobConfig.encode(message.smartknobConfig, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.smartknobCommand != null && Object.hasOwnProperty.call(message, "smartknobCommand"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.smartknobCommand);
            if (message.strainCalibration != null && Object.hasOwnProperty.call(message, "strainCalibration"))
                $root.PB.StrainCalibration.encode(message.strainCalibration, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.settings != null && Object.hasOwnProperty.call(message, "settings"))
                $root.SETTINGS.Settings.encode(message.settings, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ToSmartknob message, length delimited. Does not implicitly {@link PB.ToSmartknob.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.ToSmartknob
         * @static
         * @param {PB.IToSmartknob} message ToSmartknob message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ToSmartknob.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ToSmartknob message from the specified reader or buffer.
         * @function decode
         * @memberof PB.ToSmartknob
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.ToSmartknob} ToSmartknob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ToSmartknob.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.ToSmartknob();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.protocolVersion = reader.uint32();
                        break;
                    }
                case 2: {
                        message.nonce = reader.uint32();
                        break;
                    }
                case 3: {
                        message.requestState = $root.PB.RequestState.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.smartknobConfig = $root.PB.SmartKnobConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.smartknobCommand = reader.int32();
                        break;
                    }
                case 6: {
                        message.strainCalibration = $root.PB.StrainCalibration.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.settings = $root.SETTINGS.Settings.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ToSmartknob message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.ToSmartknob
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.ToSmartknob} ToSmartknob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ToSmartknob.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ToSmartknob message.
         * @function verify
         * @memberof PB.ToSmartknob
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ToSmartknob.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
                if (!$util.isInteger(message.protocolVersion))
                    return "protocolVersion: integer expected";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!$util.isInteger(message.nonce))
                    return "nonce: integer expected";
            if (message.requestState != null && message.hasOwnProperty("requestState")) {
                properties.payload = 1;
                {
                    let error = $root.PB.RequestState.verify(message.requestState);
                    if (error)
                        return "requestState." + error;
                }
            }
            if (message.smartknobConfig != null && message.hasOwnProperty("smartknobConfig")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.PB.SmartKnobConfig.verify(message.smartknobConfig);
                    if (error)
                        return "smartknobConfig." + error;
                }
            }
            if (message.smartknobCommand != null && message.hasOwnProperty("smartknobCommand")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                switch (message.smartknobCommand) {
                default:
                    return "smartknobCommand: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            }
            if (message.strainCalibration != null && message.hasOwnProperty("strainCalibration")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.PB.StrainCalibration.verify(message.strainCalibration);
                    if (error)
                        return "strainCalibration." + error;
                }
            }
            if (message.settings != null && message.hasOwnProperty("settings")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.SETTINGS.Settings.verify(message.settings);
                    if (error)
                        return "settings." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ToSmartknob message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.ToSmartknob
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.ToSmartknob} ToSmartknob
         */
        ToSmartknob.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.ToSmartknob)
                return object;
            let message = new $root.PB.ToSmartknob();
            if (object.protocolVersion != null)
                message.protocolVersion = object.protocolVersion >>> 0;
            if (object.nonce != null)
                message.nonce = object.nonce >>> 0;
            if (object.requestState != null) {
                if (typeof object.requestState !== "object")
                    throw TypeError(".PB.ToSmartknob.requestState: object expected");
                message.requestState = $root.PB.RequestState.fromObject(object.requestState);
            }
            if (object.smartknobConfig != null) {
                if (typeof object.smartknobConfig !== "object")
                    throw TypeError(".PB.ToSmartknob.smartknobConfig: object expected");
                message.smartknobConfig = $root.PB.SmartKnobConfig.fromObject(object.smartknobConfig);
            }
            switch (object.smartknobCommand) {
            default:
                if (typeof object.smartknobCommand === "number") {
                    message.smartknobCommand = object.smartknobCommand;
                    break;
                }
                break;
            case "GET_KNOB_INFO":
            case 0:
                message.smartknobCommand = 0;
                break;
            case "MOTOR_CALIBRATE":
            case 1:
                message.smartknobCommand = 1;
                break;
            case "STRAIN_CALIBRATE":
            case 2:
                message.smartknobCommand = 2;
                break;
            }
            if (object.strainCalibration != null) {
                if (typeof object.strainCalibration !== "object")
                    throw TypeError(".PB.ToSmartknob.strainCalibration: object expected");
                message.strainCalibration = $root.PB.StrainCalibration.fromObject(object.strainCalibration);
            }
            if (object.settings != null) {
                if (typeof object.settings !== "object")
                    throw TypeError(".PB.ToSmartknob.settings: object expected");
                message.settings = $root.SETTINGS.Settings.fromObject(object.settings);
            }
            return message;
        };

        /**
         * Creates a plain object from a ToSmartknob message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.ToSmartknob
         * @static
         * @param {PB.ToSmartknob} message ToSmartknob
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ToSmartknob.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.protocolVersion = 0;
                object.nonce = 0;
            }
            if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
                object.protocolVersion = message.protocolVersion;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                object.nonce = message.nonce;
            if (message.requestState != null && message.hasOwnProperty("requestState")) {
                object.requestState = $root.PB.RequestState.toObject(message.requestState, options);
                if (options.oneofs)
                    object.payload = "requestState";
            }
            if (message.smartknobConfig != null && message.hasOwnProperty("smartknobConfig")) {
                object.smartknobConfig = $root.PB.SmartKnobConfig.toObject(message.smartknobConfig, options);
                if (options.oneofs)
                    object.payload = "smartknobConfig";
            }
            if (message.smartknobCommand != null && message.hasOwnProperty("smartknobCommand")) {
                object.smartknobCommand = options.enums === String ? $root.PB.SmartKnobCommand[message.smartknobCommand] === undefined ? message.smartknobCommand : $root.PB.SmartKnobCommand[message.smartknobCommand] : message.smartknobCommand;
                if (options.oneofs)
                    object.payload = "smartknobCommand";
            }
            if (message.strainCalibration != null && message.hasOwnProperty("strainCalibration")) {
                object.strainCalibration = $root.PB.StrainCalibration.toObject(message.strainCalibration, options);
                if (options.oneofs)
                    object.payload = "strainCalibration";
            }
            if (message.settings != null && message.hasOwnProperty("settings")) {
                object.settings = $root.SETTINGS.Settings.toObject(message.settings, options);
                if (options.oneofs)
                    object.payload = "settings";
            }
            return object;
        };

        /**
         * Converts this ToSmartknob to JSON.
         * @function toJSON
         * @memberof PB.ToSmartknob
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ToSmartknob.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ToSmartknob
         * @function getTypeUrl
         * @memberof PB.ToSmartknob
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ToSmartknob.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PB.ToSmartknob";
        };

        return ToSmartknob;
    })();

    PB.Knob = (function() {

        /**
         * Properties of a Knob.
         * @memberof PB
         * @interface IKnob
         * @property {string|null} [macAddress] Knob macAddress
         * @property {string|null} [ipAddress] Knob ipAddress
         * @property {PB.IPersistentConfiguration|null} [persistentConfig] Knob persistentConfig
         * @property {SETTINGS.ISettings|null} [settings] Knob settings
         */

        /**
         * Constructs a new Knob.
         * @memberof PB
         * @classdesc Initial knob information.
         * @implements IKnob
         * @constructor
         * @param {PB.IKnob=} [properties] Properties to set
         */
        function Knob(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Knob macAddress.
         * @member {string} macAddress
         * @memberof PB.Knob
         * @instance
         */
        Knob.prototype.macAddress = "";

        /**
         * Knob ipAddress.
         * @member {string} ipAddress
         * @memberof PB.Knob
         * @instance
         */
        Knob.prototype.ipAddress = "";

        /**
         * Knob persistentConfig.
         * @member {PB.IPersistentConfiguration|null|undefined} persistentConfig
         * @memberof PB.Knob
         * @instance
         */
        Knob.prototype.persistentConfig = null;

        /**
         * Knob settings.
         * @member {SETTINGS.ISettings|null|undefined} settings
         * @memberof PB.Knob
         * @instance
         */
        Knob.prototype.settings = null;

        /**
         * Creates a new Knob instance using the specified properties.
         * @function create
         * @memberof PB.Knob
         * @static
         * @param {PB.IKnob=} [properties] Properties to set
         * @returns {PB.Knob} Knob instance
         */
        Knob.create = function create(properties) {
            return new Knob(properties);
        };

        /**
         * Encodes the specified Knob message. Does not implicitly {@link PB.Knob.verify|verify} messages.
         * @function encode
         * @memberof PB.Knob
         * @static
         * @param {PB.IKnob} message Knob message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Knob.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.macAddress != null && Object.hasOwnProperty.call(message, "macAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.macAddress);
            if (message.ipAddress != null && Object.hasOwnProperty.call(message, "ipAddress"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ipAddress);
            if (message.persistentConfig != null && Object.hasOwnProperty.call(message, "persistentConfig"))
                $root.PB.PersistentConfiguration.encode(message.persistentConfig, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.settings != null && Object.hasOwnProperty.call(message, "settings"))
                $root.SETTINGS.Settings.encode(message.settings, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Knob message, length delimited. Does not implicitly {@link PB.Knob.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.Knob
         * @static
         * @param {PB.IKnob} message Knob message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Knob.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Knob message from the specified reader or buffer.
         * @function decode
         * @memberof PB.Knob
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.Knob} Knob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Knob.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.Knob();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.macAddress = reader.string();
                        break;
                    }
                case 2: {
                        message.ipAddress = reader.string();
                        break;
                    }
                case 3: {
                        message.persistentConfig = $root.PB.PersistentConfiguration.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.settings = $root.SETTINGS.Settings.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Knob message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.Knob
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.Knob} Knob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Knob.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Knob message.
         * @function verify
         * @memberof PB.Knob
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Knob.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.macAddress != null && message.hasOwnProperty("macAddress"))
                if (!$util.isString(message.macAddress))
                    return "macAddress: string expected";
            if (message.ipAddress != null && message.hasOwnProperty("ipAddress"))
                if (!$util.isString(message.ipAddress))
                    return "ipAddress: string expected";
            if (message.persistentConfig != null && message.hasOwnProperty("persistentConfig")) {
                let error = $root.PB.PersistentConfiguration.verify(message.persistentConfig);
                if (error)
                    return "persistentConfig." + error;
            }
            if (message.settings != null && message.hasOwnProperty("settings")) {
                let error = $root.SETTINGS.Settings.verify(message.settings);
                if (error)
                    return "settings." + error;
            }
            return null;
        };

        /**
         * Creates a Knob message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.Knob
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.Knob} Knob
         */
        Knob.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.Knob)
                return object;
            let message = new $root.PB.Knob();
            if (object.macAddress != null)
                message.macAddress = String(object.macAddress);
            if (object.ipAddress != null)
                message.ipAddress = String(object.ipAddress);
            if (object.persistentConfig != null) {
                if (typeof object.persistentConfig !== "object")
                    throw TypeError(".PB.Knob.persistentConfig: object expected");
                message.persistentConfig = $root.PB.PersistentConfiguration.fromObject(object.persistentConfig);
            }
            if (object.settings != null) {
                if (typeof object.settings !== "object")
                    throw TypeError(".PB.Knob.settings: object expected");
                message.settings = $root.SETTINGS.Settings.fromObject(object.settings);
            }
            return message;
        };

        /**
         * Creates a plain object from a Knob message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.Knob
         * @static
         * @param {PB.Knob} message Knob
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Knob.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.macAddress = "";
                object.ipAddress = "";
                object.persistentConfig = null;
                object.settings = null;
            }
            if (message.macAddress != null && message.hasOwnProperty("macAddress"))
                object.macAddress = message.macAddress;
            if (message.ipAddress != null && message.hasOwnProperty("ipAddress"))
                object.ipAddress = message.ipAddress;
            if (message.persistentConfig != null && message.hasOwnProperty("persistentConfig"))
                object.persistentConfig = $root.PB.PersistentConfiguration.toObject(message.persistentConfig, options);
            if (message.settings != null && message.hasOwnProperty("settings"))
                object.settings = $root.SETTINGS.Settings.toObject(message.settings, options);
            return object;
        };

        /**
         * Converts this Knob to JSON.
         * @function toJSON
         * @memberof PB.Knob
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Knob.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Knob
         * @function getTypeUrl
         * @memberof PB.Knob
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Knob.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PB.Knob";
        };

        return Knob;
    })();

    PB.MotorCalibState = (function() {

        /**
         * Properties of a MotorCalibState.
         * @memberof PB
         * @interface IMotorCalibState
         * @property {boolean|null} [calibrated] MotorCalibState calibrated
         */

        /**
         * Constructs a new MotorCalibState.
         * @memberof PB
         * @classdesc Motor calibration state information
         * @implements IMotorCalibState
         * @constructor
         * @param {PB.IMotorCalibState=} [properties] Properties to set
         */
        function MotorCalibState(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MotorCalibState calibrated.
         * @member {boolean} calibrated
         * @memberof PB.MotorCalibState
         * @instance
         */
        MotorCalibState.prototype.calibrated = false;

        /**
         * Creates a new MotorCalibState instance using the specified properties.
         * @function create
         * @memberof PB.MotorCalibState
         * @static
         * @param {PB.IMotorCalibState=} [properties] Properties to set
         * @returns {PB.MotorCalibState} MotorCalibState instance
         */
        MotorCalibState.create = function create(properties) {
            return new MotorCalibState(properties);
        };

        /**
         * Encodes the specified MotorCalibState message. Does not implicitly {@link PB.MotorCalibState.verify|verify} messages.
         * @function encode
         * @memberof PB.MotorCalibState
         * @static
         * @param {PB.IMotorCalibState} message MotorCalibState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MotorCalibState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.calibrated != null && Object.hasOwnProperty.call(message, "calibrated"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.calibrated);
            return writer;
        };

        /**
         * Encodes the specified MotorCalibState message, length delimited. Does not implicitly {@link PB.MotorCalibState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MotorCalibState
         * @static
         * @param {PB.IMotorCalibState} message MotorCalibState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MotorCalibState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MotorCalibState message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MotorCalibState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MotorCalibState} MotorCalibState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MotorCalibState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MotorCalibState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.calibrated = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MotorCalibState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MotorCalibState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MotorCalibState} MotorCalibState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MotorCalibState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MotorCalibState message.
         * @function verify
         * @memberof PB.MotorCalibState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MotorCalibState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.calibrated != null && message.hasOwnProperty("calibrated"))
                if (typeof message.calibrated !== "boolean")
                    return "calibrated: boolean expected";
            return null;
        };

        /**
         * Creates a MotorCalibState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MotorCalibState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MotorCalibState} MotorCalibState
         */
        MotorCalibState.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MotorCalibState)
                return object;
            let message = new $root.PB.MotorCalibState();
            if (object.calibrated != null)
                message.calibrated = Boolean(object.calibrated);
            return message;
        };

        /**
         * Creates a plain object from a MotorCalibState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MotorCalibState
         * @static
         * @param {PB.MotorCalibState} message MotorCalibState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MotorCalibState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.calibrated = false;
            if (message.calibrated != null && message.hasOwnProperty("calibrated"))
                object.calibrated = message.calibrated;
            return object;
        };

        /**
         * Converts this MotorCalibState to JSON.
         * @function toJSON
         * @memberof PB.MotorCalibState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MotorCalibState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MotorCalibState
         * @function getTypeUrl
         * @memberof PB.MotorCalibState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MotorCalibState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PB.MotorCalibState";
        };

        return MotorCalibState;
    })();

    PB.StrainCalibState = (function() {

        /**
         * Properties of a StrainCalibState.
         * @memberof PB
         * @interface IStrainCalibState
         * @property {number|null} [step] StrainCalibState step
         * @property {number|null} [strainScale] StrainCalibState strainScale
         */

        /**
         * Constructs a new StrainCalibState.
         * @memberof PB
         * @classdesc Strain calibration state information
         * @implements IStrainCalibState
         * @constructor
         * @param {PB.IStrainCalibState=} [properties] Properties to set
         */
        function StrainCalibState(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StrainCalibState step.
         * @member {number} step
         * @memberof PB.StrainCalibState
         * @instance
         */
        StrainCalibState.prototype.step = 0;

        /**
         * StrainCalibState strainScale.
         * @member {number} strainScale
         * @memberof PB.StrainCalibState
         * @instance
         */
        StrainCalibState.prototype.strainScale = 0;

        /**
         * Creates a new StrainCalibState instance using the specified properties.
         * @function create
         * @memberof PB.StrainCalibState
         * @static
         * @param {PB.IStrainCalibState=} [properties] Properties to set
         * @returns {PB.StrainCalibState} StrainCalibState instance
         */
        StrainCalibState.create = function create(properties) {
            return new StrainCalibState(properties);
        };

        /**
         * Encodes the specified StrainCalibState message. Does not implicitly {@link PB.StrainCalibState.verify|verify} messages.
         * @function encode
         * @memberof PB.StrainCalibState
         * @static
         * @param {PB.IStrainCalibState} message StrainCalibState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrainCalibState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.step);
            if (message.strainScale != null && Object.hasOwnProperty.call(message, "strainScale"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.strainScale);
            return writer;
        };

        /**
         * Encodes the specified StrainCalibState message, length delimited. Does not implicitly {@link PB.StrainCalibState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.StrainCalibState
         * @static
         * @param {PB.IStrainCalibState} message StrainCalibState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrainCalibState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StrainCalibState message from the specified reader or buffer.
         * @function decode
         * @memberof PB.StrainCalibState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.StrainCalibState} StrainCalibState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrainCalibState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.StrainCalibState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.step = reader.uint32();
                        break;
                    }
                case 2: {
                        message.strainScale = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StrainCalibState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.StrainCalibState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.StrainCalibState} StrainCalibState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrainCalibState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StrainCalibState message.
         * @function verify
         * @memberof PB.StrainCalibState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StrainCalibState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.step != null && message.hasOwnProperty("step"))
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            if (message.strainScale != null && message.hasOwnProperty("strainScale"))
                if (typeof message.strainScale !== "number")
                    return "strainScale: number expected";
            return null;
        };

        /**
         * Creates a StrainCalibState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.StrainCalibState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.StrainCalibState} StrainCalibState
         */
        StrainCalibState.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.StrainCalibState)
                return object;
            let message = new $root.PB.StrainCalibState();
            if (object.step != null)
                message.step = object.step >>> 0;
            if (object.strainScale != null)
                message.strainScale = Number(object.strainScale);
            return message;
        };

        /**
         * Creates a plain object from a StrainCalibState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.StrainCalibState
         * @static
         * @param {PB.StrainCalibState} message StrainCalibState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StrainCalibState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.step = 0;
                object.strainScale = 0;
            }
            if (message.step != null && message.hasOwnProperty("step"))
                object.step = message.step;
            if (message.strainScale != null && message.hasOwnProperty("strainScale"))
                object.strainScale = options.json && !isFinite(message.strainScale) ? String(message.strainScale) : message.strainScale;
            return object;
        };

        /**
         * Converts this StrainCalibState to JSON.
         * @function toJSON
         * @memberof PB.StrainCalibState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StrainCalibState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StrainCalibState
         * @function getTypeUrl
         * @memberof PB.StrainCalibState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StrainCalibState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PB.StrainCalibState";
        };

        return StrainCalibState;
    })();

    PB.Ack = (function() {

        /**
         * Properties of an Ack.
         * @memberof PB
         * @interface IAck
         * @property {number|null} [nonce] Ack nonce
         */

        /**
         * Constructs a new Ack.
         * @memberof PB
         * @classdesc Lets the host know that a ToSmartknob message was received and should not be retried.
         * @implements IAck
         * @constructor
         * @param {PB.IAck=} [properties] Properties to set
         */
        function Ack(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ack nonce.
         * @member {number} nonce
         * @memberof PB.Ack
         * @instance
         */
        Ack.prototype.nonce = 0;

        /**
         * Creates a new Ack instance using the specified properties.
         * @function create
         * @memberof PB.Ack
         * @static
         * @param {PB.IAck=} [properties] Properties to set
         * @returns {PB.Ack} Ack instance
         */
        Ack.create = function create(properties) {
            return new Ack(properties);
        };

        /**
         * Encodes the specified Ack message. Does not implicitly {@link PB.Ack.verify|verify} messages.
         * @function encode
         * @memberof PB.Ack
         * @static
         * @param {PB.IAck} message Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.nonce);
            return writer;
        };

        /**
         * Encodes the specified Ack message, length delimited. Does not implicitly {@link PB.Ack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.Ack
         * @static
         * @param {PB.IAck} message Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Ack message from the specified reader or buffer.
         * @function decode
         * @memberof PB.Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.Ack} Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.Ack();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.nonce = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Ack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.Ack} Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Ack message.
         * @function verify
         * @memberof PB.Ack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!$util.isInteger(message.nonce))
                    return "nonce: integer expected";
            return null;
        };

        /**
         * Creates an Ack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.Ack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.Ack} Ack
         */
        Ack.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.Ack)
                return object;
            let message = new $root.PB.Ack();
            if (object.nonce != null)
                message.nonce = object.nonce >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Ack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.Ack
         * @static
         * @param {PB.Ack} message Ack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.nonce = 0;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                object.nonce = message.nonce;
            return object;
        };

        /**
         * Converts this Ack to JSON.
         * @function toJSON
         * @memberof PB.Ack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Ack
         * @function getTypeUrl
         * @memberof PB.Ack
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Ack.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PB.Ack";
        };

        return Ack;
    })();

    /**
     * LogLevel enum.
     * @name PB.LogLevel
     * @enum {number}
     * @property {number} INFO=0 INFO value
     * @property {number} WARNING=1 WARNING value
     * @property {number} ERROR=2 ERROR value
     * @property {number} DEBUG=3 DEBUG value
     * @property {number} VERBOSE=4 VERBOSE value
     */
    PB.LogLevel = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INFO"] = 0;
        values[valuesById[1] = "WARNING"] = 1;
        values[valuesById[2] = "ERROR"] = 2;
        values[valuesById[3] = "DEBUG"] = 3;
        values[valuesById[4] = "VERBOSE"] = 4;
        return values;
    })();

    PB.Log = (function() {

        /**
         * Properties of a Log.
         * @memberof PB
         * @interface ILog
         * @property {string|null} [msg] Log msg
         * @property {PB.LogLevel|null} [level] Log level
         * @property {string|null} [origin] Log origin
         * @property {boolean|null} [isVerbose] Log isVerbose
         */

        /**
         * Constructs a new Log.
         * @memberof PB
         * @classdesc Represents a Log.
         * @implements ILog
         * @constructor
         * @param {PB.ILog=} [properties] Properties to set
         */
        function Log(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Log msg.
         * @member {string} msg
         * @memberof PB.Log
         * @instance
         */
        Log.prototype.msg = "";

        /**
         * Log level.
         * @member {PB.LogLevel} level
         * @memberof PB.Log
         * @instance
         */
        Log.prototype.level = 0;

        /**
         * Log origin.
         * @member {string} origin
         * @memberof PB.Log
         * @instance
         */
        Log.prototype.origin = "";

        /**
         * Log isVerbose.
         * @member {boolean} isVerbose
         * @memberof PB.Log
         * @instance
         */
        Log.prototype.isVerbose = false;

        /**
         * Creates a new Log instance using the specified properties.
         * @function create
         * @memberof PB.Log
         * @static
         * @param {PB.ILog=} [properties] Properties to set
         * @returns {PB.Log} Log instance
         */
        Log.create = function create(properties) {
            return new Log(properties);
        };

        /**
         * Encodes the specified Log message. Does not implicitly {@link PB.Log.verify|verify} messages.
         * @function encode
         * @memberof PB.Log
         * @static
         * @param {PB.ILog} message Log message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Log.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.level);
            if (message.origin != null && Object.hasOwnProperty.call(message, "origin"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.origin);
            if (message.isVerbose != null && Object.hasOwnProperty.call(message, "isVerbose"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isVerbose);
            return writer;
        };

        /**
         * Encodes the specified Log message, length delimited. Does not implicitly {@link PB.Log.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.Log
         * @static
         * @param {PB.ILog} message Log message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Log.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Log message from the specified reader or buffer.
         * @function decode
         * @memberof PB.Log
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.Log} Log
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Log.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.Log();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.msg = reader.string();
                        break;
                    }
                case 2: {
                        message.level = reader.int32();
                        break;
                    }
                case 3: {
                        message.origin = reader.string();
                        break;
                    }
                case 4: {
                        message.isVerbose = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Log message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.Log
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.Log} Log
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Log.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Log message.
         * @function verify
         * @memberof PB.Log
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Log.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.level != null && message.hasOwnProperty("level"))
                switch (message.level) {
                default:
                    return "level: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.origin != null && message.hasOwnProperty("origin"))
                if (!$util.isString(message.origin))
                    return "origin: string expected";
            if (message.isVerbose != null && message.hasOwnProperty("isVerbose"))
                if (typeof message.isVerbose !== "boolean")
                    return "isVerbose: boolean expected";
            return null;
        };

        /**
         * Creates a Log message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.Log
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.Log} Log
         */
        Log.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.Log)
                return object;
            let message = new $root.PB.Log();
            if (object.msg != null)
                message.msg = String(object.msg);
            switch (object.level) {
            default:
                if (typeof object.level === "number") {
                    message.level = object.level;
                    break;
                }
                break;
            case "INFO":
            case 0:
                message.level = 0;
                break;
            case "WARNING":
            case 1:
                message.level = 1;
                break;
            case "ERROR":
            case 2:
                message.level = 2;
                break;
            case "DEBUG":
            case 3:
                message.level = 3;
                break;
            case "VERBOSE":
            case 4:
                message.level = 4;
                break;
            }
            if (object.origin != null)
                message.origin = String(object.origin);
            if (object.isVerbose != null)
                message.isVerbose = Boolean(object.isVerbose);
            return message;
        };

        /**
         * Creates a plain object from a Log message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.Log
         * @static
         * @param {PB.Log} message Log
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Log.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.msg = "";
                object.level = options.enums === String ? "INFO" : 0;
                object.origin = "";
                object.isVerbose = false;
            }
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = options.enums === String ? $root.PB.LogLevel[message.level] === undefined ? message.level : $root.PB.LogLevel[message.level] : message.level;
            if (message.origin != null && message.hasOwnProperty("origin"))
                object.origin = message.origin;
            if (message.isVerbose != null && message.hasOwnProperty("isVerbose"))
                object.isVerbose = message.isVerbose;
            return object;
        };

        /**
         * Converts this Log to JSON.
         * @function toJSON
         * @memberof PB.Log
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Log.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Log
         * @function getTypeUrl
         * @memberof PB.Log
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Log.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PB.Log";
        };

        return Log;
    })();

    PB.SmartKnobState = (function() {

        /**
         * Properties of a SmartKnobState.
         * @memberof PB
         * @interface ISmartKnobState
         * @property {number|null} [currentPosition] Current integer position of the knob. (Detent resolution is at integer positions)
         * @property {number|null} [subPositionUnit] Current fractional position. Typically will only range from (-snap_point, snap_point)
         * since further rotation will result in the integer position changing, but may exceed
         * those values if snap_point_bias is non-zero, or if the knob is at a bound. When the
         * knob is at a bound, this value can grow endlessly as the knob is rotated further past
         * the bound.
         * 
         * When visualizing sub_position_unit, you will likely want to apply a rubber-band easing
         * function past the bounds; a sublinear relationship will help suggest that a bound has
         * been reached.
         * @property {PB.ISmartKnobConfig|null} [config] Current SmartKnobConfig in effect at the time of this State snapshot.
         * 
         * Beware that this config contains position and sub_position_unit values, not to be
         * confused with the top level current_position and sub_position_unit values in this State
         * message. The position values in the embedded config message will almost never be useful
         * to you; you probably want to be reading the top level values from the State message.
         * @property {number|null} [pressNonce] Value that changes each time the knob is pressed. Does not change when a press is released.
         * 
         * Why this press state a "nonce" rather than a simple boolean representing the current
         * "pressed" state? It makes the protocol more robust to dropped/lost State messages; if
         * the knob was pressed/released quickly and State messages happened to be dropped during
         * that time, the press would be completely lost. Using a nonce allows the host to recognize
         * that a press has taken place at some point even if the State was lost during the press
         * itself. Is this overkill? Probably, let's revisit in future protocol versions.
         */

        /**
         * Constructs a new SmartKnobState.
         * @memberof PB
         * @classdesc Represents a SmartKnobState.
         * @implements ISmartKnobState
         * @constructor
         * @param {PB.ISmartKnobState=} [properties] Properties to set
         */
        function SmartKnobState(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Current integer position of the knob. (Detent resolution is at integer positions)
         * @member {number} currentPosition
         * @memberof PB.SmartKnobState
         * @instance
         */
        SmartKnobState.prototype.currentPosition = 0;

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
         * @member {number} subPositionUnit
         * @memberof PB.SmartKnobState
         * @instance
         */
        SmartKnobState.prototype.subPositionUnit = 0;

        /**
         * Current SmartKnobConfig in effect at the time of this State snapshot.
         * 
         * Beware that this config contains position and sub_position_unit values, not to be
         * confused with the top level current_position and sub_position_unit values in this State
         * message. The position values in the embedded config message will almost never be useful
         * to you; you probably want to be reading the top level values from the State message.
         * @member {PB.ISmartKnobConfig|null|undefined} config
         * @memberof PB.SmartKnobState
         * @instance
         */
        SmartKnobState.prototype.config = null;

        /**
         * Value that changes each time the knob is pressed. Does not change when a press is released.
         * 
         * Why this press state a "nonce" rather than a simple boolean representing the current
         * "pressed" state? It makes the protocol more robust to dropped/lost State messages; if
         * the knob was pressed/released quickly and State messages happened to be dropped during
         * that time, the press would be completely lost. Using a nonce allows the host to recognize
         * that a press has taken place at some point even if the State was lost during the press
         * itself. Is this overkill? Probably, let's revisit in future protocol versions.
         * @member {number} pressNonce
         * @memberof PB.SmartKnobState
         * @instance
         */
        SmartKnobState.prototype.pressNonce = 0;

        /**
         * Creates a new SmartKnobState instance using the specified properties.
         * @function create
         * @memberof PB.SmartKnobState
         * @static
         * @param {PB.ISmartKnobState=} [properties] Properties to set
         * @returns {PB.SmartKnobState} SmartKnobState instance
         */
        SmartKnobState.create = function create(properties) {
            return new SmartKnobState(properties);
        };

        /**
         * Encodes the specified SmartKnobState message. Does not implicitly {@link PB.SmartKnobState.verify|verify} messages.
         * @function encode
         * @memberof PB.SmartKnobState
         * @static
         * @param {PB.ISmartKnobState} message SmartKnobState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SmartKnobState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currentPosition != null && Object.hasOwnProperty.call(message, "currentPosition"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.currentPosition);
            if (message.subPositionUnit != null && Object.hasOwnProperty.call(message, "subPositionUnit"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.subPositionUnit);
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                $root.PB.SmartKnobConfig.encode(message.config, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.pressNonce != null && Object.hasOwnProperty.call(message, "pressNonce"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.pressNonce);
            return writer;
        };

        /**
         * Encodes the specified SmartKnobState message, length delimited. Does not implicitly {@link PB.SmartKnobState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.SmartKnobState
         * @static
         * @param {PB.ISmartKnobState} message SmartKnobState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SmartKnobState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SmartKnobState message from the specified reader or buffer.
         * @function decode
         * @memberof PB.SmartKnobState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.SmartKnobState} SmartKnobState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SmartKnobState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.SmartKnobState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.currentPosition = reader.int32();
                        break;
                    }
                case 2: {
                        message.subPositionUnit = reader.float();
                        break;
                    }
                case 3: {
                        message.config = $root.PB.SmartKnobConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.pressNonce = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SmartKnobState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.SmartKnobState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.SmartKnobState} SmartKnobState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SmartKnobState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SmartKnobState message.
         * @function verify
         * @memberof PB.SmartKnobState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SmartKnobState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.currentPosition != null && message.hasOwnProperty("currentPosition"))
                if (!$util.isInteger(message.currentPosition))
                    return "currentPosition: integer expected";
            if (message.subPositionUnit != null && message.hasOwnProperty("subPositionUnit"))
                if (typeof message.subPositionUnit !== "number")
                    return "subPositionUnit: number expected";
            if (message.config != null && message.hasOwnProperty("config")) {
                let error = $root.PB.SmartKnobConfig.verify(message.config);
                if (error)
                    return "config." + error;
            }
            if (message.pressNonce != null && message.hasOwnProperty("pressNonce"))
                if (!$util.isInteger(message.pressNonce))
                    return "pressNonce: integer expected";
            return null;
        };

        /**
         * Creates a SmartKnobState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.SmartKnobState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.SmartKnobState} SmartKnobState
         */
        SmartKnobState.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.SmartKnobState)
                return object;
            let message = new $root.PB.SmartKnobState();
            if (object.currentPosition != null)
                message.currentPosition = object.currentPosition | 0;
            if (object.subPositionUnit != null)
                message.subPositionUnit = Number(object.subPositionUnit);
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".PB.SmartKnobState.config: object expected");
                message.config = $root.PB.SmartKnobConfig.fromObject(object.config);
            }
            if (object.pressNonce != null)
                message.pressNonce = object.pressNonce >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SmartKnobState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.SmartKnobState
         * @static
         * @param {PB.SmartKnobState} message SmartKnobState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SmartKnobState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.currentPosition = 0;
                object.subPositionUnit = 0;
                object.config = null;
                object.pressNonce = 0;
            }
            if (message.currentPosition != null && message.hasOwnProperty("currentPosition"))
                object.currentPosition = message.currentPosition;
            if (message.subPositionUnit != null && message.hasOwnProperty("subPositionUnit"))
                object.subPositionUnit = options.json && !isFinite(message.subPositionUnit) ? String(message.subPositionUnit) : message.subPositionUnit;
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = $root.PB.SmartKnobConfig.toObject(message.config, options);
            if (message.pressNonce != null && message.hasOwnProperty("pressNonce"))
                object.pressNonce = message.pressNonce;
            return object;
        };

        /**
         * Converts this SmartKnobState to JSON.
         * @function toJSON
         * @memberof PB.SmartKnobState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SmartKnobState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SmartKnobState
         * @function getTypeUrl
         * @memberof PB.SmartKnobState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SmartKnobState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PB.SmartKnobState";
        };

        return SmartKnobState;
    })();

    PB.SmartKnobConfig = (function() {

        /**
         * Properties of a SmartKnobConfig.
         * @memberof PB
         * @interface ISmartKnobConfig
         * @property {number|null} [position] Set the integer position.
         * 
         * Note: in order to make SmartKnobConfig apply idempotently, the current position
         * will only be set to this value when it changes compared to a previous config (and
         * NOT compared to the current state!). So by default, if you send a config position
         * of 5 and the current position is 3, the position may remain at 3 if the config
         * change to 5 was previously handled. If you need to force a position update, see
         * position_nonce.
         * @property {number|null} [subPositionUnit] Set the fractional position. Typical range: (-snap_point, snap_point).
         * 
         * Actual range is technically unbounded, but in practice this value will be compared
         * against snap_point on the next control loop, so any value beyond the snap_point will
         * generally result in an integer position change (unless position is already at a
         * limit).
         * 
         * Note: idempotency implications noted in the documentation for `position` apply here
         * as well
         * @property {number|null} [positionNonce] Position is normally only applied when it changes, but sometimes it's desirable
         * to reset the position to the same value, so a nonce change can be used to force
         * the position values to be applied as well.
         * 
         * NOTE: Must be < 256
         * @property {number|null} [minPosition] Minimum position allowed.
         * @property {number|null} [maxPosition] Maximum position allowed.
         * 
         * If this is the same as min_position, there will only be one allowed position.
         * 
         * If this is less than min_position, bounds will be disabled.
         * @property {number|null} [positionWidthRadians] The angular "width" of each position/detent, in radians.
         * @property {number|null} [detentStrengthUnit] Strength of detents to apply. Typical range: [0, 1].
         * 
         * A value of 0 disables detents.
         * 
         * Values greater than 1 are not recommended and may lead to unstable behavior.
         * @property {number|null} [endstopStrengthUnit] Strength of endstop torque to apply at min/max bounds. Typical range: [0, 1].
         * 
         * A value of 0 disables endstop torque, but does not make position unbounded, meaning
         * the knob will not try to return to the valid region. For unbounded rotation, use
         * min_position and max_position.
         * 
         * Values greater than 1 are not recommended and may lead to unstable behavior.
         * @property {number|null} [snapPoint] Fractional (sub-position) threshold where the position will increment/decrement.
         * Typical range: (0.5, 1.5).
         * 
         * This defines how hysteresis is applied to positions, which is why values >
         * @property {string|null} [id] Arbitrary 50-byte string representing this "config". This can be used to identify major
         * config/mode changes. The value will be echoed back to the host via a future State's
         * embedded config field so the host can use this value to determine the mode that was
         * in effect at the time of the State snapshot instead of having to infer it from the
         * other config fields.
         * @property {Array.<number>|null} [detentPositions] For a "magnetic" detent mode - where not all positions should have detents - this
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
         * @property {number|null} [snapPointBias] Advanced feature for shifting the defined snap_point away from the center (position 0)
         * for implementing asymmetric detents. Typical value: 0 (symmetric detent force).
         * 
         * This can be used to create detents that will hold the position when carefully released,
         * but can be easily disturbed to return "home" towards position 0.
         * @property {number|null} [ledHue] Hue (0-255) for all 8 ring LEDs, if supported. Note: this will likely be replaced
         * with more configurability in a future protocol version.
         */

        /**
         * Constructs a new SmartKnobConfig.
         * @memberof PB
         * @classdesc Represents a SmartKnobConfig.
         * @implements ISmartKnobConfig
         * @constructor
         * @param {PB.ISmartKnobConfig=} [properties] Properties to set
         */
        function SmartKnobConfig(properties) {
            this.detentPositions = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Set the integer position.
         * 
         * Note: in order to make SmartKnobConfig apply idempotently, the current position
         * will only be set to this value when it changes compared to a previous config (and
         * NOT compared to the current state!). So by default, if you send a config position
         * of 5 and the current position is 3, the position may remain at 3 if the config
         * change to 5 was previously handled. If you need to force a position update, see
         * position_nonce.
         * @member {number} position
         * @memberof PB.SmartKnobConfig
         * @instance
         */
        SmartKnobConfig.prototype.position = 0;

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
         * @member {number} subPositionUnit
         * @memberof PB.SmartKnobConfig
         * @instance
         */
        SmartKnobConfig.prototype.subPositionUnit = 0;

        /**
         * Position is normally only applied when it changes, but sometimes it's desirable
         * to reset the position to the same value, so a nonce change can be used to force
         * the position values to be applied as well.
         * 
         * NOTE: Must be < 256
         * @member {number} positionNonce
         * @memberof PB.SmartKnobConfig
         * @instance
         */
        SmartKnobConfig.prototype.positionNonce = 0;

        /**
         * Minimum position allowed.
         * @member {number} minPosition
         * @memberof PB.SmartKnobConfig
         * @instance
         */
        SmartKnobConfig.prototype.minPosition = 0;

        /**
         * Maximum position allowed.
         * 
         * If this is the same as min_position, there will only be one allowed position.
         * 
         * If this is less than min_position, bounds will be disabled.
         * @member {number} maxPosition
         * @memberof PB.SmartKnobConfig
         * @instance
         */
        SmartKnobConfig.prototype.maxPosition = 0;

        /**
         * The angular "width" of each position/detent, in radians.
         * @member {number} positionWidthRadians
         * @memberof PB.SmartKnobConfig
         * @instance
         */
        SmartKnobConfig.prototype.positionWidthRadians = 0;

        /**
         * Strength of detents to apply. Typical range: [0, 1].
         * 
         * A value of 0 disables detents.
         * 
         * Values greater than 1 are not recommended and may lead to unstable behavior.
         * @member {number} detentStrengthUnit
         * @memberof PB.SmartKnobConfig
         * @instance
         */
        SmartKnobConfig.prototype.detentStrengthUnit = 0;

        /**
         * Strength of endstop torque to apply at min/max bounds. Typical range: [0, 1].
         * 
         * A value of 0 disables endstop torque, but does not make position unbounded, meaning
         * the knob will not try to return to the valid region. For unbounded rotation, use
         * min_position and max_position.
         * 
         * Values greater than 1 are not recommended and may lead to unstable behavior.
         * @member {number} endstopStrengthUnit
         * @memberof PB.SmartKnobConfig
         * @instance
         */
        SmartKnobConfig.prototype.endstopStrengthUnit = 0;

        /**
         * Fractional (sub-position) threshold where the position will increment/decrement.
         * Typical range: (0.5, 1.5).
         * 
         * This defines how hysteresis is applied to positions, which is why values >
         * @member {number} snapPoint
         * @memberof PB.SmartKnobConfig
         * @instance
         */
        SmartKnobConfig.prototype.snapPoint = 0;

        /**
         * Arbitrary 50-byte string representing this "config". This can be used to identify major
         * config/mode changes. The value will be echoed back to the host via a future State's
         * embedded config field so the host can use this value to determine the mode that was
         * in effect at the time of the State snapshot instead of having to infer it from the
         * other config fields.
         * @member {string} id
         * @memberof PB.SmartKnobConfig
         * @instance
         */
        SmartKnobConfig.prototype.id = "";

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
         * @member {Array.<number>} detentPositions
         * @memberof PB.SmartKnobConfig
         * @instance
         */
        SmartKnobConfig.prototype.detentPositions = $util.emptyArray;

        /**
         * Advanced feature for shifting the defined snap_point away from the center (position 0)
         * for implementing asymmetric detents. Typical value: 0 (symmetric detent force).
         * 
         * This can be used to create detents that will hold the position when carefully released,
         * but can be easily disturbed to return "home" towards position 0.
         * @member {number} snapPointBias
         * @memberof PB.SmartKnobConfig
         * @instance
         */
        SmartKnobConfig.prototype.snapPointBias = 0;

        /**
         * Hue (0-255) for all 8 ring LEDs, if supported. Note: this will likely be replaced
         * with more configurability in a future protocol version.
         * @member {number} ledHue
         * @memberof PB.SmartKnobConfig
         * @instance
         */
        SmartKnobConfig.prototype.ledHue = 0;

        /**
         * Creates a new SmartKnobConfig instance using the specified properties.
         * @function create
         * @memberof PB.SmartKnobConfig
         * @static
         * @param {PB.ISmartKnobConfig=} [properties] Properties to set
         * @returns {PB.SmartKnobConfig} SmartKnobConfig instance
         */
        SmartKnobConfig.create = function create(properties) {
            return new SmartKnobConfig(properties);
        };

        /**
         * Encodes the specified SmartKnobConfig message. Does not implicitly {@link PB.SmartKnobConfig.verify|verify} messages.
         * @function encode
         * @memberof PB.SmartKnobConfig
         * @static
         * @param {PB.ISmartKnobConfig} message SmartKnobConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SmartKnobConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.position);
            if (message.subPositionUnit != null && Object.hasOwnProperty.call(message, "subPositionUnit"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.subPositionUnit);
            if (message.positionNonce != null && Object.hasOwnProperty.call(message, "positionNonce"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.positionNonce);
            if (message.minPosition != null && Object.hasOwnProperty.call(message, "minPosition"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.minPosition);
            if (message.maxPosition != null && Object.hasOwnProperty.call(message, "maxPosition"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.maxPosition);
            if (message.positionWidthRadians != null && Object.hasOwnProperty.call(message, "positionWidthRadians"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.positionWidthRadians);
            if (message.detentStrengthUnit != null && Object.hasOwnProperty.call(message, "detentStrengthUnit"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.detentStrengthUnit);
            if (message.endstopStrengthUnit != null && Object.hasOwnProperty.call(message, "endstopStrengthUnit"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.endstopStrengthUnit);
            if (message.snapPoint != null && Object.hasOwnProperty.call(message, "snapPoint"))
                writer.uint32(/* id 9, wireType 5 =*/77).float(message.snapPoint);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.id);
            if (message.detentPositions != null && message.detentPositions.length) {
                writer.uint32(/* id 11, wireType 2 =*/90).fork();
                for (let i = 0; i < message.detentPositions.length; ++i)
                    writer.int32(message.detentPositions[i]);
                writer.ldelim();
            }
            if (message.snapPointBias != null && Object.hasOwnProperty.call(message, "snapPointBias"))
                writer.uint32(/* id 12, wireType 5 =*/101).float(message.snapPointBias);
            if (message.ledHue != null && Object.hasOwnProperty.call(message, "ledHue"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.ledHue);
            return writer;
        };

        /**
         * Encodes the specified SmartKnobConfig message, length delimited. Does not implicitly {@link PB.SmartKnobConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.SmartKnobConfig
         * @static
         * @param {PB.ISmartKnobConfig} message SmartKnobConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SmartKnobConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SmartKnobConfig message from the specified reader or buffer.
         * @function decode
         * @memberof PB.SmartKnobConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.SmartKnobConfig} SmartKnobConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SmartKnobConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.SmartKnobConfig();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.position = reader.int32();
                        break;
                    }
                case 2: {
                        message.subPositionUnit = reader.float();
                        break;
                    }
                case 3: {
                        message.positionNonce = reader.uint32();
                        break;
                    }
                case 4: {
                        message.minPosition = reader.int32();
                        break;
                    }
                case 5: {
                        message.maxPosition = reader.int32();
                        break;
                    }
                case 6: {
                        message.positionWidthRadians = reader.float();
                        break;
                    }
                case 7: {
                        message.detentStrengthUnit = reader.float();
                        break;
                    }
                case 8: {
                        message.endstopStrengthUnit = reader.float();
                        break;
                    }
                case 9: {
                        message.snapPoint = reader.float();
                        break;
                    }
                case 10: {
                        message.id = reader.string();
                        break;
                    }
                case 11: {
                        if (!(message.detentPositions && message.detentPositions.length))
                            message.detentPositions = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.detentPositions.push(reader.int32());
                        } else
                            message.detentPositions.push(reader.int32());
                        break;
                    }
                case 12: {
                        message.snapPointBias = reader.float();
                        break;
                    }
                case 13: {
                        message.ledHue = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SmartKnobConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.SmartKnobConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.SmartKnobConfig} SmartKnobConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SmartKnobConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SmartKnobConfig message.
         * @function verify
         * @memberof PB.SmartKnobConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SmartKnobConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.subPositionUnit != null && message.hasOwnProperty("subPositionUnit"))
                if (typeof message.subPositionUnit !== "number")
                    return "subPositionUnit: number expected";
            if (message.positionNonce != null && message.hasOwnProperty("positionNonce"))
                if (!$util.isInteger(message.positionNonce))
                    return "positionNonce: integer expected";
            if (message.minPosition != null && message.hasOwnProperty("minPosition"))
                if (!$util.isInteger(message.minPosition))
                    return "minPosition: integer expected";
            if (message.maxPosition != null && message.hasOwnProperty("maxPosition"))
                if (!$util.isInteger(message.maxPosition))
                    return "maxPosition: integer expected";
            if (message.positionWidthRadians != null && message.hasOwnProperty("positionWidthRadians"))
                if (typeof message.positionWidthRadians !== "number")
                    return "positionWidthRadians: number expected";
            if (message.detentStrengthUnit != null && message.hasOwnProperty("detentStrengthUnit"))
                if (typeof message.detentStrengthUnit !== "number")
                    return "detentStrengthUnit: number expected";
            if (message.endstopStrengthUnit != null && message.hasOwnProperty("endstopStrengthUnit"))
                if (typeof message.endstopStrengthUnit !== "number")
                    return "endstopStrengthUnit: number expected";
            if (message.snapPoint != null && message.hasOwnProperty("snapPoint"))
                if (typeof message.snapPoint !== "number")
                    return "snapPoint: number expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.detentPositions != null && message.hasOwnProperty("detentPositions")) {
                if (!Array.isArray(message.detentPositions))
                    return "detentPositions: array expected";
                for (let i = 0; i < message.detentPositions.length; ++i)
                    if (!$util.isInteger(message.detentPositions[i]))
                        return "detentPositions: integer[] expected";
            }
            if (message.snapPointBias != null && message.hasOwnProperty("snapPointBias"))
                if (typeof message.snapPointBias !== "number")
                    return "snapPointBias: number expected";
            if (message.ledHue != null && message.hasOwnProperty("ledHue"))
                if (!$util.isInteger(message.ledHue))
                    return "ledHue: integer expected";
            return null;
        };

        /**
         * Creates a SmartKnobConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.SmartKnobConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.SmartKnobConfig} SmartKnobConfig
         */
        SmartKnobConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.SmartKnobConfig)
                return object;
            let message = new $root.PB.SmartKnobConfig();
            if (object.position != null)
                message.position = object.position | 0;
            if (object.subPositionUnit != null)
                message.subPositionUnit = Number(object.subPositionUnit);
            if (object.positionNonce != null)
                message.positionNonce = object.positionNonce >>> 0;
            if (object.minPosition != null)
                message.minPosition = object.minPosition | 0;
            if (object.maxPosition != null)
                message.maxPosition = object.maxPosition | 0;
            if (object.positionWidthRadians != null)
                message.positionWidthRadians = Number(object.positionWidthRadians);
            if (object.detentStrengthUnit != null)
                message.detentStrengthUnit = Number(object.detentStrengthUnit);
            if (object.endstopStrengthUnit != null)
                message.endstopStrengthUnit = Number(object.endstopStrengthUnit);
            if (object.snapPoint != null)
                message.snapPoint = Number(object.snapPoint);
            if (object.id != null)
                message.id = String(object.id);
            if (object.detentPositions) {
                if (!Array.isArray(object.detentPositions))
                    throw TypeError(".PB.SmartKnobConfig.detentPositions: array expected");
                message.detentPositions = [];
                for (let i = 0; i < object.detentPositions.length; ++i)
                    message.detentPositions[i] = object.detentPositions[i] | 0;
            }
            if (object.snapPointBias != null)
                message.snapPointBias = Number(object.snapPointBias);
            if (object.ledHue != null)
                message.ledHue = object.ledHue | 0;
            return message;
        };

        /**
         * Creates a plain object from a SmartKnobConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.SmartKnobConfig
         * @static
         * @param {PB.SmartKnobConfig} message SmartKnobConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SmartKnobConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.detentPositions = [];
            if (options.defaults) {
                object.position = 0;
                object.subPositionUnit = 0;
                object.positionNonce = 0;
                object.minPosition = 0;
                object.maxPosition = 0;
                object.positionWidthRadians = 0;
                object.detentStrengthUnit = 0;
                object.endstopStrengthUnit = 0;
                object.snapPoint = 0;
                object.id = "";
                object.snapPointBias = 0;
                object.ledHue = 0;
            }
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.subPositionUnit != null && message.hasOwnProperty("subPositionUnit"))
                object.subPositionUnit = options.json && !isFinite(message.subPositionUnit) ? String(message.subPositionUnit) : message.subPositionUnit;
            if (message.positionNonce != null && message.hasOwnProperty("positionNonce"))
                object.positionNonce = message.positionNonce;
            if (message.minPosition != null && message.hasOwnProperty("minPosition"))
                object.minPosition = message.minPosition;
            if (message.maxPosition != null && message.hasOwnProperty("maxPosition"))
                object.maxPosition = message.maxPosition;
            if (message.positionWidthRadians != null && message.hasOwnProperty("positionWidthRadians"))
                object.positionWidthRadians = options.json && !isFinite(message.positionWidthRadians) ? String(message.positionWidthRadians) : message.positionWidthRadians;
            if (message.detentStrengthUnit != null && message.hasOwnProperty("detentStrengthUnit"))
                object.detentStrengthUnit = options.json && !isFinite(message.detentStrengthUnit) ? String(message.detentStrengthUnit) : message.detentStrengthUnit;
            if (message.endstopStrengthUnit != null && message.hasOwnProperty("endstopStrengthUnit"))
                object.endstopStrengthUnit = options.json && !isFinite(message.endstopStrengthUnit) ? String(message.endstopStrengthUnit) : message.endstopStrengthUnit;
            if (message.snapPoint != null && message.hasOwnProperty("snapPoint"))
                object.snapPoint = options.json && !isFinite(message.snapPoint) ? String(message.snapPoint) : message.snapPoint;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.detentPositions && message.detentPositions.length) {
                object.detentPositions = [];
                for (let j = 0; j < message.detentPositions.length; ++j)
                    object.detentPositions[j] = message.detentPositions[j];
            }
            if (message.snapPointBias != null && message.hasOwnProperty("snapPointBias"))
                object.snapPointBias = options.json && !isFinite(message.snapPointBias) ? String(message.snapPointBias) : message.snapPointBias;
            if (message.ledHue != null && message.hasOwnProperty("ledHue"))
                object.ledHue = message.ledHue;
            return object;
        };

        /**
         * Converts this SmartKnobConfig to JSON.
         * @function toJSON
         * @memberof PB.SmartKnobConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SmartKnobConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SmartKnobConfig
         * @function getTypeUrl
         * @memberof PB.SmartKnobConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SmartKnobConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PB.SmartKnobConfig";
        };

        return SmartKnobConfig;
    })();

    PB.RequestState = (function() {

        /**
         * Properties of a RequestState.
         * @memberof PB
         * @interface IRequestState
         */

        /**
         * Constructs a new RequestState.
         * @memberof PB
         * @classdesc Represents a RequestState.
         * @implements IRequestState
         * @constructor
         * @param {PB.IRequestState=} [properties] Properties to set
         */
        function RequestState(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new RequestState instance using the specified properties.
         * @function create
         * @memberof PB.RequestState
         * @static
         * @param {PB.IRequestState=} [properties] Properties to set
         * @returns {PB.RequestState} RequestState instance
         */
        RequestState.create = function create(properties) {
            return new RequestState(properties);
        };

        /**
         * Encodes the specified RequestState message. Does not implicitly {@link PB.RequestState.verify|verify} messages.
         * @function encode
         * @memberof PB.RequestState
         * @static
         * @param {PB.IRequestState} message RequestState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified RequestState message, length delimited. Does not implicitly {@link PB.RequestState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.RequestState
         * @static
         * @param {PB.IRequestState} message RequestState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestState message from the specified reader or buffer.
         * @function decode
         * @memberof PB.RequestState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.RequestState} RequestState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.RequestState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RequestState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.RequestState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.RequestState} RequestState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestState message.
         * @function verify
         * @memberof PB.RequestState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a RequestState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.RequestState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.RequestState} RequestState
         */
        RequestState.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.RequestState)
                return object;
            return new $root.PB.RequestState();
        };

        /**
         * Creates a plain object from a RequestState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.RequestState
         * @static
         * @param {PB.RequestState} message RequestState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestState.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this RequestState to JSON.
         * @function toJSON
         * @memberof PB.RequestState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RequestState
         * @function getTypeUrl
         * @memberof PB.RequestState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RequestState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PB.RequestState";
        };

        return RequestState;
    })();

    PB.PersistentConfiguration = (function() {

        /**
         * Properties of a PersistentConfiguration.
         * @memberof PB
         * @interface IPersistentConfiguration
         * @property {number|null} [version] PersistentConfiguration version
         * @property {PB.IMotorCalibration|null} [motor] PersistentConfiguration motor
         * @property {number|null} [strainScale] PersistentConfiguration strainScale
         */

        /**
         * Constructs a new PersistentConfiguration.
         * @memberof PB
         * @classdesc Represents a PersistentConfiguration.
         * @implements IPersistentConfiguration
         * @constructor
         * @param {PB.IPersistentConfiguration=} [properties] Properties to set
         */
        function PersistentConfiguration(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PersistentConfiguration version.
         * @member {number} version
         * @memberof PB.PersistentConfiguration
         * @instance
         */
        PersistentConfiguration.prototype.version = 0;

        /**
         * PersistentConfiguration motor.
         * @member {PB.IMotorCalibration|null|undefined} motor
         * @memberof PB.PersistentConfiguration
         * @instance
         */
        PersistentConfiguration.prototype.motor = null;

        /**
         * PersistentConfiguration strainScale.
         * @member {number} strainScale
         * @memberof PB.PersistentConfiguration
         * @instance
         */
        PersistentConfiguration.prototype.strainScale = 0;

        /**
         * Creates a new PersistentConfiguration instance using the specified properties.
         * @function create
         * @memberof PB.PersistentConfiguration
         * @static
         * @param {PB.IPersistentConfiguration=} [properties] Properties to set
         * @returns {PB.PersistentConfiguration} PersistentConfiguration instance
         */
        PersistentConfiguration.create = function create(properties) {
            return new PersistentConfiguration(properties);
        };

        /**
         * Encodes the specified PersistentConfiguration message. Does not implicitly {@link PB.PersistentConfiguration.verify|verify} messages.
         * @function encode
         * @memberof PB.PersistentConfiguration
         * @static
         * @param {PB.IPersistentConfiguration} message PersistentConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PersistentConfiguration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
            if (message.motor != null && Object.hasOwnProperty.call(message, "motor"))
                $root.PB.MotorCalibration.encode(message.motor, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.strainScale != null && Object.hasOwnProperty.call(message, "strainScale"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.strainScale);
            return writer;
        };

        /**
         * Encodes the specified PersistentConfiguration message, length delimited. Does not implicitly {@link PB.PersistentConfiguration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.PersistentConfiguration
         * @static
         * @param {PB.IPersistentConfiguration} message PersistentConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PersistentConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PersistentConfiguration message from the specified reader or buffer.
         * @function decode
         * @memberof PB.PersistentConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.PersistentConfiguration} PersistentConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PersistentConfiguration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.PersistentConfiguration();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint32();
                        break;
                    }
                case 2: {
                        message.motor = $root.PB.MotorCalibration.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.strainScale = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PersistentConfiguration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.PersistentConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.PersistentConfiguration} PersistentConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PersistentConfiguration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PersistentConfiguration message.
         * @function verify
         * @memberof PB.PersistentConfiguration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PersistentConfiguration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.motor != null && message.hasOwnProperty("motor")) {
                let error = $root.PB.MotorCalibration.verify(message.motor);
                if (error)
                    return "motor." + error;
            }
            if (message.strainScale != null && message.hasOwnProperty("strainScale"))
                if (typeof message.strainScale !== "number")
                    return "strainScale: number expected";
            return null;
        };

        /**
         * Creates a PersistentConfiguration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.PersistentConfiguration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.PersistentConfiguration} PersistentConfiguration
         */
        PersistentConfiguration.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.PersistentConfiguration)
                return object;
            let message = new $root.PB.PersistentConfiguration();
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.motor != null) {
                if (typeof object.motor !== "object")
                    throw TypeError(".PB.PersistentConfiguration.motor: object expected");
                message.motor = $root.PB.MotorCalibration.fromObject(object.motor);
            }
            if (object.strainScale != null)
                message.strainScale = Number(object.strainScale);
            return message;
        };

        /**
         * Creates a plain object from a PersistentConfiguration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.PersistentConfiguration
         * @static
         * @param {PB.PersistentConfiguration} message PersistentConfiguration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PersistentConfiguration.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.version = 0;
                object.motor = null;
                object.strainScale = 0;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.motor != null && message.hasOwnProperty("motor"))
                object.motor = $root.PB.MotorCalibration.toObject(message.motor, options);
            if (message.strainScale != null && message.hasOwnProperty("strainScale"))
                object.strainScale = options.json && !isFinite(message.strainScale) ? String(message.strainScale) : message.strainScale;
            return object;
        };

        /**
         * Converts this PersistentConfiguration to JSON.
         * @function toJSON
         * @memberof PB.PersistentConfiguration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PersistentConfiguration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PersistentConfiguration
         * @function getTypeUrl
         * @memberof PB.PersistentConfiguration
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PersistentConfiguration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PB.PersistentConfiguration";
        };

        return PersistentConfiguration;
    })();

    PB.MotorCalibration = (function() {

        /**
         * Properties of a MotorCalibration.
         * @memberof PB
         * @interface IMotorCalibration
         * @property {boolean|null} [calibrated] MotorCalibration calibrated
         * @property {number|null} [zeroElectricalOffset] MotorCalibration zeroElectricalOffset
         * @property {boolean|null} [directionCw] MotorCalibration directionCw
         * @property {number|null} [polePairs] MotorCalibration polePairs
         */

        /**
         * Constructs a new MotorCalibration.
         * @memberof PB
         * @classdesc Represents a MotorCalibration.
         * @implements IMotorCalibration
         * @constructor
         * @param {PB.IMotorCalibration=} [properties] Properties to set
         */
        function MotorCalibration(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MotorCalibration calibrated.
         * @member {boolean} calibrated
         * @memberof PB.MotorCalibration
         * @instance
         */
        MotorCalibration.prototype.calibrated = false;

        /**
         * MotorCalibration zeroElectricalOffset.
         * @member {number} zeroElectricalOffset
         * @memberof PB.MotorCalibration
         * @instance
         */
        MotorCalibration.prototype.zeroElectricalOffset = 0;

        /**
         * MotorCalibration directionCw.
         * @member {boolean} directionCw
         * @memberof PB.MotorCalibration
         * @instance
         */
        MotorCalibration.prototype.directionCw = false;

        /**
         * MotorCalibration polePairs.
         * @member {number} polePairs
         * @memberof PB.MotorCalibration
         * @instance
         */
        MotorCalibration.prototype.polePairs = 0;

        /**
         * Creates a new MotorCalibration instance using the specified properties.
         * @function create
         * @memberof PB.MotorCalibration
         * @static
         * @param {PB.IMotorCalibration=} [properties] Properties to set
         * @returns {PB.MotorCalibration} MotorCalibration instance
         */
        MotorCalibration.create = function create(properties) {
            return new MotorCalibration(properties);
        };

        /**
         * Encodes the specified MotorCalibration message. Does not implicitly {@link PB.MotorCalibration.verify|verify} messages.
         * @function encode
         * @memberof PB.MotorCalibration
         * @static
         * @param {PB.IMotorCalibration} message MotorCalibration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MotorCalibration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.calibrated != null && Object.hasOwnProperty.call(message, "calibrated"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.calibrated);
            if (message.zeroElectricalOffset != null && Object.hasOwnProperty.call(message, "zeroElectricalOffset"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.zeroElectricalOffset);
            if (message.directionCw != null && Object.hasOwnProperty.call(message, "directionCw"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.directionCw);
            if (message.polePairs != null && Object.hasOwnProperty.call(message, "polePairs"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.polePairs);
            return writer;
        };

        /**
         * Encodes the specified MotorCalibration message, length delimited. Does not implicitly {@link PB.MotorCalibration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MotorCalibration
         * @static
         * @param {PB.IMotorCalibration} message MotorCalibration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MotorCalibration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MotorCalibration message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MotorCalibration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MotorCalibration} MotorCalibration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MotorCalibration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MotorCalibration();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.calibrated = reader.bool();
                        break;
                    }
                case 2: {
                        message.zeroElectricalOffset = reader.float();
                        break;
                    }
                case 3: {
                        message.directionCw = reader.bool();
                        break;
                    }
                case 4: {
                        message.polePairs = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MotorCalibration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MotorCalibration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MotorCalibration} MotorCalibration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MotorCalibration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MotorCalibration message.
         * @function verify
         * @memberof PB.MotorCalibration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MotorCalibration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.calibrated != null && message.hasOwnProperty("calibrated"))
                if (typeof message.calibrated !== "boolean")
                    return "calibrated: boolean expected";
            if (message.zeroElectricalOffset != null && message.hasOwnProperty("zeroElectricalOffset"))
                if (typeof message.zeroElectricalOffset !== "number")
                    return "zeroElectricalOffset: number expected";
            if (message.directionCw != null && message.hasOwnProperty("directionCw"))
                if (typeof message.directionCw !== "boolean")
                    return "directionCw: boolean expected";
            if (message.polePairs != null && message.hasOwnProperty("polePairs"))
                if (!$util.isInteger(message.polePairs))
                    return "polePairs: integer expected";
            return null;
        };

        /**
         * Creates a MotorCalibration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MotorCalibration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MotorCalibration} MotorCalibration
         */
        MotorCalibration.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MotorCalibration)
                return object;
            let message = new $root.PB.MotorCalibration();
            if (object.calibrated != null)
                message.calibrated = Boolean(object.calibrated);
            if (object.zeroElectricalOffset != null)
                message.zeroElectricalOffset = Number(object.zeroElectricalOffset);
            if (object.directionCw != null)
                message.directionCw = Boolean(object.directionCw);
            if (object.polePairs != null)
                message.polePairs = object.polePairs >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a MotorCalibration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MotorCalibration
         * @static
         * @param {PB.MotorCalibration} message MotorCalibration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MotorCalibration.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.calibrated = false;
                object.zeroElectricalOffset = 0;
                object.directionCw = false;
                object.polePairs = 0;
            }
            if (message.calibrated != null && message.hasOwnProperty("calibrated"))
                object.calibrated = message.calibrated;
            if (message.zeroElectricalOffset != null && message.hasOwnProperty("zeroElectricalOffset"))
                object.zeroElectricalOffset = options.json && !isFinite(message.zeroElectricalOffset) ? String(message.zeroElectricalOffset) : message.zeroElectricalOffset;
            if (message.directionCw != null && message.hasOwnProperty("directionCw"))
                object.directionCw = message.directionCw;
            if (message.polePairs != null && message.hasOwnProperty("polePairs"))
                object.polePairs = message.polePairs;
            return object;
        };

        /**
         * Converts this MotorCalibration to JSON.
         * @function toJSON
         * @memberof PB.MotorCalibration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MotorCalibration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MotorCalibration
         * @function getTypeUrl
         * @memberof PB.MotorCalibration
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MotorCalibration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PB.MotorCalibration";
        };

        return MotorCalibration;
    })();

    PB.StrainState = (function() {

        /**
         * Properties of a StrainState.
         * @memberof PB
         * @interface IStrainState
         * @property {number|null} [pressWeight] StrainState pressWeight
         * @property {number|null} [pressValue] StrainState pressValue
         */

        /**
         * Constructs a new StrainState.
         * @memberof PB
         * @classdesc Represents a StrainState.
         * @implements IStrainState
         * @constructor
         * @param {PB.IStrainState=} [properties] Properties to set
         */
        function StrainState(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StrainState pressWeight.
         * @member {number} pressWeight
         * @memberof PB.StrainState
         * @instance
         */
        StrainState.prototype.pressWeight = 0;

        /**
         * StrainState pressValue.
         * @member {number} pressValue
         * @memberof PB.StrainState
         * @instance
         */
        StrainState.prototype.pressValue = 0;

        /**
         * Creates a new StrainState instance using the specified properties.
         * @function create
         * @memberof PB.StrainState
         * @static
         * @param {PB.IStrainState=} [properties] Properties to set
         * @returns {PB.StrainState} StrainState instance
         */
        StrainState.create = function create(properties) {
            return new StrainState(properties);
        };

        /**
         * Encodes the specified StrainState message. Does not implicitly {@link PB.StrainState.verify|verify} messages.
         * @function encode
         * @memberof PB.StrainState
         * @static
         * @param {PB.IStrainState} message StrainState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrainState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pressWeight != null && Object.hasOwnProperty.call(message, "pressWeight"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pressWeight);
            if (message.pressValue != null && Object.hasOwnProperty.call(message, "pressValue"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.pressValue);
            return writer;
        };

        /**
         * Encodes the specified StrainState message, length delimited. Does not implicitly {@link PB.StrainState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.StrainState
         * @static
         * @param {PB.IStrainState} message StrainState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrainState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StrainState message from the specified reader or buffer.
         * @function decode
         * @memberof PB.StrainState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.StrainState} StrainState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrainState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.StrainState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.pressWeight = reader.int32();
                        break;
                    }
                case 2: {
                        message.pressValue = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StrainState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.StrainState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.StrainState} StrainState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrainState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StrainState message.
         * @function verify
         * @memberof PB.StrainState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StrainState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pressWeight != null && message.hasOwnProperty("pressWeight"))
                if (!$util.isInteger(message.pressWeight))
                    return "pressWeight: integer expected";
            if (message.pressValue != null && message.hasOwnProperty("pressValue"))
                if (typeof message.pressValue !== "number")
                    return "pressValue: number expected";
            return null;
        };

        /**
         * Creates a StrainState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.StrainState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.StrainState} StrainState
         */
        StrainState.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.StrainState)
                return object;
            let message = new $root.PB.StrainState();
            if (object.pressWeight != null)
                message.pressWeight = object.pressWeight | 0;
            if (object.pressValue != null)
                message.pressValue = Number(object.pressValue);
            return message;
        };

        /**
         * Creates a plain object from a StrainState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.StrainState
         * @static
         * @param {PB.StrainState} message StrainState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StrainState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.pressWeight = 0;
                object.pressValue = 0;
            }
            if (message.pressWeight != null && message.hasOwnProperty("pressWeight"))
                object.pressWeight = message.pressWeight;
            if (message.pressValue != null && message.hasOwnProperty("pressValue"))
                object.pressValue = options.json && !isFinite(message.pressValue) ? String(message.pressValue) : message.pressValue;
            return object;
        };

        /**
         * Converts this StrainState to JSON.
         * @function toJSON
         * @memberof PB.StrainState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StrainState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StrainState
         * @function getTypeUrl
         * @memberof PB.StrainState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StrainState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PB.StrainState";
        };

        return StrainState;
    })();

    /**
     * SmartKnobCommand enum.
     * @name PB.SmartKnobCommand
     * @enum {number}
     * @property {number} GET_KNOB_INFO=0 GET_KNOB_INFO value
     * @property {number} MOTOR_CALIBRATE=1 MOTOR_CALIBRATE value
     * @property {number} STRAIN_CALIBRATE=2 STRAIN_CALIBRATE value
     */
    PB.SmartKnobCommand = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GET_KNOB_INFO"] = 0;
        values[valuesById[1] = "MOTOR_CALIBRATE"] = 1;
        values[valuesById[2] = "STRAIN_CALIBRATE"] = 2;
        return values;
    })();

    PB.StrainCalibration = (function() {

        /**
         * Properties of a StrainCalibration.
         * @memberof PB
         * @interface IStrainCalibration
         * @property {number|null} [calibrationWeight] StrainCalibration calibrationWeight
         */

        /**
         * Constructs a new StrainCalibration.
         * @memberof PB
         * @classdesc Represents a StrainCalibration.
         * @implements IStrainCalibration
         * @constructor
         * @param {PB.IStrainCalibration=} [properties] Properties to set
         */
        function StrainCalibration(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StrainCalibration calibrationWeight.
         * @member {number} calibrationWeight
         * @memberof PB.StrainCalibration
         * @instance
         */
        StrainCalibration.prototype.calibrationWeight = 0;

        /**
         * Creates a new StrainCalibration instance using the specified properties.
         * @function create
         * @memberof PB.StrainCalibration
         * @static
         * @param {PB.IStrainCalibration=} [properties] Properties to set
         * @returns {PB.StrainCalibration} StrainCalibration instance
         */
        StrainCalibration.create = function create(properties) {
            return new StrainCalibration(properties);
        };

        /**
         * Encodes the specified StrainCalibration message. Does not implicitly {@link PB.StrainCalibration.verify|verify} messages.
         * @function encode
         * @memberof PB.StrainCalibration
         * @static
         * @param {PB.IStrainCalibration} message StrainCalibration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrainCalibration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.calibrationWeight != null && Object.hasOwnProperty.call(message, "calibrationWeight"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.calibrationWeight);
            return writer;
        };

        /**
         * Encodes the specified StrainCalibration message, length delimited. Does not implicitly {@link PB.StrainCalibration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.StrainCalibration
         * @static
         * @param {PB.IStrainCalibration} message StrainCalibration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrainCalibration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StrainCalibration message from the specified reader or buffer.
         * @function decode
         * @memberof PB.StrainCalibration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.StrainCalibration} StrainCalibration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrainCalibration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.StrainCalibration();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.calibrationWeight = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StrainCalibration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.StrainCalibration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.StrainCalibration} StrainCalibration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrainCalibration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StrainCalibration message.
         * @function verify
         * @memberof PB.StrainCalibration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StrainCalibration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.calibrationWeight != null && message.hasOwnProperty("calibrationWeight"))
                if (typeof message.calibrationWeight !== "number")
                    return "calibrationWeight: number expected";
            return null;
        };

        /**
         * Creates a StrainCalibration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.StrainCalibration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.StrainCalibration} StrainCalibration
         */
        StrainCalibration.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.StrainCalibration)
                return object;
            let message = new $root.PB.StrainCalibration();
            if (object.calibrationWeight != null)
                message.calibrationWeight = Number(object.calibrationWeight);
            return message;
        };

        /**
         * Creates a plain object from a StrainCalibration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.StrainCalibration
         * @static
         * @param {PB.StrainCalibration} message StrainCalibration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StrainCalibration.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.calibrationWeight = 0;
            if (message.calibrationWeight != null && message.hasOwnProperty("calibrationWeight"))
                object.calibrationWeight = options.json && !isFinite(message.calibrationWeight) ? String(message.calibrationWeight) : message.calibrationWeight;
            return object;
        };

        /**
         * Converts this StrainCalibration to JSON.
         * @function toJSON
         * @memberof PB.StrainCalibration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StrainCalibration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StrainCalibration
         * @function getTypeUrl
         * @memberof PB.StrainCalibration
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StrainCalibration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PB.StrainCalibration";
        };

        return StrainCalibration;
    })();

    return PB;
})();

export const SETTINGS = $root.SETTINGS = (() => {

    /**
     * Namespace SETTINGS.
     * @exports SETTINGS
     * @namespace
     */
    const SETTINGS = {};

    SETTINGS.Settings = (function() {

        /**
         * Properties of a Settings.
         * @memberof SETTINGS
         * @interface ISettings
         * @property {number|null} [protocolVersion] Settings protocolVersion
         * @property {SETTINGS.IScreen|null} [screen] Settings screen
         * @property {SETTINGS.ILedRing|null} [ledRing] Settings ledRing
         */

        /**
         * Constructs a new Settings.
         * @memberof SETTINGS
         * @classdesc Represents a Settings.
         * @implements ISettings
         * @constructor
         * @param {SETTINGS.ISettings=} [properties] Properties to set
         */
        function Settings(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Settings protocolVersion.
         * @member {number} protocolVersion
         * @memberof SETTINGS.Settings
         * @instance
         */
        Settings.prototype.protocolVersion = 0;

        /**
         * Settings screen.
         * @member {SETTINGS.IScreen|null|undefined} screen
         * @memberof SETTINGS.Settings
         * @instance
         */
        Settings.prototype.screen = null;

        /**
         * Settings ledRing.
         * @member {SETTINGS.ILedRing|null|undefined} ledRing
         * @memberof SETTINGS.Settings
         * @instance
         */
        Settings.prototype.ledRing = null;

        /**
         * Creates a new Settings instance using the specified properties.
         * @function create
         * @memberof SETTINGS.Settings
         * @static
         * @param {SETTINGS.ISettings=} [properties] Properties to set
         * @returns {SETTINGS.Settings} Settings instance
         */
        Settings.create = function create(properties) {
            return new Settings(properties);
        };

        /**
         * Encodes the specified Settings message. Does not implicitly {@link SETTINGS.Settings.verify|verify} messages.
         * @function encode
         * @memberof SETTINGS.Settings
         * @static
         * @param {SETTINGS.ISettings} message Settings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Settings.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.protocolVersion != null && Object.hasOwnProperty.call(message, "protocolVersion"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.protocolVersion);
            if (message.screen != null && Object.hasOwnProperty.call(message, "screen"))
                $root.SETTINGS.Screen.encode(message.screen, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.ledRing != null && Object.hasOwnProperty.call(message, "ledRing"))
                $root.SETTINGS.LedRing.encode(message.ledRing, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Settings message, length delimited. Does not implicitly {@link SETTINGS.Settings.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SETTINGS.Settings
         * @static
         * @param {SETTINGS.ISettings} message Settings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Settings.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Settings message from the specified reader or buffer.
         * @function decode
         * @memberof SETTINGS.Settings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SETTINGS.Settings} Settings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Settings.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SETTINGS.Settings();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.protocolVersion = reader.uint32();
                        break;
                    }
                case 2: {
                        message.screen = $root.SETTINGS.Screen.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.ledRing = $root.SETTINGS.LedRing.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Settings message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SETTINGS.Settings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SETTINGS.Settings} Settings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Settings.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Settings message.
         * @function verify
         * @memberof SETTINGS.Settings
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Settings.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
                if (!$util.isInteger(message.protocolVersion))
                    return "protocolVersion: integer expected";
            if (message.screen != null && message.hasOwnProperty("screen")) {
                let error = $root.SETTINGS.Screen.verify(message.screen);
                if (error)
                    return "screen." + error;
            }
            if (message.ledRing != null && message.hasOwnProperty("ledRing")) {
                let error = $root.SETTINGS.LedRing.verify(message.ledRing);
                if (error)
                    return "ledRing." + error;
            }
            return null;
        };

        /**
         * Creates a Settings message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SETTINGS.Settings
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SETTINGS.Settings} Settings
         */
        Settings.fromObject = function fromObject(object) {
            if (object instanceof $root.SETTINGS.Settings)
                return object;
            let message = new $root.SETTINGS.Settings();
            if (object.protocolVersion != null)
                message.protocolVersion = object.protocolVersion >>> 0;
            if (object.screen != null) {
                if (typeof object.screen !== "object")
                    throw TypeError(".SETTINGS.Settings.screen: object expected");
                message.screen = $root.SETTINGS.Screen.fromObject(object.screen);
            }
            if (object.ledRing != null) {
                if (typeof object.ledRing !== "object")
                    throw TypeError(".SETTINGS.Settings.ledRing: object expected");
                message.ledRing = $root.SETTINGS.LedRing.fromObject(object.ledRing);
            }
            return message;
        };

        /**
         * Creates a plain object from a Settings message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SETTINGS.Settings
         * @static
         * @param {SETTINGS.Settings} message Settings
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Settings.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.protocolVersion = 0;
                object.screen = null;
                object.ledRing = null;
            }
            if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
                object.protocolVersion = message.protocolVersion;
            if (message.screen != null && message.hasOwnProperty("screen"))
                object.screen = $root.SETTINGS.Screen.toObject(message.screen, options);
            if (message.ledRing != null && message.hasOwnProperty("ledRing"))
                object.ledRing = $root.SETTINGS.LedRing.toObject(message.ledRing, options);
            return object;
        };

        /**
         * Converts this Settings to JSON.
         * @function toJSON
         * @memberof SETTINGS.Settings
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Settings.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Settings
         * @function getTypeUrl
         * @memberof SETTINGS.Settings
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Settings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/SETTINGS.Settings";
        };

        return Settings;
    })();

    SETTINGS.Screen = (function() {

        /**
         * Properties of a Screen.
         * @memberof SETTINGS
         * @interface IScreen
         * @property {boolean|null} [dim] Screen dim
         * @property {number|null} [maxBright] Screen maxBright
         * @property {number|null} [minBright] Screen minBright
         * @property {number|null} [timeout] Screen timeout
         */

        /**
         * Constructs a new Screen.
         * @memberof SETTINGS
         * @classdesc Represents a Screen.
         * @implements IScreen
         * @constructor
         * @param {SETTINGS.IScreen=} [properties] Properties to set
         */
        function Screen(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Screen dim.
         * @member {boolean} dim
         * @memberof SETTINGS.Screen
         * @instance
         */
        Screen.prototype.dim = false;

        /**
         * Screen maxBright.
         * @member {number} maxBright
         * @memberof SETTINGS.Screen
         * @instance
         */
        Screen.prototype.maxBright = 0;

        /**
         * Screen minBright.
         * @member {number} minBright
         * @memberof SETTINGS.Screen
         * @instance
         */
        Screen.prototype.minBright = 0;

        /**
         * Screen timeout.
         * @member {number} timeout
         * @memberof SETTINGS.Screen
         * @instance
         */
        Screen.prototype.timeout = 0;

        /**
         * Creates a new Screen instance using the specified properties.
         * @function create
         * @memberof SETTINGS.Screen
         * @static
         * @param {SETTINGS.IScreen=} [properties] Properties to set
         * @returns {SETTINGS.Screen} Screen instance
         */
        Screen.create = function create(properties) {
            return new Screen(properties);
        };

        /**
         * Encodes the specified Screen message. Does not implicitly {@link SETTINGS.Screen.verify|verify} messages.
         * @function encode
         * @memberof SETTINGS.Screen
         * @static
         * @param {SETTINGS.IScreen} message Screen message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Screen.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dim != null && Object.hasOwnProperty.call(message, "dim"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.dim);
            if (message.maxBright != null && Object.hasOwnProperty.call(message, "maxBright"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.maxBright);
            if (message.minBright != null && Object.hasOwnProperty.call(message, "minBright"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.minBright);
            if (message.timeout != null && Object.hasOwnProperty.call(message, "timeout"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.timeout);
            return writer;
        };

        /**
         * Encodes the specified Screen message, length delimited. Does not implicitly {@link SETTINGS.Screen.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SETTINGS.Screen
         * @static
         * @param {SETTINGS.IScreen} message Screen message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Screen.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Screen message from the specified reader or buffer.
         * @function decode
         * @memberof SETTINGS.Screen
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SETTINGS.Screen} Screen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Screen.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SETTINGS.Screen();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.dim = reader.bool();
                        break;
                    }
                case 2: {
                        message.maxBright = reader.int32();
                        break;
                    }
                case 3: {
                        message.minBright = reader.int32();
                        break;
                    }
                case 4: {
                        message.timeout = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Screen message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SETTINGS.Screen
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SETTINGS.Screen} Screen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Screen.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Screen message.
         * @function verify
         * @memberof SETTINGS.Screen
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Screen.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dim != null && message.hasOwnProperty("dim"))
                if (typeof message.dim !== "boolean")
                    return "dim: boolean expected";
            if (message.maxBright != null && message.hasOwnProperty("maxBright"))
                if (!$util.isInteger(message.maxBright))
                    return "maxBright: integer expected";
            if (message.minBright != null && message.hasOwnProperty("minBright"))
                if (!$util.isInteger(message.minBright))
                    return "minBright: integer expected";
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                if (!$util.isInteger(message.timeout))
                    return "timeout: integer expected";
            return null;
        };

        /**
         * Creates a Screen message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SETTINGS.Screen
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SETTINGS.Screen} Screen
         */
        Screen.fromObject = function fromObject(object) {
            if (object instanceof $root.SETTINGS.Screen)
                return object;
            let message = new $root.SETTINGS.Screen();
            if (object.dim != null)
                message.dim = Boolean(object.dim);
            if (object.maxBright != null)
                message.maxBright = object.maxBright | 0;
            if (object.minBright != null)
                message.minBright = object.minBright | 0;
            if (object.timeout != null)
                message.timeout = object.timeout | 0;
            return message;
        };

        /**
         * Creates a plain object from a Screen message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SETTINGS.Screen
         * @static
         * @param {SETTINGS.Screen} message Screen
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Screen.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.dim = false;
                object.maxBright = 0;
                object.minBright = 0;
                object.timeout = 0;
            }
            if (message.dim != null && message.hasOwnProperty("dim"))
                object.dim = message.dim;
            if (message.maxBright != null && message.hasOwnProperty("maxBright"))
                object.maxBright = message.maxBright;
            if (message.minBright != null && message.hasOwnProperty("minBright"))
                object.minBright = message.minBright;
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                object.timeout = message.timeout;
            return object;
        };

        /**
         * Converts this Screen to JSON.
         * @function toJSON
         * @memberof SETTINGS.Screen
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Screen.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Screen
         * @function getTypeUrl
         * @memberof SETTINGS.Screen
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Screen.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/SETTINGS.Screen";
        };

        return Screen;
    })();

    SETTINGS.Beacon = (function() {

        /**
         * Properties of a Beacon.
         * @memberof SETTINGS
         * @interface IBeacon
         * @property {boolean|null} [enabled] Beacon enabled
         * @property {number|null} [brightness] Beacon brightness
         * @property {number|null} [color] Beacon color
         */

        /**
         * Constructs a new Beacon.
         * @memberof SETTINGS
         * @classdesc Represents a Beacon.
         * @implements IBeacon
         * @constructor
         * @param {SETTINGS.IBeacon=} [properties] Properties to set
         */
        function Beacon(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Beacon enabled.
         * @member {boolean} enabled
         * @memberof SETTINGS.Beacon
         * @instance
         */
        Beacon.prototype.enabled = false;

        /**
         * Beacon brightness.
         * @member {number} brightness
         * @memberof SETTINGS.Beacon
         * @instance
         */
        Beacon.prototype.brightness = 0;

        /**
         * Beacon color.
         * @member {number} color
         * @memberof SETTINGS.Beacon
         * @instance
         */
        Beacon.prototype.color = 0;

        /**
         * Creates a new Beacon instance using the specified properties.
         * @function create
         * @memberof SETTINGS.Beacon
         * @static
         * @param {SETTINGS.IBeacon=} [properties] Properties to set
         * @returns {SETTINGS.Beacon} Beacon instance
         */
        Beacon.create = function create(properties) {
            return new Beacon(properties);
        };

        /**
         * Encodes the specified Beacon message. Does not implicitly {@link SETTINGS.Beacon.verify|verify} messages.
         * @function encode
         * @memberof SETTINGS.Beacon
         * @static
         * @param {SETTINGS.IBeacon} message Beacon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Beacon.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.enabled);
            if (message.brightness != null && Object.hasOwnProperty.call(message, "brightness"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.brightness);
            if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.color);
            return writer;
        };

        /**
         * Encodes the specified Beacon message, length delimited. Does not implicitly {@link SETTINGS.Beacon.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SETTINGS.Beacon
         * @static
         * @param {SETTINGS.IBeacon} message Beacon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Beacon.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Beacon message from the specified reader or buffer.
         * @function decode
         * @memberof SETTINGS.Beacon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SETTINGS.Beacon} Beacon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Beacon.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SETTINGS.Beacon();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.enabled = reader.bool();
                        break;
                    }
                case 2: {
                        message.brightness = reader.int32();
                        break;
                    }
                case 3: {
                        message.color = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Beacon message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SETTINGS.Beacon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SETTINGS.Beacon} Beacon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Beacon.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Beacon message.
         * @function verify
         * @memberof SETTINGS.Beacon
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Beacon.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                if (typeof message.enabled !== "boolean")
                    return "enabled: boolean expected";
            if (message.brightness != null && message.hasOwnProperty("brightness"))
                if (!$util.isInteger(message.brightness))
                    return "brightness: integer expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isInteger(message.color))
                    return "color: integer expected";
            return null;
        };

        /**
         * Creates a Beacon message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SETTINGS.Beacon
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SETTINGS.Beacon} Beacon
         */
        Beacon.fromObject = function fromObject(object) {
            if (object instanceof $root.SETTINGS.Beacon)
                return object;
            let message = new $root.SETTINGS.Beacon();
            if (object.enabled != null)
                message.enabled = Boolean(object.enabled);
            if (object.brightness != null)
                message.brightness = object.brightness | 0;
            if (object.color != null)
                message.color = object.color | 0;
            return message;
        };

        /**
         * Creates a plain object from a Beacon message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SETTINGS.Beacon
         * @static
         * @param {SETTINGS.Beacon} message Beacon
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Beacon.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.enabled = false;
                object.brightness = 0;
                object.color = 0;
            }
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                object.enabled = message.enabled;
            if (message.brightness != null && message.hasOwnProperty("brightness"))
                object.brightness = message.brightness;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            return object;
        };

        /**
         * Converts this Beacon to JSON.
         * @function toJSON
         * @memberof SETTINGS.Beacon
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Beacon.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Beacon
         * @function getTypeUrl
         * @memberof SETTINGS.Beacon
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Beacon.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/SETTINGS.Beacon";
        };

        return Beacon;
    })();

    SETTINGS.LedRing = (function() {

        /**
         * Properties of a LedRing.
         * @memberof SETTINGS
         * @interface ILedRing
         * @property {boolean|null} [enabled] LedRing enabled
         * @property {boolean|null} [dim] LedRing dim
         * @property {number|null} [maxBright] LedRing maxBright
         * @property {number|null} [minBright] LedRing minBright
         * @property {number|null} [timeout] LedRing timeout
         * @property {number|null} [color] LedRing color
         * @property {SETTINGS.IBeacon|null} [beacon] LedRing beacon
         */

        /**
         * Constructs a new LedRing.
         * @memberof SETTINGS
         * @classdesc Represents a LedRing.
         * @implements ILedRing
         * @constructor
         * @param {SETTINGS.ILedRing=} [properties] Properties to set
         */
        function LedRing(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LedRing enabled.
         * @member {boolean} enabled
         * @memberof SETTINGS.LedRing
         * @instance
         */
        LedRing.prototype.enabled = false;

        /**
         * LedRing dim.
         * @member {boolean} dim
         * @memberof SETTINGS.LedRing
         * @instance
         */
        LedRing.prototype.dim = false;

        /**
         * LedRing maxBright.
         * @member {number} maxBright
         * @memberof SETTINGS.LedRing
         * @instance
         */
        LedRing.prototype.maxBright = 0;

        /**
         * LedRing minBright.
         * @member {number} minBright
         * @memberof SETTINGS.LedRing
         * @instance
         */
        LedRing.prototype.minBright = 0;

        /**
         * LedRing timeout.
         * @member {number} timeout
         * @memberof SETTINGS.LedRing
         * @instance
         */
        LedRing.prototype.timeout = 0;

        /**
         * LedRing color.
         * @member {number} color
         * @memberof SETTINGS.LedRing
         * @instance
         */
        LedRing.prototype.color = 0;

        /**
         * LedRing beacon.
         * @member {SETTINGS.IBeacon|null|undefined} beacon
         * @memberof SETTINGS.LedRing
         * @instance
         */
        LedRing.prototype.beacon = null;

        /**
         * Creates a new LedRing instance using the specified properties.
         * @function create
         * @memberof SETTINGS.LedRing
         * @static
         * @param {SETTINGS.ILedRing=} [properties] Properties to set
         * @returns {SETTINGS.LedRing} LedRing instance
         */
        LedRing.create = function create(properties) {
            return new LedRing(properties);
        };

        /**
         * Encodes the specified LedRing message. Does not implicitly {@link SETTINGS.LedRing.verify|verify} messages.
         * @function encode
         * @memberof SETTINGS.LedRing
         * @static
         * @param {SETTINGS.ILedRing} message LedRing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LedRing.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.enabled);
            if (message.dim != null && Object.hasOwnProperty.call(message, "dim"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.dim);
            if (message.maxBright != null && Object.hasOwnProperty.call(message, "maxBright"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maxBright);
            if (message.minBright != null && Object.hasOwnProperty.call(message, "minBright"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.minBright);
            if (message.timeout != null && Object.hasOwnProperty.call(message, "timeout"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.timeout);
            if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.color);
            if (message.beacon != null && Object.hasOwnProperty.call(message, "beacon"))
                $root.SETTINGS.Beacon.encode(message.beacon, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LedRing message, length delimited. Does not implicitly {@link SETTINGS.LedRing.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SETTINGS.LedRing
         * @static
         * @param {SETTINGS.ILedRing} message LedRing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LedRing.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LedRing message from the specified reader or buffer.
         * @function decode
         * @memberof SETTINGS.LedRing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SETTINGS.LedRing} LedRing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LedRing.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SETTINGS.LedRing();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.enabled = reader.bool();
                        break;
                    }
                case 2: {
                        message.dim = reader.bool();
                        break;
                    }
                case 3: {
                        message.maxBright = reader.int32();
                        break;
                    }
                case 4: {
                        message.minBright = reader.int32();
                        break;
                    }
                case 5: {
                        message.timeout = reader.int32();
                        break;
                    }
                case 6: {
                        message.color = reader.int32();
                        break;
                    }
                case 7: {
                        message.beacon = $root.SETTINGS.Beacon.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LedRing message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SETTINGS.LedRing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SETTINGS.LedRing} LedRing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LedRing.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LedRing message.
         * @function verify
         * @memberof SETTINGS.LedRing
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LedRing.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                if (typeof message.enabled !== "boolean")
                    return "enabled: boolean expected";
            if (message.dim != null && message.hasOwnProperty("dim"))
                if (typeof message.dim !== "boolean")
                    return "dim: boolean expected";
            if (message.maxBright != null && message.hasOwnProperty("maxBright"))
                if (!$util.isInteger(message.maxBright))
                    return "maxBright: integer expected";
            if (message.minBright != null && message.hasOwnProperty("minBright"))
                if (!$util.isInteger(message.minBright))
                    return "minBright: integer expected";
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                if (!$util.isInteger(message.timeout))
                    return "timeout: integer expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isInteger(message.color))
                    return "color: integer expected";
            if (message.beacon != null && message.hasOwnProperty("beacon")) {
                let error = $root.SETTINGS.Beacon.verify(message.beacon);
                if (error)
                    return "beacon." + error;
            }
            return null;
        };

        /**
         * Creates a LedRing message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SETTINGS.LedRing
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SETTINGS.LedRing} LedRing
         */
        LedRing.fromObject = function fromObject(object) {
            if (object instanceof $root.SETTINGS.LedRing)
                return object;
            let message = new $root.SETTINGS.LedRing();
            if (object.enabled != null)
                message.enabled = Boolean(object.enabled);
            if (object.dim != null)
                message.dim = Boolean(object.dim);
            if (object.maxBright != null)
                message.maxBright = object.maxBright | 0;
            if (object.minBright != null)
                message.minBright = object.minBright | 0;
            if (object.timeout != null)
                message.timeout = object.timeout | 0;
            if (object.color != null)
                message.color = object.color | 0;
            if (object.beacon != null) {
                if (typeof object.beacon !== "object")
                    throw TypeError(".SETTINGS.LedRing.beacon: object expected");
                message.beacon = $root.SETTINGS.Beacon.fromObject(object.beacon);
            }
            return message;
        };

        /**
         * Creates a plain object from a LedRing message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SETTINGS.LedRing
         * @static
         * @param {SETTINGS.LedRing} message LedRing
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LedRing.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.enabled = false;
                object.dim = false;
                object.maxBright = 0;
                object.minBright = 0;
                object.timeout = 0;
                object.color = 0;
                object.beacon = null;
            }
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                object.enabled = message.enabled;
            if (message.dim != null && message.hasOwnProperty("dim"))
                object.dim = message.dim;
            if (message.maxBright != null && message.hasOwnProperty("maxBright"))
                object.maxBright = message.maxBright;
            if (message.minBright != null && message.hasOwnProperty("minBright"))
                object.minBright = message.minBright;
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                object.timeout = message.timeout;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            if (message.beacon != null && message.hasOwnProperty("beacon"))
                object.beacon = $root.SETTINGS.Beacon.toObject(message.beacon, options);
            return object;
        };

        /**
         * Converts this LedRing to JSON.
         * @function toJSON
         * @memberof SETTINGS.LedRing
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LedRing.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LedRing
         * @function getTypeUrl
         * @memberof SETTINGS.LedRing
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LedRing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/SETTINGS.LedRing";
        };

        return LedRing;
    })();

    return SETTINGS;
})();

export { $root as default };

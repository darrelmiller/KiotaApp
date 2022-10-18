import {Error_code} from './error_code';
import {Error_subCode} from './error_subCode';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Defines the error that occurred. */
export class Error_escaped implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The error code that identifies the category of error. */
    private _code?: Error_code | undefined;
    /** A description of the error. */
    private _message?: string | undefined;
    /** A description that provides additional information about the error. */
    private _moreDetails?: string | undefined;
    /** The parameter in the request that caused the error. */
    private _parameter?: string | undefined;
    /** The error code that further helps to identify the error. */
    private _subCode?: Error_subCode | undefined;
    /** The parameter's value in the request that was not valid. */
    private _value?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the code property value. The error code that identifies the category of error.
     * @returns a Error_code
     */
    public get code() {
        return this._code;
    };
    /**
     * Sets the code property value. The error code that identifies the category of error.
     * @param value Value to set for the code property.
     */
    public set code(value: Error_code | undefined) {
        this._code = value;
    };
    /**
     * Instantiates a new Error_escaped and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.code = Error_code.None;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "code": n => { this.code = n.getEnumValue<Error_code>(Error_code); },
            "message": n => { this.message = n.getStringValue(); },
            "moreDetails": n => { this.moreDetails = n.getStringValue(); },
            "parameter": n => { this.parameter = n.getStringValue(); },
            "subCode": n => { this.subCode = n.getEnumValue<Error_subCode>(Error_subCode); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Gets the message property value. A description of the error.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. A description of the error.
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Gets the moreDetails property value. A description that provides additional information about the error.
     * @returns a string
     */
    public get moreDetails() {
        return this._moreDetails;
    };
    /**
     * Sets the moreDetails property value. A description that provides additional information about the error.
     * @param value Value to set for the moreDetails property.
     */
    public set moreDetails(value: string | undefined) {
        this._moreDetails = value;
    };
    /**
     * Gets the parameter property value. The parameter in the request that caused the error.
     * @returns a string
     */
    public get parameter() {
        return this._parameter;
    };
    /**
     * Sets the parameter property value. The parameter in the request that caused the error.
     * @param value Value to set for the parameter property.
     */
    public set parameter(value: string | undefined) {
        this._parameter = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<Error_code>("code", this.code);
        writer.writeStringValue("message", this.message);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subCode property value. The error code that further helps to identify the error.
     * @returns a Error_subCode
     */
    public get subCode() {
        return this._subCode;
    };
    /**
     * Sets the subCode property value. The error code that further helps to identify the error.
     * @param value Value to set for the subCode property.
     */
    public set subCode(value: Error_subCode | undefined) {
        this._subCode = value;
    };
    /**
     * Gets the value property value. The parameter's value in the request that was not valid.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The parameter's value in the request that was not valid.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}

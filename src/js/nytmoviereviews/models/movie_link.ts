import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Movie_link implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The suggested_link_text property */
    private _suggested_link_text?: string | undefined;
    /** The type property */
    private _type?: string | undefined;
    /** The url property */
    private _url?: string | undefined;
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
     * Instantiates a new Movie_link and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "suggested_link_text": n => { this.suggested_link_text = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("suggested_link_text", this.suggested_link_text);
        writer.writeStringValue("type", this.type);
        writer.writeStringValue("url", this.url);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the suggested_link_text property value. The suggested_link_text property
     * @returns a string
     */
    public get suggested_link_text() {
        return this._suggested_link_text;
    };
    /**
     * Sets the suggested_link_text property value. The suggested_link_text property
     * @param value Value to set for the suggested_link_text property.
     */
    public set suggested_link_text(value: string | undefined) {
        this._suggested_link_text = value;
    };
    /**
     * Gets the type property value. The type property
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
    /**
     * Gets the url property value. The url property
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. The url property
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
}

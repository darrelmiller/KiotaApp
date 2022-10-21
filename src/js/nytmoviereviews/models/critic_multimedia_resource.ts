import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Critic_multimedia_resource implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The credit property */
    private _credit?: string | undefined;
    /** The height property */
    private _height?: number | undefined;
    /** The src property */
    private _src?: string | undefined;
    /** The type property */
    private _type?: string | undefined;
    /** The width property */
    private _width?: number | undefined;
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
     * Instantiates a new Critic_multimedia_resource and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the credit property value. The credit property
     * @returns a string
     */
    public get credit() {
        return this._credit;
    };
    /**
     * Sets the credit property value. The credit property
     * @param value Value to set for the credit property.
     */
    public set credit(value: string | undefined) {
        this._credit = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "credit": n => { this.credit = n.getStringValue(); },
            "height": n => { this.height = n.getNumberValue(); },
            "src": n => { this.src = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
            "width": n => { this.width = n.getNumberValue(); },
        };
    };
    /**
     * Gets the height property value. The height property
     * @returns a integer
     */
    public get height() {
        return this._height;
    };
    /**
     * Sets the height property value. The height property
     * @param value Value to set for the height property.
     */
    public set height(value: number | undefined) {
        this._height = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("credit", this.credit);
        writer.writeNumberValue("height", this.height);
        writer.writeStringValue("src", this.src);
        writer.writeStringValue("type", this.type);
        writer.writeNumberValue("width", this.width);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the src property value. The src property
     * @returns a string
     */
    public get src() {
        return this._src;
    };
    /**
     * Sets the src property value. The src property
     * @param value Value to set for the src property.
     */
    public set src(value: string | undefined) {
        this._src = value;
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
     * Gets the width property value. The width property
     * @returns a integer
     */
    public get width() {
        return this._width;
    };
    /**
     * Sets the width property value. The width property
     * @param value Value to set for the width property.
     */
    public set width(value: number | undefined) {
        this._width = value;
    };
}

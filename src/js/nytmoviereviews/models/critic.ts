import {createCritic_multimediaFromDiscriminatorValue} from './createCritic_multimediaFromDiscriminatorValue';
import {Critic_multimedia} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Critic implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The bio property */
    private _bio?: string | undefined;
    /** The display_name property */
    private _display_name?: string | undefined;
    /** The multimedia property */
    private _multimedia?: Critic_multimedia | undefined;
    /** The seo_name property */
    private _seo_name?: string | undefined;
    /** The sort_name property */
    private _sort_name?: string | undefined;
    /** The status property */
    private _status?: string | undefined;
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
     * Gets the bio property value. The bio property
     * @returns a string
     */
    public get bio() {
        return this._bio;
    };
    /**
     * Sets the bio property value. The bio property
     * @param value Value to set for the bio property.
     */
    public set bio(value: string | undefined) {
        this._bio = value;
    };
    /**
     * Instantiates a new Critic and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the display_name property value. The display_name property
     * @returns a string
     */
    public get display_name() {
        return this._display_name;
    };
    /**
     * Sets the display_name property value. The display_name property
     * @param value Value to set for the display_name property.
     */
    public set display_name(value: string | undefined) {
        this._display_name = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "bio": n => { this.bio = n.getStringValue(); },
            "display_name": n => { this.display_name = n.getStringValue(); },
            "multimedia": n => { this.multimedia = n.getObjectValue<Critic_multimedia>(createCritic_multimediaFromDiscriminatorValue); },
            "seo_name": n => { this.seo_name = n.getStringValue(); },
            "sort_name": n => { this.sort_name = n.getStringValue(); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Gets the multimedia property value. The multimedia property
     * @returns a Critic_multimedia
     */
    public get multimedia() {
        return this._multimedia;
    };
    /**
     * Sets the multimedia property value. The multimedia property
     * @param value Value to set for the multimedia property.
     */
    public set multimedia(value: Critic_multimedia | undefined) {
        this._multimedia = value;
    };
    /**
     * Gets the seo_name property value. The seo_name property
     * @returns a string
     */
    public get seo_name() {
        return this._seo_name;
    };
    /**
     * Sets the seo_name property value. The seo_name property
     * @param value Value to set for the seo_name property.
     */
    public set seo_name(value: string | undefined) {
        this._seo_name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("bio", this.bio);
        writer.writeStringValue("display_name", this.display_name);
        writer.writeObjectValue<Critic_multimedia>("multimedia", this.multimedia);
        writer.writeStringValue("seo_name", this.seo_name);
        writer.writeStringValue("sort_name", this.sort_name);
        writer.writeStringValue("status", this.status);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sort_name property value. The sort_name property
     * @returns a string
     */
    public get sort_name() {
        return this._sort_name;
    };
    /**
     * Sets the sort_name property value. The sort_name property
     * @param value Value to set for the sort_name property.
     */
    public set sort_name(value: string | undefined) {
        this._sort_name = value;
    };
    /**
     * Gets the status property value. The status property
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
}

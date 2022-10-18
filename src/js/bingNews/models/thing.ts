import {createImageObjectFromDiscriminatorValue} from './createImageObjectFromDiscriminatorValue';
import {ImageObject, Response} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Defines a thing. */
export class Thing extends Response implements Parsable {
    /** An alias for the item */
    private _alternateName?: string | undefined;
    /** An ID that uniquely identifies this item. */
    private _bingId?: string | undefined;
    /** A short description of the item. */
    private _description?: string | undefined;
    /** Defines an image */
    private _image?: ImageObject | undefined;
    /** The name of the thing represented by this object. */
    private _name?: string | undefined;
    /** The URL to get more information about the thing represented by this object. */
    private _url?: string | undefined;
    /**
     * Gets the alternateName property value. An alias for the item
     * @returns a string
     */
    public get alternateName() {
        return this._alternateName;
    };
    /**
     * Sets the alternateName property value. An alias for the item
     * @param value Value to set for the alternateName property.
     */
    public set alternateName(value: string | undefined) {
        this._alternateName = value;
    };
    /**
     * Gets the bingId property value. An ID that uniquely identifies this item.
     * @returns a string
     */
    public get bingId() {
        return this._bingId;
    };
    /**
     * Sets the bingId property value. An ID that uniquely identifies this item.
     * @param value Value to set for the bingId property.
     */
    public set bingId(value: string | undefined) {
        this._bingId = value;
    };
    /**
     * Instantiates a new Thing and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. A short description of the item.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. A short description of the item.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "alternateName": n => { this.alternateName = n.getStringValue(); },
            "bingId": n => { this.bingId = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "image": n => { this.image = n.getObjectValue<ImageObject>(createImageObjectFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
        };
    };
    /**
     * Gets the image property value. Defines an image
     * @returns a ImageObject
     */
    public get image() {
        return this._image;
    };
    /**
     * Sets the image property value. Defines an image
     * @param value Value to set for the image property.
     */
    public set image(value: ImageObject | undefined) {
        this._image = value;
    };
    /**
     * Gets the name property value. The name of the thing represented by this object.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the thing represented by this object.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ImageObject>("image", this.image);
    };
    /**
     * Gets the url property value. The URL to get more information about the thing represented by this object.
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. The URL to get more information about the thing represented by this object.
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
}

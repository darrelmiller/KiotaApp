import {CreativeWork} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Defines a media object. */
export class MediaObject extends CreativeWork implements Parsable {
    /** Original URL to retrieve the source (file) for the media object (e.g the source URL for the image). */
    private _contentUrl?: string | undefined;
    /** The height of the source media object, in pixels. */
    private _height?: number | undefined;
    /** The width of the source media object, in pixels. */
    private _width?: number | undefined;
    /**
     * Instantiates a new MediaObject and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contentUrl property value. Original URL to retrieve the source (file) for the media object (e.g the source URL for the image).
     * @returns a string
     */
    public get contentUrl() {
        return this._contentUrl;
    };
    /**
     * Sets the contentUrl property value. Original URL to retrieve the source (file) for the media object (e.g the source URL for the image).
     * @param value Value to set for the contentUrl property.
     */
    public set contentUrl(value: string | undefined) {
        this._contentUrl = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "contentUrl": n => { this.contentUrl = n.getStringValue(); },
            "height": n => { this.height = n.getNumberValue(); },
            "width": n => { this.width = n.getNumberValue(); },
        };
    };
    /**
     * Gets the height property value. The height of the source media object, in pixels.
     * @returns a integer
     */
    public get height() {
        return this._height;
    };
    /**
     * Sets the height property value. The height of the source media object, in pixels.
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
        super.serialize(writer);
    };
    /**
     * Gets the width property value. The width of the source media object, in pixels.
     * @returns a integer
     */
    public get width() {
        return this._width;
    };
    /**
     * Sets the width property value. The width of the source media object, in pixels.
     * @param value Value to set for the width property.
     */
    public set width(value: number | undefined) {
        this._width = value;
    };
}

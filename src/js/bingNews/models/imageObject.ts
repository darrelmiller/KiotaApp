import {createImageObjectFromDiscriminatorValue} from './createImageObjectFromDiscriminatorValue';
import {MediaObject} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Defines an image */
export class ImageObject extends MediaObject implements Parsable {
    /** Defines an image */
    private _thumbnail?: ImageObject | undefined;
    /**
     * Instantiates a new ImageObject and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "thumbnail": n => { this.thumbnail = n.getObjectValue<ImageObject>(createImageObjectFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ImageObject>("thumbnail", this.thumbnail);
    };
    /**
     * Gets the thumbnail property value. Defines an image
     * @returns a ImageObject
     */
    public get thumbnail() {
        return this._thumbnail;
    };
    /**
     * Sets the thumbnail property value. Defines an image
     * @param value Value to set for the thumbnail property.
     */
    public set thumbnail(value: ImageObject | undefined) {
        this._thumbnail = value;
    };
}

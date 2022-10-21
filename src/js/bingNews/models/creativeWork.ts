import {createThingFromDiscriminatorValue} from './createThingFromDiscriminatorValue';
import {createVideoObjectFromDiscriminatorValue} from './createVideoObjectFromDiscriminatorValue';
import {Thing, VideoObject} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The most generic kind of creative work, including books, movies, photographs, software programs, etc. */
export class CreativeWork extends Thing implements Parsable {
    /** The date on which the CreativeWork was published. */
    private _datePublished?: string | undefined;
    /** The source of the creative work. */
    private _provider?: Thing[] | undefined;
    /** The URL to a thumbnail of the item. */
    private _thumbnailUrl?: string | undefined;
    /** Defines a video object that is relevant to the query. */
    private _video?: VideoObject | undefined;
    /**
     * Instantiates a new CreativeWork and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the datePublished property value. The date on which the CreativeWork was published.
     * @returns a string
     */
    public get datePublished() {
        return this._datePublished;
    };
    /**
     * Sets the datePublished property value. The date on which the CreativeWork was published.
     * @param value Value to set for the datePublished property.
     */
    public set datePublished(value: string | undefined) {
        this._datePublished = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "datePublished": n => { this.datePublished = n.getStringValue(); },
            "provider": n => { this.provider = n.getCollectionOfObjectValues<Thing>(createThingFromDiscriminatorValue); },
            "thumbnailUrl": n => { this.thumbnailUrl = n.getStringValue(); },
            "video": n => { this.video = n.getObjectValue<VideoObject>(createVideoObjectFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the provider property value. The source of the creative work.
     * @returns a Thing
     */
    public get provider() {
        return this._provider;
    };
    /**
     * Sets the provider property value. The source of the creative work.
     * @param value Value to set for the provider property.
     */
    public set provider(value: Thing[] | undefined) {
        this._provider = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<VideoObject>("video", this.video);
    };
    /**
     * Gets the thumbnailUrl property value. The URL to a thumbnail of the item.
     * @returns a string
     */
    public get thumbnailUrl() {
        return this._thumbnailUrl;
    };
    /**
     * Sets the thumbnailUrl property value. The URL to a thumbnail of the item.
     * @param value Value to set for the thumbnailUrl property.
     */
    public set thumbnailUrl(value: string | undefined) {
        this._thumbnailUrl = value;
    };
    /**
     * Gets the video property value. Defines a video object that is relevant to the query.
     * @returns a VideoObject
     */
    public get video() {
        return this._video;
    };
    /**
     * Sets the video property value. Defines a video object that is relevant to the query.
     * @param value Value to set for the video property.
     */
    public set video(value: VideoObject | undefined) {
        this._video = value;
    };
}

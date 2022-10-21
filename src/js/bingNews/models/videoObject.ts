import {createImageObjectFromDiscriminatorValue} from './createImageObjectFromDiscriminatorValue';
import {ImageObject, MediaObject} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Defines a video object that is relevant to the query. */
export class VideoObject extends MediaObject implements Parsable {
    /** The allowHttpsEmbed property */
    private _allowHttpsEmbed?: boolean | undefined;
    /** The allowMobileEmbed property */
    private _allowMobileEmbed?: boolean | undefined;
    /** The embedHtml property */
    private _embedHtml?: string | undefined;
    /** The isSuperfresh property */
    private _isSuperfresh?: boolean | undefined;
    /** The motionThumbnailId property */
    private _motionThumbnailId?: string | undefined;
    /** The motionThumbnailUrl property */
    private _motionThumbnailUrl?: string | undefined;
    /** Defines an image */
    private _thumbnail?: ImageObject | undefined;
    /** The videoId property */
    private _videoId?: string | undefined;
    /** The viewCount property */
    private _viewCount?: number | undefined;
    /**
     * Gets the allowHttpsEmbed property value. The allowHttpsEmbed property
     * @returns a boolean
     */
    public get allowHttpsEmbed() {
        return this._allowHttpsEmbed;
    };
    /**
     * Sets the allowHttpsEmbed property value. The allowHttpsEmbed property
     * @param value Value to set for the allowHttpsEmbed property.
     */
    public set allowHttpsEmbed(value: boolean | undefined) {
        this._allowHttpsEmbed = value;
    };
    /**
     * Gets the allowMobileEmbed property value. The allowMobileEmbed property
     * @returns a boolean
     */
    public get allowMobileEmbed() {
        return this._allowMobileEmbed;
    };
    /**
     * Sets the allowMobileEmbed property value. The allowMobileEmbed property
     * @param value Value to set for the allowMobileEmbed property.
     */
    public set allowMobileEmbed(value: boolean | undefined) {
        this._allowMobileEmbed = value;
    };
    /**
     * Instantiates a new VideoObject and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the embedHtml property value. The embedHtml property
     * @returns a string
     */
    public get embedHtml() {
        return this._embedHtml;
    };
    /**
     * Sets the embedHtml property value. The embedHtml property
     * @param value Value to set for the embedHtml property.
     */
    public set embedHtml(value: string | undefined) {
        this._embedHtml = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowHttpsEmbed": n => { this.allowHttpsEmbed = n.getBooleanValue(); },
            "allowMobileEmbed": n => { this.allowMobileEmbed = n.getBooleanValue(); },
            "embedHtml": n => { this.embedHtml = n.getStringValue(); },
            "isSuperfresh": n => { this.isSuperfresh = n.getBooleanValue(); },
            "motionThumbnailId": n => { this.motionThumbnailId = n.getStringValue(); },
            "motionThumbnailUrl": n => { this.motionThumbnailUrl = n.getStringValue(); },
            "thumbnail": n => { this.thumbnail = n.getObjectValue<ImageObject>(createImageObjectFromDiscriminatorValue); },
            "videoId": n => { this.videoId = n.getStringValue(); },
            "viewCount": n => { this.viewCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the isSuperfresh property value. The isSuperfresh property
     * @returns a boolean
     */
    public get isSuperfresh() {
        return this._isSuperfresh;
    };
    /**
     * Sets the isSuperfresh property value. The isSuperfresh property
     * @param value Value to set for the isSuperfresh property.
     */
    public set isSuperfresh(value: boolean | undefined) {
        this._isSuperfresh = value;
    };
    /**
     * Gets the motionThumbnailId property value. The motionThumbnailId property
     * @returns a string
     */
    public get motionThumbnailId() {
        return this._motionThumbnailId;
    };
    /**
     * Sets the motionThumbnailId property value. The motionThumbnailId property
     * @param value Value to set for the motionThumbnailId property.
     */
    public set motionThumbnailId(value: string | undefined) {
        this._motionThumbnailId = value;
    };
    /**
     * Gets the motionThumbnailUrl property value. The motionThumbnailUrl property
     * @returns a string
     */
    public get motionThumbnailUrl() {
        return this._motionThumbnailUrl;
    };
    /**
     * Sets the motionThumbnailUrl property value. The motionThumbnailUrl property
     * @param value Value to set for the motionThumbnailUrl property.
     */
    public set motionThumbnailUrl(value: string | undefined) {
        this._motionThumbnailUrl = value;
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
    /**
     * Gets the videoId property value. The videoId property
     * @returns a string
     */
    public get videoId() {
        return this._videoId;
    };
    /**
     * Sets the videoId property value. The videoId property
     * @param value Value to set for the videoId property.
     */
    public set videoId(value: string | undefined) {
        this._videoId = value;
    };
    /**
     * Gets the viewCount property value. The viewCount property
     * @returns a integer
     */
    public get viewCount() {
        return this._viewCount;
    };
    /**
     * Sets the viewCount property value. The viewCount property
     * @param value Value to set for the viewCount property.
     */
    public set viewCount(value: number | undefined) {
        this._viewCount = value;
    };
}

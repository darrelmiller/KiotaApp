import {createMovie_linkFromDiscriminatorValue} from './createMovie_linkFromDiscriminatorValue';
import {createMovie_multimediaFromDiscriminatorValue} from './createMovie_multimediaFromDiscriminatorValue';
import {Movie_link, Movie_multimedia} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Movie implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The byline property */
    private _byline?: string | undefined;
    /** The critics_pick property */
    private _critics_pick?: number | undefined;
    /** The date_updated property */
    private _date_updated?: string | undefined;
    /** The display_title property */
    private _display_title?: string | undefined;
    /** The headline property */
    private _headline?: string | undefined;
    /** The link property */
    private _link?: Movie_link | undefined;
    /** The mpaa_rating property */
    private _mpaa_rating?: string | undefined;
    /** The multimedia property */
    private _multimedia?: Movie_multimedia | undefined;
    /** The opening_date property */
    private _opening_date?: string | undefined;
    /** The publication_date property */
    private _publication_date?: string | undefined;
    /** The summary_short property */
    private _summary_short?: string | undefined;
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
     * Gets the byline property value. The byline property
     * @returns a string
     */
    public get byline() {
        return this._byline;
    };
    /**
     * Sets the byline property value. The byline property
     * @param value Value to set for the byline property.
     */
    public set byline(value: string | undefined) {
        this._byline = value;
    };
    /**
     * Instantiates a new Movie and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the critics_pick property value. The critics_pick property
     * @returns a integer
     */
    public get critics_pick() {
        return this._critics_pick;
    };
    /**
     * Sets the critics_pick property value. The critics_pick property
     * @param value Value to set for the critics_pick property.
     */
    public set critics_pick(value: number | undefined) {
        this._critics_pick = value;
    };
    /**
     * Gets the date_updated property value. The date_updated property
     * @returns a string
     */
    public get date_updated() {
        return this._date_updated;
    };
    /**
     * Sets the date_updated property value. The date_updated property
     * @param value Value to set for the date_updated property.
     */
    public set date_updated(value: string | undefined) {
        this._date_updated = value;
    };
    /**
     * Gets the display_title property value. The display_title property
     * @returns a string
     */
    public get display_title() {
        return this._display_title;
    };
    /**
     * Sets the display_title property value. The display_title property
     * @param value Value to set for the display_title property.
     */
    public set display_title(value: string | undefined) {
        this._display_title = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "byline": n => { this.byline = n.getStringValue(); },
            "critics_pick": n => { this.critics_pick = n.getNumberValue(); },
            "date_updated": n => { this.date_updated = n.getStringValue(); },
            "display_title": n => { this.display_title = n.getStringValue(); },
            "headline": n => { this.headline = n.getStringValue(); },
            "link": n => { this.link = n.getObjectValue<Movie_link>(createMovie_linkFromDiscriminatorValue); },
            "mpaa_rating": n => { this.mpaa_rating = n.getStringValue(); },
            "multimedia": n => { this.multimedia = n.getObjectValue<Movie_multimedia>(createMovie_multimediaFromDiscriminatorValue); },
            "opening_date": n => { this.opening_date = n.getStringValue(); },
            "publication_date": n => { this.publication_date = n.getStringValue(); },
            "summary_short": n => { this.summary_short = n.getStringValue(); },
        };
    };
    /**
     * Gets the headline property value. The headline property
     * @returns a string
     */
    public get headline() {
        return this._headline;
    };
    /**
     * Sets the headline property value. The headline property
     * @param value Value to set for the headline property.
     */
    public set headline(value: string | undefined) {
        this._headline = value;
    };
    /**
     * Gets the link property value. The link property
     * @returns a Movie_link
     */
    public get link() {
        return this._link;
    };
    /**
     * Sets the link property value. The link property
     * @param value Value to set for the link property.
     */
    public set link(value: Movie_link | undefined) {
        this._link = value;
    };
    /**
     * Gets the mpaa_rating property value. The mpaa_rating property
     * @returns a string
     */
    public get mpaa_rating() {
        return this._mpaa_rating;
    };
    /**
     * Sets the mpaa_rating property value. The mpaa_rating property
     * @param value Value to set for the mpaa_rating property.
     */
    public set mpaa_rating(value: string | undefined) {
        this._mpaa_rating = value;
    };
    /**
     * Gets the multimedia property value. The multimedia property
     * @returns a Movie_multimedia
     */
    public get multimedia() {
        return this._multimedia;
    };
    /**
     * Sets the multimedia property value. The multimedia property
     * @param value Value to set for the multimedia property.
     */
    public set multimedia(value: Movie_multimedia | undefined) {
        this._multimedia = value;
    };
    /**
     * Gets the opening_date property value. The opening_date property
     * @returns a string
     */
    public get opening_date() {
        return this._opening_date;
    };
    /**
     * Sets the opening_date property value. The opening_date property
     * @param value Value to set for the opening_date property.
     */
    public set opening_date(value: string | undefined) {
        this._opening_date = value;
    };
    /**
     * Gets the publication_date property value. The publication_date property
     * @returns a string
     */
    public get publication_date() {
        return this._publication_date;
    };
    /**
     * Sets the publication_date property value. The publication_date property
     * @param value Value to set for the publication_date property.
     */
    public set publication_date(value: string | undefined) {
        this._publication_date = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("byline", this.byline);
        writer.writeNumberValue("critics_pick", this.critics_pick);
        writer.writeStringValue("date_updated", this.date_updated);
        writer.writeStringValue("display_title", this.display_title);
        writer.writeStringValue("headline", this.headline);
        writer.writeObjectValue<Movie_link>("link", this.link);
        writer.writeStringValue("mpaa_rating", this.mpaa_rating);
        writer.writeObjectValue<Movie_multimedia>("multimedia", this.multimedia);
        writer.writeStringValue("opening_date", this.opening_date);
        writer.writeStringValue("publication_date", this.publication_date);
        writer.writeStringValue("summary_short", this.summary_short);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the summary_short property value. The summary_short property
     * @returns a string
     */
    public get summary_short() {
        return this._summary_short;
    };
    /**
     * Sets the summary_short property value. The summary_short property
     * @param value Value to set for the summary_short property.
     */
    public set summary_short(value: string | undefined) {
        this._summary_short = value;
    };
}

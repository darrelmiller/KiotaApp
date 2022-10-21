import {createImageObjectFromDiscriminatorValue} from './createImageObjectFromDiscriminatorValue';
import {ImageObject} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Defines a search query. */
export class Query implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The display version of the query term. This version of the query term may contain special characters that highlight the search term found in the query string. The string contains the highlighting characters only if the query enabled hit highlighting */
    private _displayText?: string | undefined;
    /** The URL that you use to get the results of the related search. Before using the URL, you must append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header. Use this URL if you're displaying the results in your own user interface. Otherwise, use the webSearchUrl URL. */
    private _searchLink?: string | undefined;
    /** The query string. Use this string as the query term in a new search request. */
    private _text?: string | undefined;
    /** Defines an image */
    private _thumbnail?: ImageObject | undefined;
    /** The URL that takes the user to the Bing search results page for the query.Only related search results include this field. */
    private _webSearchUrl?: string | undefined;
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
     * Instantiates a new Query and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the displayText property value. The display version of the query term. This version of the query term may contain special characters that highlight the search term found in the query string. The string contains the highlighting characters only if the query enabled hit highlighting
     * @returns a string
     */
    public get displayText() {
        return this._displayText;
    };
    /**
     * Sets the displayText property value. The display version of the query term. This version of the query term may contain special characters that highlight the search term found in the query string. The string contains the highlighting characters only if the query enabled hit highlighting
     * @param value Value to set for the displayText property.
     */
    public set displayText(value: string | undefined) {
        this._displayText = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayText": n => { this.displayText = n.getStringValue(); },
            "searchLink": n => { this.searchLink = n.getStringValue(); },
            "text": n => { this.text = n.getStringValue(); },
            "thumbnail": n => { this.thumbnail = n.getObjectValue<ImageObject>(createImageObjectFromDiscriminatorValue); },
            "webSearchUrl": n => { this.webSearchUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the searchLink property value. The URL that you use to get the results of the related search. Before using the URL, you must append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header. Use this URL if you're displaying the results in your own user interface. Otherwise, use the webSearchUrl URL.
     * @returns a string
     */
    public get searchLink() {
        return this._searchLink;
    };
    /**
     * Sets the searchLink property value. The URL that you use to get the results of the related search. Before using the URL, you must append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header. Use this URL if you're displaying the results in your own user interface. Otherwise, use the webSearchUrl URL.
     * @param value Value to set for the searchLink property.
     */
    public set searchLink(value: string | undefined) {
        this._searchLink = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("text", this.text);
        writer.writeObjectValue<ImageObject>("thumbnail", this.thumbnail);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the text property value. The query string. Use this string as the query term in a new search request.
     * @returns a string
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. The query string. Use this string as the query term in a new search request.
     * @param value Value to set for the text property.
     */
    public set text(value: string | undefined) {
        this._text = value;
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
     * Gets the webSearchUrl property value. The URL that takes the user to the Bing search results page for the query.Only related search results include this field.
     * @returns a string
     */
    public get webSearchUrl() {
        return this._webSearchUrl;
    };
    /**
     * Sets the webSearchUrl property value. The URL that takes the user to the Bing search results page for the query.Only related search results include this field.
     * @param value Value to set for the webSearchUrl property.
     */
    public set webSearchUrl(value: string | undefined) {
        this._webSearchUrl = value;
    };
}

import {createNewsArticleFromDiscriminatorValue} from './createNewsArticleFromDiscriminatorValue';
import {Article} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Defines a news article. */
export class NewsArticle extends Article implements Parsable {
    /** The news category that the article belongs to. For example, Sports. If the news category cannot be determined, the article does not include this field. */
    private _category?: string | undefined;
    /** A list of related news articles. */
    private _clusteredArticles?: NewsArticle[] | undefined;
    /** A Boolean value that indicates whether the news article is a headline. If true, the article is a headline. The article includes this field only for news categories requests that do not specify the category query parameter. */
    private _headline?: boolean | undefined;
    /**
     * Gets the category property value. The news category that the article belongs to. For example, Sports. If the news category cannot be determined, the article does not include this field.
     * @returns a string
     */
    public get category() {
        return this._category;
    };
    /**
     * Sets the category property value. The news category that the article belongs to. For example, Sports. If the news category cannot be determined, the article does not include this field.
     * @param value Value to set for the category property.
     */
    public set category(value: string | undefined) {
        this._category = value;
    };
    /**
     * Gets the clusteredArticles property value. A list of related news articles.
     * @returns a NewsArticle
     */
    public get clusteredArticles() {
        return this._clusteredArticles;
    };
    /**
     * Sets the clusteredArticles property value. A list of related news articles.
     * @param value Value to set for the clusteredArticles property.
     */
    public set clusteredArticles(value: NewsArticle[] | undefined) {
        this._clusteredArticles = value;
    };
    /**
     * Instantiates a new NewsArticle and sets the default values.
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
            "category": n => { this.category = n.getStringValue(); },
            "clusteredArticles": n => { this.clusteredArticles = n.getCollectionOfObjectValues<NewsArticle>(createNewsArticleFromDiscriminatorValue); },
            "headline": n => { this.headline = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the headline property value. A Boolean value that indicates whether the news article is a headline. If true, the article is a headline. The article includes this field only for news categories requests that do not specify the category query parameter.
     * @returns a boolean
     */
    public get headline() {
        return this._headline;
    };
    /**
     * Sets the headline property value. A Boolean value that indicates whether the news article is a headline. If true, the article is a headline. The article includes this field only for news categories requests that do not specify the category query parameter.
     * @param value Value to set for the headline property.
     */
    public set headline(value: boolean | undefined) {
        this._headline = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
    };
}

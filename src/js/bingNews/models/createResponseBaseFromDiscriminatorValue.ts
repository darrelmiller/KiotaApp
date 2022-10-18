import {Answer, Article, CreativeWork, ErrorResponse, Identifiable, ImageObject, MediaObject, News, NewsArticle, NewsTopic, Organization, Response, ResponseBase, SearchResultsAnswer, Thing, TrendingTopics, VideoObject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResponseBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResponseBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("_type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "Answer":
                    return new Answer();
                case "Article":
                    return new Article();
                case "CreativeWork":
                    return new CreativeWork();
                case "ErrorResponse":
                    return new ErrorResponse();
                case "Identifiable":
                    return new Identifiable();
                case "ImageObject":
                    return new ImageObject();
                case "MediaObject":
                    return new MediaObject();
                case "News":
                    return new News();
                case "NewsArticle":
                    return new NewsArticle();
                case "NewsTopic":
                    return new NewsTopic();
                case "Organization":
                    return new Organization();
                case "Response":
                    return new Response();
                case "SearchResultsAnswer":
                    return new SearchResultsAnswer();
                case "Thing":
                    return new Thing();
                case "TrendingTopics":
                    return new TrendingTopics();
                case "VideoObject":
                    return new VideoObject();
            }
        }
    }
    return new ResponseBase();
}

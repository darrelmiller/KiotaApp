import {Article, CreativeWork, ImageObject, MediaObject, NewsArticle, NewsTopic, Organization, Thing, VideoObject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Thing {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("_type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "Article":
                    return new Article();
                case "CreativeWork":
                    return new CreativeWork();
                case "ImageObject":
                    return new ImageObject();
                case "MediaObject":
                    return new MediaObject();
                case "NewsArticle":
                    return new NewsArticle();
                case "NewsTopic":
                    return new NewsTopic();
                case "Organization":
                    return new Organization();
                case "VideoObject":
                    return new VideoObject();
            }
        }
    }
    return new Thing();
}

import {Article, CreativeWork, ImageObject, MediaObject, NewsArticle, VideoObject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreativeWorkFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreativeWork {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("_type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "Article":
                    return new Article();
                case "ImageObject":
                    return new ImageObject();
                case "MediaObject":
                    return new MediaObject();
                case "NewsArticle":
                    return new NewsArticle();
                case "VideoObject":
                    return new VideoObject();
            }
        }
    }
    return new CreativeWork();
}

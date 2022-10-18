import {Article, NewsArticle} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createArticleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Article {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("_type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "NewsArticle":
                    return new NewsArticle();
            }
        }
    }
    return new Article();
}

import {Answer, News, SearchResultsAnswer, TrendingTopics} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAnswerFromDiscriminatorValue(parseNode: ParseNode | undefined) : Answer {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("_type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "News":
                    return new News();
                case "SearchResultsAnswer":
                    return new SearchResultsAnswer();
                case "TrendingTopics":
                    return new TrendingTopics();
            }
        }
    }
    return new Answer();
}

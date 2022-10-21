import {News, SearchResultsAnswer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchResultsAnswerFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchResultsAnswer {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("_type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "News":
                    return new News();
            }
        }
    }
    return new SearchResultsAnswer();
}

import {NewsArticle} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNewsArticleFromDiscriminatorValue(parseNode: ParseNode | undefined) : NewsArticle {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NewsArticle();
}

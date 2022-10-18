import {Movie_link} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMovie_linkFromDiscriminatorValue(parseNode: ParseNode | undefined) : Movie_link {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Movie_link();
}

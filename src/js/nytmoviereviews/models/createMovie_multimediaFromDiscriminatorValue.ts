import {Movie_multimedia} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMovie_multimediaFromDiscriminatorValue(parseNode: ParseNode | undefined) : Movie_multimedia {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Movie_multimedia();
}

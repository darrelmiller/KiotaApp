import {VideoObject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVideoObjectFromDiscriminatorValue(parseNode: ParseNode | undefined) : VideoObject {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VideoObject();
}

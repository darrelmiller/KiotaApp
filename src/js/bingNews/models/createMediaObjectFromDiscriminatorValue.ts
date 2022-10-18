import {ImageObject, MediaObject, VideoObject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaObjectFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaObject {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("_type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "ImageObject":
                    return new ImageObject();
                case "VideoObject":
                    return new VideoObject();
            }
        }
    }
    return new MediaObject();
}

import {Movie_multimedia_resource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMovie_multimedia_resourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Movie_multimedia_resource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Movie_multimedia_resource();
}

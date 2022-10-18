import {Critic_multimedia_resource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCritic_multimedia_resourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Critic_multimedia_resource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Critic_multimedia_resource();
}

using Bing.Models;
using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace Bing.Models {
    /// <summary>Defines the identity of a resource.</summary>
    public class Identifiable : ResponseBase, IParsable {
        /// <summary>A String identifier.</summary>
        public string Id { get; private set; }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static new Identifiable CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            var mappingValue = parseNode.GetChildNode("_type")?.GetStringValue();
            return mappingValue switch {
                "Answer" => new Answer(),
                "Article" => new Article(),
                "CreativeWork" => new CreativeWork(),
                "ErrorResponse" => new ErrorResponse(),
                "ImageObject" => new ImageObject(),
                "MediaObject" => new MediaObject(),
                "News" => new News(),
                "NewsArticle" => new NewsArticle(),
                "NewsTopic" => new NewsTopic(),
                "Organization" => new Organization(),
                "Response" => new Response(),
                "SearchResultsAnswer" => new SearchResultsAnswer(),
                "Thing" => new Thing(),
                "TrendingTopics" => new TrendingTopics(),
                "VideoObject" => new VideoObject(),
                _ => new Identifiable(),
            };
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public new IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>>(base.GetFieldDeserializers()) {
                {"id", n => { Id = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        /// </summary>
        public new void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            base.Serialize(writer);
        }
    }
}

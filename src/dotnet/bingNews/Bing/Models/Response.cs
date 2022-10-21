using Bing.Models;
using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace Bing.Models {
    /// <summary>Defines a response. All schemas that could be returned at the root of a response should inherit from this</summary>
    public class Response : Identifiable, IParsable {
        /// <summary>The URL To Bing&apos;s search result for this item.</summary>
        public string WebSearchUrl { get; private set; }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static new Response CreateFromDiscriminatorValue(IParseNode parseNode) {
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
                "SearchResultsAnswer" => new SearchResultsAnswer(),
                "Thing" => new Thing(),
                "TrendingTopics" => new TrendingTopics(),
                "VideoObject" => new VideoObject(),
                _ => new Response(),
            };
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public new IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>>(base.GetFieldDeserializers()) {
                {"webSearchUrl", n => { WebSearchUrl = n.GetStringValue(); } },
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

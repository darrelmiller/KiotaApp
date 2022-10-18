using Bing.Models;
using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace Bing.Models {
    /// <summary>Response base</summary>
    public class ResponseBase : IAdditionalDataHolder, IParsable {
        /// <summary>The _type property</summary>
        public string _type { get; set; }
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>
        /// Instantiates a new ResponseBase and sets the default values.
        /// </summary>
        public ResponseBase() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static ResponseBase CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            var mappingValue = parseNode.GetChildNode("_type")?.GetStringValue();
            return mappingValue switch {
                "Answer" => new Answer(),
                "Article" => new Article(),
                "CreativeWork" => new CreativeWork(),
                "ErrorResponse" => new ErrorResponse(),
                "Identifiable" => new Identifiable(),
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
                _ => new ResponseBase(),
            };
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"_type", n => { _type = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        /// </summary>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("_type", _type);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}

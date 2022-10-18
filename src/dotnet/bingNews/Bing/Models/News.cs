using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace Bing.Models {
    /// <summary>Defines a news answer.</summary>
    public class News : SearchResultsAnswer, IParsable {
        /// <summary>Location of local news</summary>
        public string Location { get; private set; }
        /// <summary>An array of NewsArticle objects that contain information about news articles that are relevant to the query. If there are no results to return for the request, the array is empty.</summary>
        public List<NewsArticle> Value { get; set; }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static new News CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new News();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public new IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>>(base.GetFieldDeserializers()) {
                {"location", n => { Location = n.GetStringValue(); } },
                {"value", n => { Value = n.GetCollectionOfObjectValues<NewsArticle>(NewsArticle.CreateFromDiscriminatorValue)?.ToList(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        /// </summary>
        public new void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            base.Serialize(writer);
            writer.WriteCollectionOfObjectValues<NewsArticle>("value", Value);
        }
    }
}

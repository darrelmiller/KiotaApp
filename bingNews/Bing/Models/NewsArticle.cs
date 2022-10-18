using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace Bing.Models {
    /// <summary>Defines a news article.</summary>
    public class NewsArticle : Article, IParsable {
        /// <summary>The news category that the article belongs to. For example, Sports. If the news category cannot be determined, the article does not include this field.</summary>
        public string Category { get; private set; }
        /// <summary>A list of related news articles.</summary>
        public List<NewsArticle> ClusteredArticles { get; private set; }
        /// <summary>A Boolean value that indicates whether the news article is a headline. If true, the article is a headline. The article includes this field only for news categories requests that do not specify the category query parameter.</summary>
        public bool? Headline { get; private set; }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static new NewsArticle CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new NewsArticle();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public new IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>>(base.GetFieldDeserializers()) {
                {"category", n => { Category = n.GetStringValue(); } },
                {"clusteredArticles", n => { ClusteredArticles = n.GetCollectionOfObjectValues<NewsArticle>(NewsArticle.CreateFromDiscriminatorValue)?.ToList(); } },
                {"headline", n => { Headline = n.GetBoolValue(); } },
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

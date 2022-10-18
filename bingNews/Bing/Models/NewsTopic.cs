using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace Bing.Models {
    public class NewsTopic : Thing, IParsable {
        /// <summary>A Boolean value that indicates whether the topic is considered breaking news. If the topic is considered breaking news, the value is true.</summary>
        public bool? IsBreakingNews { get; private set; }
        /// <summary>The URL to the Bing News search results for the search query term</summary>
        public string NewsSearchUrl { get; private set; }
        /// <summary>Defines a search query.</summary>
        public Bing.Models.Query Query { get; set; }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static new NewsTopic CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new NewsTopic();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public new IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>>(base.GetFieldDeserializers()) {
                {"isBreakingNews", n => { IsBreakingNews = n.GetBoolValue(); } },
                {"newsSearchUrl", n => { NewsSearchUrl = n.GetStringValue(); } },
                {"query", n => { Query = n.GetObjectValue<Bing.Models.Query>(Bing.Models.Query.CreateFromDiscriminatorValue); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        /// </summary>
        public new void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            base.Serialize(writer);
            writer.WriteObjectValue<Bing.Models.Query>("query", Query);
        }
    }
}

using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace Bing.Models {
    /// <summary>Defines a search query.</summary>
    public class Query : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The display version of the query term. This version of the query term may contain special characters that highlight the search term found in the query string. The string contains the highlighting characters only if the query enabled hit highlighting</summary>
        public string DisplayText { get; private set; }
        /// <summary>The URL that you use to get the results of the related search. Before using the URL, you must append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header. Use this URL if you&apos;re displaying the results in your own user interface. Otherwise, use the webSearchUrl URL.</summary>
        public string SearchLink { get; private set; }
        /// <summary>The query string. Use this string as the query term in a new search request.</summary>
        public string Text { get; set; }
        /// <summary>Defines an image</summary>
        public ImageObject Thumbnail { get; set; }
        /// <summary>The URL that takes the user to the Bing search results page for the query.Only related search results include this field.</summary>
        public string WebSearchUrl { get; private set; }
        /// <summary>
        /// Instantiates a new Query and sets the default values.
        /// </summary>
        public Query() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static Query CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Query();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"displayText", n => { DisplayText = n.GetStringValue(); } },
                {"searchLink", n => { SearchLink = n.GetStringValue(); } },
                {"text", n => { Text = n.GetStringValue(); } },
                {"thumbnail", n => { Thumbnail = n.GetObjectValue<ImageObject>(ImageObject.CreateFromDiscriminatorValue); } },
                {"webSearchUrl", n => { WebSearchUrl = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        /// </summary>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("text", Text);
            writer.WriteObjectValue<ImageObject>("thumbnail", Thumbnail);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}

using Microsoft.Kiota.Abstractions.Serialization;
using Nyt.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace Nyt.Reviews.Json {
    public class JsonResponse : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The copyright property</summary>
        public string Copyright { get; set; }
        /// <summary>The num_results property</summary>
        public int? Num_results { get; set; }
        /// <summary>The results property</summary>
        public List<Movie> Results { get; set; }
        /// <summary>The status property</summary>
        public string Status { get; set; }
        /// <summary>
        /// Instantiates a new jsonResponse and sets the default values.
        /// </summary>
        public JsonResponse() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static JsonResponse CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new JsonResponse();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"copyright", n => { Copyright = n.GetStringValue(); } },
                {"num_results", n => { Num_results = n.GetIntValue(); } },
                {"results", n => { Results = n.GetCollectionOfObjectValues<Movie>(Movie.CreateFromDiscriminatorValue)?.ToList(); } },
                {"status", n => { Status = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        /// </summary>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("copyright", Copyright);
            writer.WriteIntValue("num_results", Num_results);
            writer.WriteCollectionOfObjectValues<Movie>("results", Results);
            writer.WriteStringValue("status", Status);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}

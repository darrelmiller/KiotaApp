using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace Nyt.Models {
    public class Movie_multimedia_resource : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The height property</summary>
        public int? Height { get; set; }
        /// <summary>The src property</summary>
        public string Src { get; set; }
        /// <summary>The type property</summary>
        public string Type { get; set; }
        /// <summary>The width property</summary>
        public int? Width { get; set; }
        /// <summary>
        /// Instantiates a new Movie_multimedia_resource and sets the default values.
        /// </summary>
        public Movie_multimedia_resource() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static Movie_multimedia_resource CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Movie_multimedia_resource();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"height", n => { Height = n.GetIntValue(); } },
                {"src", n => { Src = n.GetStringValue(); } },
                {"type", n => { Type = n.GetStringValue(); } },
                {"width", n => { Width = n.GetIntValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        /// </summary>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteIntValue("height", Height);
            writer.WriteStringValue("src", Src);
            writer.WriteStringValue("type", Type);
            writer.WriteIntValue("width", Width);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}

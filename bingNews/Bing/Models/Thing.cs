using Bing.Models;
using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace Bing.Models {
    /// <summary>Defines a thing.</summary>
    public class Thing : Response, IParsable {
        /// <summary>An alias for the item</summary>
        public string AlternateName { get; private set; }
        /// <summary>An ID that uniquely identifies this item.</summary>
        public string BingId { get; private set; }
        /// <summary>A short description of the item.</summary>
        public string Description { get; private set; }
        /// <summary>Defines an image</summary>
        public ImageObject Image { get; set; }
        /// <summary>The name of the thing represented by this object.</summary>
        public string Name { get; private set; }
        /// <summary>The URL to get more information about the thing represented by this object.</summary>
        public string Url { get; private set; }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static new Thing CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            var mappingValue = parseNode.GetChildNode("_type")?.GetStringValue();
            return mappingValue switch {
                "Article" => new Article(),
                "CreativeWork" => new CreativeWork(),
                "ImageObject" => new ImageObject(),
                "MediaObject" => new MediaObject(),
                "NewsArticle" => new NewsArticle(),
                "NewsTopic" => new NewsTopic(),
                "Organization" => new Organization(),
                "VideoObject" => new VideoObject(),
                _ => new Thing(),
            };
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public new IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>>(base.GetFieldDeserializers()) {
                {"alternateName", n => { AlternateName = n.GetStringValue(); } },
                {"bingId", n => { BingId = n.GetStringValue(); } },
                {"description", n => { Description = n.GetStringValue(); } },
                {"image", n => { Image = n.GetObjectValue<ImageObject>(ImageObject.CreateFromDiscriminatorValue); } },
                {"name", n => { Name = n.GetStringValue(); } },
                {"url", n => { Url = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        /// </summary>
        public new void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            base.Serialize(writer);
            writer.WriteObjectValue<ImageObject>("image", Image);
        }
    }
}

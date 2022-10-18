using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace Bing.Models {
    /// <summary>Defines the error that occurred.</summary>
    public class Error : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The error code that identifies the category of error.</summary>
        public Error_code? Code { get; set; }
        /// <summary>A description of the error.</summary>
        public string Message { get; set; }
        /// <summary>A description that provides additional information about the error.</summary>
        public string MoreDetails { get; private set; }
        /// <summary>The parameter in the request that caused the error.</summary>
        public string Parameter { get; private set; }
        /// <summary>The error code that further helps to identify the error.</summary>
        public Error_subCode? SubCode { get; private set; }
        /// <summary>The parameter&apos;s value in the request that was not valid.</summary>
        public string Value { get; private set; }
        /// <summary>
        /// Instantiates a new Error and sets the default values.
        /// </summary>
        public Error() {
            AdditionalData = new Dictionary<string, object>();
            Code = Error_code.None;
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static Error CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Error();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"code", n => { Code = n.GetEnumValue<Error_code>(); } },
                {"message", n => { Message = n.GetStringValue(); } },
                {"moreDetails", n => { MoreDetails = n.GetStringValue(); } },
                {"parameter", n => { Parameter = n.GetStringValue(); } },
                {"subCode", n => { SubCode = n.GetEnumValue<Error_subCode>(); } },
                {"value", n => { Value = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        /// </summary>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteEnumValue<Error_code>("code", Code);
            writer.WriteStringValue("message", Message);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}

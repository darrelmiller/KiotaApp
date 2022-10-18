using Microsoft.Kiota.Abstractions;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Translate.Translate.Cheunh;
using Translate.Translate.Gungan;
using Translate.Translate.Huttese;
using Translate.Translate.Mandalorian;
using Translate.Translate.Sith;
using Translate.Translate.Yoda;
namespace Translate.Translate {
    /// <summary>Builds and executes requests for operations under \translate</summary>
    public class TranslateRequestBuilder {
        /// <summary>The cheunh property</summary>
        public CheunhRequestBuilder Cheunh { get =>
            new CheunhRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The gungan property</summary>
        public GunganRequestBuilder Gungan { get =>
            new GunganRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The huttese property</summary>
        public HutteseRequestBuilder Huttese { get =>
            new HutteseRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The mandalorian property</summary>
        public MandalorianRequestBuilder Mandalorian { get =>
            new MandalorianRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>Path parameters for the request</summary>
        private Dictionary<string, object> PathParameters { get; set; }
        /// <summary>The request adapter to use to execute the requests.</summary>
        private IRequestAdapter RequestAdapter { get; set; }
        /// <summary>The sith property</summary>
        public SithRequestBuilder Sith { get =>
            new SithRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>Url template to use to build the URL for the current request builder</summary>
        private string UrlTemplate { get; set; }
        /// <summary>The yoda property</summary>
        public YodaRequestBuilder Yoda { get =>
            new YodaRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>
        /// Instantiates a new TranslateRequestBuilder and sets the default values.
        /// <param name="pathParameters">Path parameters for the request</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        /// </summary>
        public TranslateRequestBuilder(Dictionary<string, object> pathParameters, IRequestAdapter requestAdapter) {
            _ = pathParameters ?? throw new ArgumentNullException(nameof(pathParameters));
            _ = requestAdapter ?? throw new ArgumentNullException(nameof(requestAdapter));
            UrlTemplate = "{+baseurl}/translate";
            var urlTplParams = new Dictionary<string, object>(pathParameters);
            PathParameters = urlTplParams;
            RequestAdapter = requestAdapter;
        }
        /// <summary>
        /// Instantiates a new TranslateRequestBuilder and sets the default values.
        /// <param name="rawUrl">The raw URL to use for the request builder.</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        /// </summary>
        public TranslateRequestBuilder(string rawUrl, IRequestAdapter requestAdapter) {
            if(string.IsNullOrEmpty(rawUrl)) throw new ArgumentNullException(nameof(rawUrl));
            _ = requestAdapter ?? throw new ArgumentNullException(nameof(requestAdapter));
            UrlTemplate = "{+baseurl}/translate";
            var urlTplParams = new Dictionary<string, object>();
            urlTplParams.Add("request-raw-url", rawUrl);
            PathParameters = urlTplParams;
            RequestAdapter = requestAdapter;
        }
    }
}

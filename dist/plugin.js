var capacitorVNPaySDKIntegrated = (function (exports, core) {
    'use strict';

    const VNPaySDKIntegrated = core.registerPlugin('VNPaySDKIntegrated', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.VNPaySDKIntegratedWeb()),
    });

    class VNPaySDKIntegratedWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        VNPaySDKIntegratedWeb: VNPaySDKIntegratedWeb
    });

    exports.VNPaySDKIntegrated = VNPaySDKIntegrated;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map

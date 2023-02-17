import { registerPlugin } from '@capacitor/core';
const VNPaySDKIntegrated = registerPlugin('VNPaySDKIntegrated', {
    web: () => import('./web').then(m => new m.VNPaySDKIntegratedWeb()),
});
export * from './definitions';
export { VNPaySDKIntegrated };
//# sourceMappingURL=index.js.map
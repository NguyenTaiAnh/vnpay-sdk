import { WebPlugin } from '@capacitor/core';
import type { VNPaySDKIntegratedPlugin } from './definitions';
export declare class VNPaySDKIntegratedWeb extends WebPlugin implements VNPaySDKIntegratedPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}

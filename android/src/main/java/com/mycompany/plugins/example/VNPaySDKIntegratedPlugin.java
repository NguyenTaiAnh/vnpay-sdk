package com.mycompany.plugins.example;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
//import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.NativePlugin;


//@CapacitorPlugin(name = "VNPaySDKIntegrated")
@NativePlugin(
  requestCodes = {123123}
)
public class VNPaySDKIntegratedPlugin extends Plugin {

    private VNPaySDKIntegrated implementation = new VNPaySDKIntegrated();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }
}

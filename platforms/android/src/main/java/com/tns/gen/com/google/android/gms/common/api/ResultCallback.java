package com.tns.gen.com.google.android.gms.common.api;

public class ResultCallback implements com.google.android.gms.common.api.ResultCallback {
	public ResultCallback() {
		com.tns.Runtime.initInstance(this);
	}

	public void onResult(com.google.android.gms.common.api.Result param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onResult", void.class, args);
	}

}

---
title: "MiniAudioContext.RawApi — Method: DeviceInitEx"
description: "Exact Method: DeviceInitEx contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.393d5bfdc715a5be
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeviceInitEx

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceInitEx`

<a id="api-9bb1f2c2dae865db"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceInitEx(Inno.Native.MiniAudio.MaBackend*,System.UInt32,Inno.Native.MiniAudio.MaContextConfig*,Inno.Native.MiniAudio.MaDeviceConfig*,Inno.Native.MiniAudio.MaDevice*) 95974f8a8b36fcf27a7dd4141e1d8e2538cf946cdc45103129377fc9a1087afc -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceInitEx(Inno.Native.MiniAudio.MaBackend* backends, uint backendCount, Inno.Native.MiniAudio.MaContextConfig* pContextConfig, Inno.Native.MiniAudio.MaDeviceConfig* pConfig, Inno.Native.MiniAudio.MaDevice* pDevice)
```

Initializes a device without a context, with extra parameters for controlling the configuration of the internal self-managed context.
This is the same as `ma_device_init()`, only instead of a context being passed in, the parameters from `ma_context_init()` are passed in instead. This function
allows you to configure the internally created context.

### Parameters

backends (in, optional)
A list of backends to try initializing, in priority order. Can be NULL, in which case it uses default priority order.
backendCount (in, optional)
The number of items in `backend`. Ignored if `backend` is NULL.
pContextConfig (in, optional)
The context configuration.
pConfig (in)
A pointer to the device configuration. Cannot be null. See remarks for details.
pDevice (out)
A pointer to the device object being initialized.

### Return Value

MA_SUCCESS if successful; any other error code otherwise.

### Thread Safety

Unsafe. It is not safe to call this function simultaneously for different devices because some backends depend on and mutate global state. The same applies to
calling this at the same time as `ma_device_uninit()`.

### Callback Safety

Unsafe. It is not safe to call this inside any callback.

### Remarks

You only need to use this function if you want to configure the context differently to its defaults. You should never use this function if you want to manage
your own context.
See the documentation for `ma_context_init()` for information on the different context configuration options.

### See Also

ma_device_init()
ma_device_uninit()
ma_device_config_init()
ma_context_init()

**Parameter `backends`:** Native parameter.

**Parameter `backendCount`:** Native parameter.

**Parameter `pContextConfig`:** Native parameter.

**Parameter `pConfig`:** Native parameter.

**Parameter `pDevice`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L14085).

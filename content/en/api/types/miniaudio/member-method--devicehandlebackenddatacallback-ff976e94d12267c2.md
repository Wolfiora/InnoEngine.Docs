---
title: "MiniAudioContext.RawApi — Method: DeviceHandleBackendDataCallback"
description: "Exact Method: DeviceHandleBackendDataCallback contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.ff976e94d12267c2
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeviceHandleBackendDataCallback

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceHandleBackendDataCallback`

<a id="api-4f3d944118c04110"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceHandleBackendDataCallback(Inno.Native.MiniAudio.MaDevice*,System.Void*,System.Void*,System.UInt32) 0db076d9def6cfb1b53264bf473c7834dc98752eec7abdee8b80141fd6cefaae -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceHandleBackendDataCallback(Inno.Native.MiniAudio.MaDevice* pDevice, void* pOutput, void* pInput, uint frameCount)
```

Called from the data callback of asynchronous backends to allow miniaudio to process the data and fire the miniaudio data callback.

### Parameters

pDevice (in)
A pointer to device whose processing the data callback.
pOutput (out)
A pointer to the buffer that will receive the output PCM frame data. On a playback device this must not be NULL. On a duplex device
this can be NULL, in which case pInput must not be NULL.
pInput (in)
A pointer to the buffer containing input PCM frame data. On a capture device this must not be NULL. On a duplex device this can be
NULL, in which case `pOutput` must not be NULL.
frameCount (in)
The number of frames being processed.

### Return Value

MA_SUCCESS if successful; any other result code otherwise.

### Thread Safety

This function should only ever be called from the internal data callback of the backend. It is safe to call this simultaneously between a
playback and capture device in duplex setups.

### Callback Safety

Do not call this from the miniaudio data callback. It should only ever be called from the internal data callback of the backend.

### Remarks

If both `pOutput` and `pInput` are NULL, and error will be returned. In duplex scenarios, both `pOutput` and `pInput` can be non-NULL, in
which case `pInput` will be processed first, followed by `pOutput`.
If you are implementing a custom backend, and that backend uses a callback for data delivery, you'll need to call this from inside that
callback.

**Parameter `pDevice`:** Native parameter.

**Parameter `pOutput`:** Native parameter.

**Parameter `pInput`:** Native parameter.

**Parameter `frameCount`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L10301).

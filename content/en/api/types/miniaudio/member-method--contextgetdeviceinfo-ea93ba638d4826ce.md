---
title: "MiniAudioContext.RawApi — Method: ContextGetDeviceInfo"
description: "Exact Method: ContextGetDeviceInfo contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.ea93ba638d4826ce
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ContextGetDeviceInfo

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ContextGetDeviceInfo`

<a id="api-2109dc7a15db6734"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextGetDeviceInfo(Inno.Native.MiniAudio.MaContext*,Inno.Native.MiniAudio.MaDeviceType,Inno.Native.MiniAudio.MaDeviceId*,Inno.Native.MiniAudio.MaDeviceInfo*) b2f0017e7f309923f622c60899cc1096571cb43844321b486f6e76d7d7c274f6 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextGetDeviceInfo(Inno.Native.MiniAudio.MaContext* pContext, Inno.Native.MiniAudio.MaDeviceType deviceType, Inno.Native.MiniAudio.MaDeviceId* pDeviceID, Inno.Native.MiniAudio.MaDeviceInfo* pDeviceInfo)
```

Retrieves information about a device of the given type, with the specified ID and share mode.

### Parameters

pContext (in)
A pointer to the context performing the query.
deviceType (in)
The type of the device being queried. Must be either `ma_device_type_playback` or `ma_device_type_capture`.
pDeviceID (in)
The ID of the device being queried.
pDeviceInfo (out)
A pointer to the `ma_device_info` structure that will receive the device information.

### Return Value

MA_SUCCESS if successful; any other error code otherwise.

### Thread Safety

Safe. This is guarded using a simple mutex lock.

### Remarks

Do _not_ call this from within the `ma_context_enumerate_devices()` callback.
It's possible for a device to have different information and capabilities depending on whether or not it's opened in shared or exclusive mode. For example, in
shared mode, WASAPI always uses floating point samples for mixing, but in exclusive mode it can be anything. Therefore, this function allows you to specify
which share mode you want information for. Note that not all backends and devices support shared or exclusive mode, in which case this function will fail if
the requested share mode is unsupported.
This leaves pDeviceInfo unmodified in the result of an error.

**Parameter `pContext`:** Native parameter.

**Parameter `deviceType`:** Native parameter.

**Parameter `pDeviceID`:** Native parameter.

**Parameter `pDeviceInfo`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L14777).

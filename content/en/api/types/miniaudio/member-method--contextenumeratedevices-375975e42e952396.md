---
title: "MiniAudioContext.RawApi — Method: ContextEnumerateDevices"
description: "Exact Method: ContextEnumerateDevices contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.375975e42e952396
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ContextEnumerateDevices

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ContextEnumerateDevices`

<a id="api-63bc11fe75bd1b07"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextEnumerateDevices(Inno.Native.MiniAudio.MaContext*,,System.Void*) bf3f4416bd970306a56ebf4a69e9a85cc42b08c5f497686091e60eb17f250cce -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextEnumerateDevices(Inno.Native.MiniAudio.MaContext* pContext, delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaContext*, Inno.Native.MiniAudio.MaDeviceType, Inno.Native.MiniAudio.MaDeviceInfo*, void*, uint> callback, void* pUserData)
```

Enumerates over every device (both playback and capture).
This is a lower-level enumeration function to the easier to use `ma_context_get_devices()`. Use `ma_context_enumerate_devices()` if you would rather not incur
an internal heap allocation, or it simply suits your code better.
Note that this only retrieves the ID and name/description of the device. The reason for only retrieving basic information is that it would otherwise require
opening the backend device in order to probe it for more detailed information which can be inefficient. Consider using `ma_context_get_device_info()` for this,
but don't call it from within the enumeration callback.
Returning false from the callback will stop enumeration. Returning true will continue enumeration.

### Parameters

pContext (in)
A pointer to the context performing the enumeration.
callback (in)
The callback to fire for each enumerated device.
pUserData (in)
A pointer to application-defined data passed to the callback.

### Return Value

MA_SUCCESS if successful; any other error code otherwise.

### Thread Safety

Safe. This is guarded using a simple mutex lock.

### Remarks

Do _not_ assume the first enumerated device of a given type is the default device.
Some backends and platforms may only support default playback and capture devices.
In general, you should not do anything complicated from within the callback. In particular, do not try initializing a device from within the callback. Also,
do not try to call `ma_context_get_device_info()` from within the callback.
Consider using `ma_context_get_devices()` for a simpler and safer API, albeit at the expense of an internal heap allocation.

### Example 1 - Simple Enumeration

ma_bool32 ma_device_enum_callback(ma_context* pContext, ma_device_type deviceType, const ma_device_info* pInfo, void* pUserData)
{
printf("Device Name: %s\n", pInfo->name);
return MA_TRUE;
}
ma_result result = ma_context_enumerate_devices(
&context
, my_device_enum_callback, pMyUserData);
if (result != MA_SUCCESS) {
// Error.
}

### See Also

ma_context_get_devices()

**Parameter `pContext`:** Native parameter.

**Parameter `callback`:** Native parameter.

**Parameter `pUserData`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L10042).

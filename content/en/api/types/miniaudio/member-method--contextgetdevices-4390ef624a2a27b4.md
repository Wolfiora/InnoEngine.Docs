---
title: "MiniAudioContext.RawApi — Method: ContextGetDevices"
description: "Exact Method: ContextGetDevices contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.4390ef624a2a27b4
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ContextGetDevices

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ContextGetDevices`

<a id="api-b4c714cc2ff6c454"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextGetDevices(Inno.Native.MiniAudio.MaContext*,Inno.Native.MiniAudio.MaDeviceInfo**,System.UInt32*,Inno.Native.MiniAudio.MaDeviceInfo**,System.UInt32*) fbe327bd332db2a2ed58939746d672e5f80ef4115169d52dacd57cd9b1a5d9fc -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextGetDevices(Inno.Native.MiniAudio.MaContext* pContext, Inno.Native.MiniAudio.MaDeviceInfo** ppPlaybackDeviceInfos, uint* pPlaybackDeviceCount, Inno.Native.MiniAudio.MaDeviceInfo** ppCaptureDeviceInfos, uint* pCaptureDeviceCount)
```

Retrieves basic information about every active playback and/or capture device.
This function will allocate memory internally for the device lists and return a pointer to them through the `ppPlaybackDeviceInfos` and `ppCaptureDeviceInfos`
parameters. If you do not want to incur the overhead of these allocations consider using `ma_context_enumerate_devices()` which will instead use a callback.
Note that this only retrieves the ID and name/description of the device. The reason for only retrieving basic information is that it would otherwise require
opening the backend device in order to probe it for more detailed information which can be inefficient. Consider using `ma_context_get_device_info()` for this,
but don't call it from within the enumeration callback.

### Parameters

pContext (in)
A pointer to the context performing the enumeration.
ppPlaybackDeviceInfos (out)
A pointer to a pointer that will receive the address of a buffer containing the list of `ma_device_info` structures for playback devices.
pPlaybackDeviceCount (out)
A pointer to an unsigned integer that will receive the number of playback devices.
ppCaptureDeviceInfos (out)
A pointer to a pointer that will receive the address of a buffer containing the list of `ma_device_info` structures for capture devices.
pCaptureDeviceCount (out)
A pointer to an unsigned integer that will receive the number of capture devices.

### Return Value

MA_SUCCESS if successful; any other error code otherwise.

### Thread Safety

Unsafe. Since each call to this function invalidates the pointers from the previous call, you should not be calling this simultaneously across multiple
threads. Instead, you need to make a copy of the returned data with your own higher level synchronization.

### Remarks

It is _not_ safe to assume the first device in the list is the default device.
You can pass in NULL for the playback or capture lists in which case they'll be ignored.
The returned pointers will become invalid upon the next call this this function, or when the context is uninitialized. Do not free the returned pointers.

### See Also

ma_context_enumerate_devices()

**Parameter `pContext`:** Native parameter.

**Parameter `ppPlaybackDeviceInfos`:** Native parameter.

**Parameter `pPlaybackDeviceCount`:** Native parameter.

**Parameter `ppCaptureDeviceInfos`:** Native parameter.

**Parameter `pCaptureDeviceCount`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L15863).

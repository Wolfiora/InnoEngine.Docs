---
title: "MiniAudioContext.RawApi — Method: DeviceGetName"
description: "Exact Method: DeviceGetName contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.d9d6664fbce99be0
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeviceGetName

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceGetName`

<a id="api-e316c4016e9495d3"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceGetName(Inno.Native.MiniAudio.MaDevice*,Inno.Native.MiniAudio.MaDeviceType,System.SByte*,System.UInt64,System.UInt64*) 41325949f1b659d9861849e240d04a7868a457bf10032b9f9ddd88bd7d0057e1 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceGetName(Inno.Native.MiniAudio.MaDevice* pDevice, Inno.Native.MiniAudio.MaDeviceType type, sbyte* pName, ulong nameCap, ulong* pLengthNotIncludingNullTerminator)
```

Retrieves the name of the device.

### Parameters

pDevice (in)
A pointer to the device whose information is being retrieved.
type (in)
The device type. This parameter is required for duplex devices. When retrieving device
information, you are doing so for an individual playback or capture device.
pName (out)
A pointer to the buffer that will receive the name.
nameCap (in)
The capacity of the output buffer, including space for the null terminator.
pLengthNotIncludingNullTerminator (out, optional)
A pointer to the variable that will receive the length of the name, not including the null
terminator.

### Return Value

MA_SUCCESS if successful; any other error code otherwise.

### Thread Safety

Unsafe. This should be considered unsafe because it may be calling into the backend which may or
may not be safe.

### Callback Safety

Unsafe. You should avoid calling this in the data callback because it may call into the backend
which may or may not be safe.

### Remarks

If the name does not fully fit into the output buffer, it'll be truncated. You can pass in NULL to
`pName` if you want to first get the length of the name for the purpose of memory allocation of the
output buffer. Allocating a buffer of size `MA_MAX_DEVICE_NAME_LENGTH + 1` should be enough for
most cases and will avoid the need for the inefficiency of calling this function twice.
This is implemented in terms of `ma_device_get_info()`.

**Parameter `pDevice`:** Native parameter.

**Parameter `type`:** Native parameter.

**Parameter `pName`:** Native parameter.

**Parameter `nameCap`:** Native parameter.

**Parameter `pLengthNotIncludingNullTerminator`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L9284).

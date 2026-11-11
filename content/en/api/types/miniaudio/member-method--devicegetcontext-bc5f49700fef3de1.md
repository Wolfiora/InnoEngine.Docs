---
title: "MiniAudioContext.RawApi — Method: DeviceGetContext"
description: "Exact Method: DeviceGetContext contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.bc5f49700fef3de1
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeviceGetContext

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceGetContext`

<a id="api-3b5a9b986cd63949"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceGetContext(Inno.Native.MiniAudio.MaDevice*) 62557e444bd06beb73223d94451d5d025ddf739e84d99cb82cada88f48a66bd0 -->

```csharp
public Inno.Native.MiniAudio.MaContext* Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceGetContext(Inno.Native.MiniAudio.MaDevice* pDevice)
```

Retrieves a pointer to the context that owns the given device.

**Parameter `pDevice`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L8261).

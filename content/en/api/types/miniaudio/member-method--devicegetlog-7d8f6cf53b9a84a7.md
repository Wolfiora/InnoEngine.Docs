---
title: "MiniAudioContext.RawApi — Method: DeviceGetLog"
description: "Exact Method: DeviceGetLog contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.7d8f6cf53b9a84a7
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeviceGetLog

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceGetLog`

<a id="api-0c5f3adcb6e0f05b"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceGetLog(Inno.Native.MiniAudio.MaDevice*) b6ca7660a2700c5bab4f762ccdc504f4c1f967799258e60d9ba41131cdcd0c02 -->

```csharp
public Inno.Native.MiniAudio.MaLog* Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceGetLog(Inno.Native.MiniAudio.MaDevice* pDevice)
```

Helper function for retrieving the log object associated with the context that owns this device.

**Parameter `pDevice`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L13010).

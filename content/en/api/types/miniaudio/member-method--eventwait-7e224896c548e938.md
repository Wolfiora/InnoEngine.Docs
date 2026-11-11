---
title: "MiniAudioContext.RawApi — Method: EventWait"
description: "Exact Method: EventWait contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.7e224896c548e938
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: EventWait

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EventWait`

<a id="api-1cf19aaa06a0aeac"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.EventWait(System.Void**) d8d185d37305caeaa2a0a1de98ff52eec2ee0f6c111197b5f69fb0fef3a949b0 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.EventWait(void** pEvent)
```

Waits for the specified auto-reset event to become signalled.

**Parameter `pEvent`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L15687).

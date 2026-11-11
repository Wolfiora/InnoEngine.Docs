---
title: "MiniAudioContext.RawApi — Method: GetBackendFromName"
description: "Exact Method: GetBackendFromName contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.d0fb3b2b7950ed8f
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: GetBackendFromName

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetBackendFromName`

<a id="api-61411ee4b50ee4ba"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.GetBackendFromName(System.SByte*,Inno.Native.MiniAudio.MaBackend*) aaf8532fb3ae66ee7191228461171e839e33aa5f10090e3a20b5e782fe558ca8 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.GetBackendFromName(sbyte* pBackendName, Inno.Native.MiniAudio.MaBackend* pBackend)
```

Retrieves the backend enum from the given name.

**Parameter `pBackendName`:** Native parameter.

**Parameter `pBackend`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L10446).

---
title: "MiniAudioContext.RawApi — Method: Version"
description: "Exact Method: Version contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.640d47339ee6fcbb
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: Version

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Version`

<a id="api-33443cced328825c"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.Version(System.UInt32*,System.UInt32*,System.UInt32*) 611e3379719f498c7131be41e1e08c4a437551cb76f6840ee61837947b76c69e -->

```csharp
public void Inno.Native.MiniAudio.MiniAudioContext.RawApi.Version(uint* pMajor, uint* pMinor, uint* pRevision)
```

Retrieves the version of miniaudio as separated integers. Each component can be NULL if it's not required.

**Parameter `pMajor`:** Native parameter.

**Parameter `pMinor`:** Native parameter.

**Parameter `pRevision`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L11095).

---
title: "MiniAudioContext.RawApi — Method: AlignedFree"
description: "Exact Method: AlignedFree contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.32be838d40249002
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: AlignedFree

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AlignedFree`

<a id="api-04949d5e60c2cd33"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.AlignedFree(System.Void*,Inno.Native.MiniAudio.MaAllocationCallbacks*) 7295ecf55ec2a95887a0449990e2b015b25b5b4f8f6de060644b4d7b56f7cb05 -->

```csharp
public void Inno.Native.MiniAudio.MiniAudioContext.RawApi.AlignedFree(void* p, Inno.Native.MiniAudio.MaAllocationCallbacks* pAllocationCallbacks)
```

Free's an aligned malloc'd buffer.

**Parameter `p`:** Native parameter.

**Parameter `pAllocationCallbacks`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L8806).

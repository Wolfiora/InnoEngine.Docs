---
title: "MiniAudioContext.RawApi — Method: AlignedMalloc"
description: "Exact Method: AlignedMalloc contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.21ec10bf60cc4b2f
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: AlignedMalloc

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AlignedMalloc`

<a id="api-5626436d37454a9d"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.AlignedMalloc(System.UInt64,System.UInt64,Inno.Native.MiniAudio.MaAllocationCallbacks*) c316d0c1fa74521ead731e6e9ee43c01a7304781f0e3229a4d59f515f542d10e -->

```csharp
public void* Inno.Native.MiniAudio.MiniAudioContext.RawApi.AlignedMalloc(ulong sz, ulong alignment, Inno.Native.MiniAudio.MaAllocationCallbacks* pAllocationCallbacks)
```

Performs an aligned malloc, with the assumption that the alignment is a power of 2.

**Parameter `sz`:** Native parameter.

**Parameter `alignment`:** Native parameter.

**Parameter `pAllocationCallbacks`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16169).

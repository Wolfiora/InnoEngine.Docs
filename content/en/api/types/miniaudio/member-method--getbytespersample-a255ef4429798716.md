---
title: "MiniAudioContext.RawApi — Method: GetBytesPerSample"
description: "Exact Method: GetBytesPerSample contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.a255ef4429798716
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: GetBytesPerSample

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetBytesPerSample`

<a id="api-b607988f32e98f8c"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.GetBytesPerSample(Inno.Native.MiniAudio.MaFormat) ce2ac20657c3a82edd30f1642ed85b574cc085536846c298e9036358166079e1 -->

```csharp
public uint Inno.Native.MiniAudio.MiniAudioContext.RawApi.GetBytesPerSample(Inno.Native.MiniAudio.MaFormat format)
```

Retrieves the size of a sample in bytes for the given format.
This API is efficient and is implemented using a lookup table.
Thread Safety: SAFE
This API is pure.

**Parameter `format`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L11755).

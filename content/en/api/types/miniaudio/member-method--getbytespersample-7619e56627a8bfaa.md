---
title: "MiniAudioContext — Method: GetBytesPerSample"
description: "Exact Method: GetBytesPerSample contracts in MiniAudioContext."
uid: api.inno.native.miniaudio.7619e56627a8bfaa
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.f90eae4c1a703608#type-declaration
---
# `MiniAudioContext`: Method: GetBytesPerSample

Read these exact member contracts together with the [containing type](miniaudiocontext.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetBytesPerSample`

<a id="api-3fa4b5d09061234c"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.GetBytesPerSample(Inno.Native.MiniAudio.MaFormat) dd70058585318e6e924b5dff37ad5179b77bdf267ca78521864c80cd0b3495d7 -->

```csharp
public uint Inno.Native.MiniAudio.MiniAudioContext.GetBytesPerSample(Inno.Native.MiniAudio.MaFormat format)
```

Retrieves the size of a sample in bytes for the given format.
This API is efficient and is implemented using a lookup table.
Thread Safety: SAFE
This API is pure.

**Parameter `format`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L6507).

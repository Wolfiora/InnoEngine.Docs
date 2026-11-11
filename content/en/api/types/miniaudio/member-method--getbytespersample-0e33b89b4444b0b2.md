---
title: "MiniAudio — Method: GetBytesPerSample"
description: "Exact Method: GetBytesPerSample contracts in MiniAudio."
uid: api.inno.native.miniaudio.0e33b89b4444b0b2
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.51696dd28a5dbd8b#type-declaration
---
# `MiniAudio`: Method: GetBytesPerSample

Read these exact member contracts together with the [containing type](miniaudio.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetBytesPerSample`

<a id="api-245f9cabee12bd3d"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudio.GetBytesPerSample(Inno.Native.MiniAudio.MaFormat) cd93d4711a76ebf9559da7c70915d4a03db38ecea526b7217dc49c6708277c04 -->

```csharp
public static uint Inno.Native.MiniAudio.MiniAudio.GetBytesPerSample(Inno.Native.MiniAudio.MaFormat format)
```

Retrieves the size of a sample in bytes for the given format.
This API is efficient and is implemented using a lookup table.
Thread Safety: SAFE
This API is pure.

**Parameter `format`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L173).

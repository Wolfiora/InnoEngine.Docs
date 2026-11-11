---
title: "MiniAudioContext — Method: ContextSizeof"
description: "Exact Method: ContextSizeof contracts in MiniAudioContext."
uid: api.inno.native.miniaudio.65165cc74c3ea31e
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.f90eae4c1a703608#type-declaration
---
# `MiniAudioContext`: Method: ContextSizeof

Read these exact member contracts together with the [containing type](miniaudiocontext.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ContextSizeof`

<a id="api-8a4760290b326866"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.ContextSizeof f32492bf2ff93f4d477fb642366732144a2587839fc82584b643d791a12519b7 -->

```csharp
public ulong Inno.Native.MiniAudio.MiniAudioContext.ContextSizeof()
```

Retrieves the size of the ma_context object.
This is mainly for the purpose of bindings to know how much memory to allocate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L6600).

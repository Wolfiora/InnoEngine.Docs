---
title: "MiniAudioContext — Method: ContextConfigInit"
description: "Exact Method: ContextConfigInit contracts in MiniAudioContext."
uid: api.inno.native.miniaudio.691d6dbb1a4cc3a8
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.f90eae4c1a703608#type-declaration
---
# `MiniAudioContext`: Method: ContextConfigInit

Read these exact member contracts together with the [containing type](miniaudiocontext.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ContextConfigInit`

<a id="api-98d4165b760feb05"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.ContextConfigInit bf7ad39902cce103c5cd407f7971d9c3cbcac0fa1c1cc85ddcd76f074a56f8f1 -->

```csharp
public Inno.Native.MiniAudio.MaContextConfig Inno.Native.MiniAudio.MiniAudioContext.ContextConfigInit()
```

Initializes a `ma_context_config` object.

### Return Value

A `ma_context_config` initialized to defaults.

### Remarks

You must always use this to initialize the default state of the `ma_context_config` object. Not using this will result in your program breaking when miniaudio
is updated and new members are added to `ma_context_config`. It also sets logical defaults.
You can override members of the returned object by changing it's members directly.

### See Also

ma_context_init()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L6484).

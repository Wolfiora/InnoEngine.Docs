---
title: "MiniAudio — Method: ContextConfigInit"
description: "Exact Method: ContextConfigInit contracts in MiniAudio."
uid: api.inno.native.miniaudio.b2d9d8f016c8deff
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.51696dd28a5dbd8b#type-declaration
---
# `MiniAudio`: Method: ContextConfigInit

Read these exact member contracts together with the [containing type](miniaudio.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ContextConfigInit`

<a id="api-1168ea104c6962e9"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudio.ContextConfigInit 08cdd85e8b3bc73bc8c4f85a831dca4e538ad0c82d39f9ab59c0753a0fa9db4f -->

```csharp
public static Inno.Native.MiniAudio.MaContextConfig Inno.Native.MiniAudio.MiniAudio.ContextConfigInit()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L163).

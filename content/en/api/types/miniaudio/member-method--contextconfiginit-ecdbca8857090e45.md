---
title: "MiniAudioContext.RawApi — Method: ContextConfigInit"
description: "Exact Method: ContextConfigInit contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.ecdbca8857090e45
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ContextConfigInit

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ContextConfigInit`

<a id="api-dd84d0e4092fb030"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextConfigInit(Inno.Native.MiniAudio.MaContextConfig*) f9e05a126b97745f910eeee123e8cf3a630f03e9333568c0b91ddd35fc23e6a0 -->

```csharp
public void Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextConfigInit(Inno.Native.MiniAudio.MaContextConfig* bgcs_result)
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

**Parameter `bgcs_result`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L11738).

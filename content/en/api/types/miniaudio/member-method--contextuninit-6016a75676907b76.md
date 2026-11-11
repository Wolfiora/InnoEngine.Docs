---
title: "MiniAudioContext.RawApi — Method: ContextUninit"
description: "Exact Method: ContextUninit contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.6016a75676907b76
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ContextUninit

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ContextUninit`

<a id="api-66ac63519cb2fe64"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextUninit(Inno.Native.MiniAudio.MaContext*) 3a43f3b548c9c31338d0883f37246bbca2b9cbd8e64f275b02fe306d6fda8dc8 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextUninit(Inno.Native.MiniAudio.MaContext* pContext)
```

Uninitializes a context.

### Return Value

MA_SUCCESS if successful; any other error code otherwise.

### Thread Safety

Unsafe. Do not call this function across multiple threads as some backends read and write to global state.

### Remarks

Results are undefined if you call this while any device created by this context is still active.

### See Also

ma_context_init()

**Parameter `pContext`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16085).

---
title: "MiniAudioContext.RawApi — Method: ContextGetLog"
description: "Exact Method: ContextGetLog contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.614d1cd181c0cc1f
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ContextGetLog

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ContextGetLog`

<a id="api-ed569bf2b816e494"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextGetLog(Inno.Native.MiniAudio.MaContext*) 39d6709ef2b647d26d1f4bc16675c1bf3118a28516193bc3f928571dfcdff37d -->

```csharp
public Inno.Native.MiniAudio.MaLog* Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextGetLog(Inno.Native.MiniAudio.MaContext* pContext)
```

Retrieves a pointer to the log object associated with this context.

### Remarks

Pass the returned pointer to `ma_log_post()`, `ma_log_postv()` or `ma_log_postf()` to post a log
message.
You can attach your own logging callback to the log with `ma_log_register_callback()`

### Return Value

A pointer to the `ma_log` object that the context uses to post log messages. If some error occurs,
NULL will be returned.

**Parameter `pContext`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L15374).

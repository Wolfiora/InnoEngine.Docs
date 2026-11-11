---
title: "MiniAudioContext.RawApi — Method: MutexInit"
description: "Exact Method: MutexInit contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.24879b4a0075dc52
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: MutexInit

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MutexInit`

<a id="api-86ee1e3ab6fabc75"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.MutexInit(System.Void**) 97a5f1f282545ddc951e616e13dd358ef4ed981cc80d8b70013b105e7bf04c89 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.MutexInit(void** pMutex)
```

Creates a mutex.
A mutex must be created from a valid context. A mutex is initially unlocked.

**Parameter `pMutex`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L8276).

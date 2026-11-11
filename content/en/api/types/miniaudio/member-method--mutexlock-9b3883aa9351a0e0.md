---
title: "MiniAudioContext.RawApi — Method: MutexLock"
description: "Exact Method: MutexLock contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.9b3883aa9351a0e0
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: MutexLock

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MutexLock`

<a id="api-a2512a3a967dae78"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.MutexLock(System.Void**) 6a1660000bcbc74b75fdf8bc10630b0cb75181ccf90ef3813ac04ba189638462 -->

```csharp
public void Inno.Native.MiniAudio.MiniAudioContext.RawApi.MutexLock(void** pMutex)
```

Locks a mutex with an infinite timeout.

**Parameter `pMutex`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L8387).

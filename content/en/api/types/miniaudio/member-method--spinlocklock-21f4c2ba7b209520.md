---
title: "MiniAudioContext.RawApi — Method: SpinlockLock"
description: "Exact Method: SpinlockLock contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.21f4c2ba7b209520
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: SpinlockLock

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SpinlockLock`

<a id="api-756a83ad427f9372"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.SpinlockLock(System.UInt32*) 9a22e75cf87c25dbfa58ca02637a70f524fae5dee1dc191b127ac8fcb865a266 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.SpinlockLock(uint* pSpinlock)
```

**********************************************************************************************************************************************************
Synchronization
**********************************************************************************************************************************************************
Locks a spinlock.

**Parameter `pSpinlock`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L14612).

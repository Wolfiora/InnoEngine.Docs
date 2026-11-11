---
title: "MiniAudioContext.RawApi — Method: SpinlockLockNoyield"
description: "Exact Method: SpinlockLockNoyield contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.f41fa01ab2de154e
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: SpinlockLockNoyield

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SpinlockLockNoyield`

<a id="api-f55c00d7904be51b"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.SpinlockLockNoyield(System.UInt32*) e75aa2955da296fd8b6b44d5f53698bc04b43b7a4d1d6fd5c92e89719cde3285 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.SpinlockLockNoyield(uint* pSpinlock)
```

Locks a spinlock, but does not yield() when looping.

**Parameter `pSpinlock`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L11229).

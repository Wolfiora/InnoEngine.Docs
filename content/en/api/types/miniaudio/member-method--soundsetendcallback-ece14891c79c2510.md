---
title: "MiniAudioContext.RawApi — Method: SoundSetEndCallback"
description: "Exact Method: SoundSetEndCallback contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.ece14891c79c2510
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: SoundSetEndCallback

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SoundSetEndCallback`

<a id="api-18e4ea98ae60bada"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.SoundSetEndCallback(Inno.Native.MiniAudio.MaSound*,,System.Void*) 7185568b93a63fe25fadde6a5e3a84e8f9833d6b973205ed8524566d0250f641 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.SoundSetEndCallback(Inno.Native.MiniAudio.MaSound* pSound, delegate* unmanaged[Cdecl]<void*, Inno.Native.MiniAudio.MaSound*, void> callback, void* pUserData)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L15727).

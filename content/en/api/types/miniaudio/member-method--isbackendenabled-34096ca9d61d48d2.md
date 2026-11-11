---
title: "MiniAudioContext — Method: IsBackendEnabled"
description: "Exact Method: IsBackendEnabled contracts in MiniAudioContext."
uid: api.inno.native.miniaudio.34096ca9d61d48d2
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.f90eae4c1a703608#type-declaration
---
# `MiniAudioContext`: Method: IsBackendEnabled

Read these exact member contracts together with the [containing type](miniaudiocontext.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsBackendEnabled`

<a id="api-cae44cdc02f107d4"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.IsBackendEnabled(Inno.Native.MiniAudio.MaBackend) e9bedcb08ad1f520805688d074c68f6e140e04ea08ef9c2548e94fc09636b4b0 -->

```csharp
public uint Inno.Native.MiniAudio.MiniAudioContext.IsBackendEnabled(Inno.Native.MiniAudio.MaBackend backend)
```

Determines whether or not the given backend is available by the compilation environment.

**Parameter `backend`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L6015).

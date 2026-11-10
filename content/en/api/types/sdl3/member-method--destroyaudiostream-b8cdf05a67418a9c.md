---
title: "SDLContext.RawApi — Method: DestroyAudioStream"
description: "Exact Method: DestroyAudioStream contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b8cdf05a67418a9c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyAudioStream

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyAudioStream`

<a id="api-3f5a338406874ba4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyAudioStream(Inno.Native.Sdl3.SDLAudioStream*) 60f23a7fcb32d8d0cfbd42281f56e7a4fd0feff9cc704228866454cf8bd20d9c -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroyAudioStream(Inno.Native.Sdl3.SDLAudioStream* stream)
```

Free an audio stream.
This will release all allocated data, including any audio that is still
queued. You do not need to manually clear the stream first.
If this stream was bound to an audio device, it is unbound during this
call. If this stream was created with SDL_OpenAudioDeviceStream, the audio
device that was opened alongside this stream's creation will be closed,
too.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateAudioStream

**Parameter `stream`:** the audio stream to destroy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18271).

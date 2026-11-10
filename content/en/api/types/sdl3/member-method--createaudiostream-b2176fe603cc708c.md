---
title: "SDLContext.RawApi — Method: CreateAudioStream"
description: "Exact Method: CreateAudioStream contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b2176fe603cc708c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateAudioStream

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateAudioStream`

<a id="api-547df2be52e0f7d5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateAudioStream(Inno.Native.Sdl3.SDLAudioSpec*,Inno.Native.Sdl3.SDLAudioSpec*) 32b72834edd3bb36fc3e60cf79cf0fb5fb77df4a5531cba6d77ec54f249736a9 -->

```csharp
public Inno.Native.Sdl3.SDLAudioStream* Inno.Native.Sdl3.SDLContext.RawApi.CreateAudioStream(Inno.Native.Sdl3.SDLAudioSpec* src_spec, Inno.Native.Sdl3.SDLAudioSpec* dst_spec)
```

Create a new audio stream.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PutAudioStreamData

**See also:** SDL_GetAudioStreamData

**See also:** SDL_GetAudioStreamAvailable

**See also:** SDL_FlushAudioStream

**See also:** SDL_ClearAudioStream

**See also:** SDL_SetAudioStreamFormat

**See also:** SDL_DestroyAudioStream

**Parameter `src_spec`:** the format details of the input audio.

**Parameter `dst_spec`:** the format details of the output audio.

**Returns:** a new audio stream on success or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44044).

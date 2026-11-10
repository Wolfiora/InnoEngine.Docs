---
title: "SDLContext.RawApi — Method: GetAudioStreamFormat"
description: "Exact Method: GetAudioStreamFormat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.02a704d76808a0f2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAudioStreamFormat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioStreamFormat`

<a id="api-1aa3c266f60081e1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamFormat(Inno.Native.Sdl3.SDLAudioStream*,Inno.Native.Sdl3.SDLAudioSpec*,Inno.Native.Sdl3.SDLAudioSpec*) 85653f06e6ad848dd56ba5cea245d2fc9895a5c43c2af390be8501dab1c2e728 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamFormat(Inno.Native.Sdl3.SDLAudioStream* stream, Inno.Native.Sdl3.SDLAudioSpec* src_spec, Inno.Native.Sdl3.SDLAudioSpec* dst_spec)
```

Query the current format of an audio stream.

**Thread safety:** It is safe to call this function from any thread, as it holds
a stream-specific mutex while running.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetAudioStreamFormat

**Parameter `stream`:** the SDL_AudioStream to query.

**Parameter `src_spec`:** where to store the input audio format; ignored if NULL.

**Parameter `dst_spec`:** where to store the output audio format; ignored if NULL.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46040).

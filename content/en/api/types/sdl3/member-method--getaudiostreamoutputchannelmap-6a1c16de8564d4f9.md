---
title: "SDLContext.RawApi — Method: GetAudioStreamOutputChannelMap"
description: "Exact Method: GetAudioStreamOutputChannelMap contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6a1c16de8564d4f9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAudioStreamOutputChannelMap

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioStreamOutputChannelMap`

<a id="api-ac87e0ccc2510317"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamOutputChannelMap(Inno.Native.Sdl3.SDLAudioStream*,System.Int32*) 23c6c0087012414ecc0dc7eb61a4d956f39a5b5aae1c2faa30ebe4993d1f687b -->

```csharp
public int* Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamOutputChannelMap(Inno.Native.Sdl3.SDLAudioStream* stream, int* count)
```

Get the current output channel map of an audio stream.
Channel maps are optional; most things do not need them, instead passing
data in the [order that SDL expects](https://wiki.libsdl.org/SDL3/CategoryAudio#channel-layouts).
Audio streams default to no remapping applied. This is represented by
returning NULL, and does not signify an error.

**Thread safety:** It is safe to call this function from any thread, as it holds
a stream-specific mutex while running.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetAudioStreamInputChannelMap

**Parameter `stream`:** the SDL_AudioStream to query.

**Parameter `count`:** On output, set to number of channels in the map. Can be NULL.

**Returns:** an array of the current channel mapping, with as many elements as
the current output spec's channels, or NULL if default. This
should be freed with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25197).

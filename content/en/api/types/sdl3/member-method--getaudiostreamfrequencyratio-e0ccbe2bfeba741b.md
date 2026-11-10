---
title: "SDLContext.RawApi — Method: GetAudioStreamFrequencyRatio"
description: "Exact Method: GetAudioStreamFrequencyRatio contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e0ccbe2bfeba741b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAudioStreamFrequencyRatio

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioStreamFrequencyRatio`

<a id="api-a5286e1ce3c378ca"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamFrequencyRatio(Inno.Native.Sdl3.SDLAudioStream*) c398e04e4514bd949165a92f68bd0a10c7c2f9a7e66c1a19980bd26734103d51 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamFrequencyRatio(Inno.Native.Sdl3.SDLAudioStream* stream)
```

Get the frequency ratio of an audio stream.

**Thread safety:** It is safe to call this function from any thread, as it holds
a stream-specific mutex while running.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetAudioStreamFrequencyRatio

**Parameter `stream`:** the SDL_AudioStream to query.

**Returns:** the frequency ratio of the stream or 0.0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29565).

---
title: "SDLContext.RawApi — Method: GetAudioStreamGain"
description: "Exact Method: GetAudioStreamGain contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.81895ef9a05922aa
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAudioStreamGain

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioStreamGain`

<a id="api-d09472d03d3f5b2b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamGain(Inno.Native.Sdl3.SDLAudioStream*) fca4a72072d4ee8d0efd0706af80bba9fa77eeb24eaaddb076508d82915e689d -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamGain(Inno.Native.Sdl3.SDLAudioStream* stream)
```

Get the gain of an audio stream.
The gain of a stream is its volume; a larger gain means a louder output,
with a gain of zero being silence.
Audio streams default to a gain of 1.0f (no change in output).

**Thread safety:** It is safe to call this function from any thread, as it holds
a stream-specific mutex while running.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetAudioStreamGain

**Parameter `stream`:** the SDL_AudioStream to query.

**Returns:** the gain of the stream or -1.0f on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26818).

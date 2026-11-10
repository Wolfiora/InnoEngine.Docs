---
title: "SDLContext.RawApi — Method: SetAudioStreamGain"
description: "Exact Method: SetAudioStreamGain contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8440903258ab495f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetAudioStreamGain

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetAudioStreamGain`

<a id="api-42e6aefcadf8dd44"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetAudioStreamGain(Inno.Native.Sdl3.SDLAudioStream*,System.Single) 1d0ce02fbac9a2308c86ee6552f6a444a406ec3fc31883adf51a24ac7945f7c9 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetAudioStreamGain(Inno.Native.Sdl3.SDLAudioStream* stream, float gain)
```

Change the gain of an audio stream.
The gain of a stream is its volume; a larger gain means a louder output,
with a gain of zero being silence.
Audio streams default to a gain of 1.0f (no change in output).
This is applied during SDL_GetAudioStreamData, and can be continuously
changed to create various effects.

**Thread safety:** It is safe to call this function from any thread, as it holds
a stream-specific mutex while running.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetAudioStreamGain

**Parameter `stream`:** the stream on which the gain is being changed.

**Parameter `gain`:** the gain. 1.0f is no change, 0.0f is silence.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45280).

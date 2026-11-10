---
title: "SDLContext.RawApi — Method: SetAudioStreamFormat"
description: "Exact Method: SetAudioStreamFormat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4f29b3d77e2bb631
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetAudioStreamFormat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetAudioStreamFormat`

<a id="api-2788ee7699508f91"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetAudioStreamFormat(Inno.Native.Sdl3.SDLAudioStream*,Inno.Native.Sdl3.SDLAudioSpec*,Inno.Native.Sdl3.SDLAudioSpec*) 21a2d2c2667d4154eaf116a6068c75bce26bb474210421d9358f70125f70386b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetAudioStreamFormat(Inno.Native.Sdl3.SDLAudioStream* stream, Inno.Native.Sdl3.SDLAudioSpec* src_spec, Inno.Native.Sdl3.SDLAudioSpec* dst_spec)
```

Change the input and output formats of an audio stream.
Future calls to and SDL_GetAudioStreamAvailable and SDL_GetAudioStreamData
will reflect the new format, and future calls to SDL_PutAudioStreamData
must provide data in the new input formats.
Data that was previously queued in the stream will still be operated on in
the format that was current when it was added, which is to say you can put
the end of a sound file in one format to a stream, change formats for the
next sound file, and start putting that new data while the previous sound
file is still queued, and everything will still play back correctly.
If a stream is bound to a device, then the format of the side of the stream
bound to a device cannot be changed (src_spec for recording devices,
dst_spec for playback devices). Attempts to make a change to this side will
be ignored, but this will not report an error. The other side's format can
be changed.

**Thread safety:** It is safe to call this function from any thread, as it holds
a stream-specific mutex while running.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetAudioStreamFormat

**See also:** SDL_SetAudioStreamFrequencyRatio

**Parameter `stream`:** the stream the format is being changed.

**Parameter `src_spec`:** the new format of the audio input; if NULL, it is not
changed.

**Parameter `dst_spec`:** the new format of the audio output; if NULL, it is not
changed.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33360).

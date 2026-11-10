---
title: "SDLContext.RawApi — Method: SetAudioStreamOutputChannelMap"
description: "Exact Method: SetAudioStreamOutputChannelMap contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.579987181956261e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetAudioStreamOutputChannelMap

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetAudioStreamOutputChannelMap`

<a id="api-324be50f3b137df7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetAudioStreamOutputChannelMap(Inno.Native.Sdl3.SDLAudioStream*,System.Int32*,System.Int32) 677c2b80b7436a43be4e5d5cb1485fb587cb99c583f3a14e67090a359caeda20 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetAudioStreamOutputChannelMap(Inno.Native.Sdl3.SDLAudioStream* stream, int* chmap, int count)
```

Set the current output channel map of an audio stream.
Channel maps are optional; most things do not need them, instead passing
data in the [order that SDL expects](https://wiki.libsdl.org/SDL3/CategoryAudio#channel-layouts).
The output channel map reorders data that is leaving a stream via
SDL_GetAudioStreamData.
Each item in the array represents an input channel, and its value is the
channel that it should be remapped to. To reverse a stereo signal's left
and right values, you'd have an array of `{ 1, 0 }`. It is legal to remap
multiple channels to the same thing, so `{ 1, 1 }` would duplicate the
right channel to both channels of a stereo signal. An element in the
channel map set to -1 instead of a valid channel will mute that channel,
setting it to a silence value.
You cannot change the number of channels through a channel map, just
reorder/mute them.
The output channel map can be changed at any time, as output remapping is
applied during SDL_GetAudioStreamData.
Audio streams default to no remapping applied. Passing a NULL channel map
is legal, and turns off remapping.
SDL will copy the channel map; the caller does not have to save this array
after this call.
If `count` is not equal to the current number of channels in the audio
stream's format, this will fail. This is a safety measure to make sure a
race condition hasn't changed the format while this call is setting the
channel map.
Unlike attempting to change the stream's format, the output channel map on
a stream bound to a recording device is permitted to change at any time;
any data added to the stream after this call will have the new mapping, but
previously-added data will still have the prior mapping. When the channel
map doesn't match the hardware's channel layout, SDL will convert the data
before feeding it to the device for playback.

**Thread safety:** It is safe to call this function from any thread, as it holds
a stream-specific mutex while running. Don't change the
stream's format to have a different number of channels from a
a different thread at the same time, though!

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetAudioStreamInputChannelMap

**Parameter `stream`:** the SDL_AudioStream to change.

**Parameter `chmap`:** the new channel map, NULL to reset to default.

**Parameter `count`:** The number of channels in the map.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27417).

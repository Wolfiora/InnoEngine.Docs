---
title: "SDLContext.RawApi — Method: PutAudioStreamPlanarData"
description: "Exact Method: PutAudioStreamPlanarData contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fa819de3ceb158b3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: PutAudioStreamPlanarData

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PutAudioStreamPlanarData`

<a id="api-1047c813c03fcdd8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.PutAudioStreamPlanarData(Inno.Native.Sdl3.SDLAudioStream*,System.Void**,System.Int32,System.Int32) 9b5f73927b733ae18b45f38bbfc9fb622871064abc21598fe2ecf19dffa4775b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.PutAudioStreamPlanarData(Inno.Native.Sdl3.SDLAudioStream* stream, void** channel_buffers, int num_channels, int num_samples)
```

Add data to the stream with each channel in a separate array.
This data must match the format/channels/samplerate specified in the latest
call to SDL_SetAudioStreamFormat, or the format specified when creating the
stream if it hasn't been changed.
The data will be interleaved and queued. Note that SDL_AudioStream only
operates on interleaved data, so this is simply a convenience function for
easily queueing data from sources that provide separate arrays. There is no
equivalent function to retrieve planar data.
The arrays in `channel_buffers` are ordered as they are to be interleaved;
the first array will be the first sample in the interleaved data. Any
individual array may be NULL; in this case, silence will be interleaved for
that channel.
`num_channels` specifies how many arrays are in `channel_buffers`. This can
be used as a safety to prevent overflow, in case the stream format has
changed elsewhere. If more channels are specified than the current input
spec, they are ignored. If less channels are specified, the missing arrays
are treated as if they are NULL (silence is written to those channels). If
the count is -1, SDL will assume the array count matches the current input
spec.
Note that `num_samples` is the number of _samples per array_. This can also
be thought of as the number of _sample frames_ to be queued. A value of 1
with stereo arrays will queue two samples to the stream. This is different
than SDL_PutAudioStreamData, which wants the size of a single array in
bytes.

**Thread safety:** It is safe to call this function from any thread, but if the
stream has a callback set, the caller might need to manage
extra locking.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_ClearAudioStream

**See also:** SDL_FlushAudioStream

**See also:** SDL_GetAudioStreamData

**See also:** SDL_GetAudioStreamQueued

**Parameter `stream`:** the stream the audio data is being added to.

**Parameter `channel_buffers`:** a pointer to an array of arrays, one array per
channel.

**Parameter `num_channels`:** the number of arrays in `channel_buffers` or -1.

**Parameter `num_samples`:** the number of _samples_ per array to write to the
stream.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35705).

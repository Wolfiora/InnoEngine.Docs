---
title: "SDLContext.RawApi — Method: ConvertAudioSamples"
description: "Exact Method: ConvertAudioSamples contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5dbdd9791d58a14c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ConvertAudioSamples

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ConvertAudioSamples`

<a id="api-4ca9e15cc9f1d1b9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ConvertAudioSamples(Inno.Native.Sdl3.SDLAudioSpec*,System.Byte*,System.Int32,Inno.Native.Sdl3.SDLAudioSpec*,System.Byte**,System.Int32*) 5d4eab91b6f9a7b5f2e8ca061bd9f40cf4be8788935ac4069945a6cbecf6343f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ConvertAudioSamples(Inno.Native.Sdl3.SDLAudioSpec* src_spec, byte* src_data, int src_len, Inno.Native.Sdl3.SDLAudioSpec* dst_spec, byte** dst_data, int* dst_len)
```

Convert some audio data of one format to another format.
Please note that this function is for convenience, but should not be used
to resample audio in blocks, as it will introduce audio artifacts on the
boundaries. You should only use this function if you are converting audio
data in its entirety in one call. If you want to convert audio in smaller
chunks, use an SDL_AudioStream, which is designed for this situation.
Internally, this function creates and destroys an SDL_AudioStream on each
use, so it's also less efficient than using one directly, if you need to
convert multiple times.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `src_spec`:** the format details of the input audio.

**Parameter `src_data`:** the audio data to be converted.

**Parameter `src_len`:** the len of src_data.

**Parameter `dst_spec`:** the format details of the output audio.

**Parameter `dst_data`:** will be filled with a pointer to converted audio data,
which should be freed with SDL_free(). On error, it will be
NULL.

**Parameter `dst_len`:** will be filled with the len of dst_data.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19521).

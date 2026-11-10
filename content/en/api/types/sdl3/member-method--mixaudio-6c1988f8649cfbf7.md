---
title: "SDLContext.RawApi — Method: MixAudio"
description: "Exact Method: MixAudio contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6c1988f8649cfbf7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: MixAudio

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MixAudio`

<a id="api-b2bb601ad7dc4318"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.MixAudio(System.Byte*,System.Byte*,Inno.Native.Sdl3.SDLAudioFormat,System.UInt32,System.Single) 614845339e405919c26dd1537b5b3467309325222932982ade4e7d304506469b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.MixAudio(byte* dst, byte* src, Inno.Native.Sdl3.SDLAudioFormat format, uint len, float volume)
```

Mix audio data in a specified format.
This takes an audio buffer `src` of `len` bytes of `format` data and mixes
it into `dst`, performing addition, volume adjustment, and overflow
clipping. The buffer pointed to by `dst` must also be `len` bytes of
`format` data.
This is provided for convenience -- you can mix your own audio data.
Do not use this function for mixing together more than two streams of
sample data. The output from repeated application of this function may be
distorted by clipping, because there is no accumulator with greater range
than the input (not to mention this being an inefficient way of doing it).
It is a common misconception that this function is required to write audio
data to an output stream in an audio callback. While you can do that,
SDL_MixAudio() is really only needed when you're mixing a single audio
stream with a volume adjustment.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dst`:** the destination for the mixed audio.

**Parameter `src`:** the source audio buffer to be mixed.

**Parameter `format`:** the SDL_AudioFormat structure representing the desired audio
format.

**Parameter `len`:** the length of the audio buffer in bytes.

**Parameter `volume`:** ranges from 0.0 - 1.0, and should be set to 1.0 for full
audio volume.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19594).

---
title: "SDLContext.RawApi — Method: LoadWavIo"
description: "Exact Method: LoadWavIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.14226160b5574c20
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LoadWavIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LoadWavIo`

<a id="api-0fbe1efeedaeb710"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LoadWavIo(Inno.Native.Sdl3.SDLIOStream*,System.Byte,Inno.Native.Sdl3.SDLAudioSpec*,System.Byte**,System.UInt32*) 324567a908982207cce5b2685393c4730ff9004a08313c9ea0cc2184a7313109 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.LoadWavIo(Inno.Native.Sdl3.SDLIOStream* src, byte closeio, Inno.Native.Sdl3.SDLAudioSpec* spec, byte** audio_buf, uint* audio_len)
```

Load the audio data of a WAVE file into memory.
Loading a WAVE file requires `src`, `spec`, `audio_buf` and `audio_len` to
be valid pointers. The entire data portion of the file is then loaded into
memory and decoded if necessary.
Supported formats are RIFF WAVE files with the formats PCM (8, 16, 24, and
32 bits), IEEE Float (32 bits), Microsoft ADPCM and IMA ADPCM (4 bits), and
A-law and mu-law (8 bits). Other formats are currently unsupported and
cause an error.
If this function succeeds, the return value is zero and the pointer to the
audio data allocated by the function is written to `audio_buf` and its
length in bytes to `audio_len`. The SDL_AudioSpec members `freq`,
`channels`, and `format` are set to the values of the audio data in the
buffer.
It's necessary to use SDL_free() to free the audio data returned in
`audio_buf` when it is no longer used.
Because of the underspecification of the .WAV format, there are many
problematic files in the wild that cause issues with strict decoders. To
provide compatibility with these files, this decoder is lenient in regards
to the truncation of the file, the fact chunk, and the size of the RIFF
chunk. The hints `SDL_HINT_WAVE_RIFF_CHUNK_SIZE`,
`SDL_HINT_WAVE_TRUNCATION`, and `SDL_HINT_WAVE_FACT_CHUNK` can be used to
tune the behavior of the loading process.
Any file that is invalid (due to truncation, corruption, or wrong values in
the headers), too big, or unsupported causes an error. Additionally, any
critical I/O error from the data source will terminate the loading process
with an error. The function returns NULL on error and in all cases (with
the exception of `src` being NULL), an appropriate error message will be
set.
It is required that the data source supports seeking.
Example:
```c
SDL_LoadWAV_IO(SDL_IOFromFile("sample.wav", "rb"), true,
&spec
,
&buf
,
&len
);
```
Note that the SDL_LoadWAV function does this same thing for you, but in a
less messy way:
```c
SDL_LoadWAV("sample.wav",
&spec
,
&buf
,
&len
);
```
This function returns false if the .WAV file cannot be opened,
uses an unknown data format, or is corrupt; call SDL_GetError()
for more information.
When the application is done with the data returned in
`audio_buf`, it should call SDL_free() to dispose of it.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_free

**See also:** SDL_LoadWAV

**Parameter `src`:** the data source for the WAVE data.

**Parameter `closeio`:** if true, calls SDL_CloseIO() on `src` before returning, even
in the case of an error.

**Parameter `spec`:** a pointer to an SDL_AudioSpec that will be set to the WAVE
data's format details on successful return.

**Parameter `audio_buf`:** a pointer filled with the audio data, allocated by the
function.

**Parameter `audio_len`:** a pointer filled with the length of the audio data buffer
in bytes.

**Returns:** true on success. `audio_buf` will be filled with a pointer to an
allocated buffer containing the audio data, and `audio_len` is
filled with the length of that audio buffer in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50507).

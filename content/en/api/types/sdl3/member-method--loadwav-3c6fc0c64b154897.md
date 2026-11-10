---
title: "SDLContext.RawApi — Method: LoadWav"
description: "Exact Method: LoadWav contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3c6fc0c64b154897
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LoadWav

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LoadWav`

<a id="api-a30f7bfb820efac8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LoadWav(System.SByte*,Inno.Native.Sdl3.SDLAudioSpec*,System.Byte**,System.UInt32*) aea57b4ce8a96866178351f45d540f3078da6a2a712466012b99e25eecb805c9 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.LoadWav(sbyte* path, Inno.Native.Sdl3.SDLAudioSpec* spec, byte** audio_buf, uint* audio_len)
```

Loads a WAV from a file path.
This is a convenience function that is effectively the same as:
```c
SDL_LoadWAV_IO(SDL_IOFromFile(path, "rb"), true, spec, audio_buf, audio_len);
```
This function returns false if the .WAV file cannot be opened,
uses an unknown data format, or is corrupt; call SDL_GetError()
for more information.
When the application is done with the data returned in
`audio_buf`, it should call SDL_free() to dispose of it.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_free

**See also:** SDL_LoadWAV_IO

**Parameter `path`:** the file path of the WAV file to open.

**Parameter `spec`:** a pointer to an SDL_AudioSpec that will be set to the WAVE
data's format details on successful return.

**Parameter `audio_buf`:** a pointer filled with the audio data, allocated by the
function.

**Parameter `audio_len`:** a pointer filled with the length of the audio data buffer
in bytes.

**Returns:** true on success. `audio_buf` will be filled with a pointer to an
allocated buffer containing the audio data, and `audio_len` is
filled with the length of that audio buffer in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42269).

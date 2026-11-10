---
title: "SDLContext.RawApi — Method: PutAudioStreamDataNoCopy"
description: "Exact Method: PutAudioStreamDataNoCopy contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e0ca79ca9824d8d9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: PutAudioStreamDataNoCopy

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PutAudioStreamDataNoCopy`

<a id="api-ea65c53691959fe3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.PutAudioStreamDataNoCopy(Inno.Native.Sdl3.SDLAudioStream*,System.Void*,System.Int32,,System.Void*) 580821e26f582d02e80e5c126688e07171b0a236f61b996726854a10ae7446d9 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.PutAudioStreamDataNoCopy(Inno.Native.Sdl3.SDLAudioStream* stream, void* buf, int len, delegate* unmanaged[Cdecl]<void*, void*, int, void> callback, void* userdata)
```

Add external data to an audio stream without copying it.
Unlike SDL_PutAudioStreamData(), this function does not make a copy of the
provided data, instead storing the provided pointer. This means that the
put operation does not need to allocate and copy the data, but the original
data must remain available until the stream is done with it, either by
being read from the stream in its entirety, or a call to
SDL_ClearAudioStream() or SDL_DestroyAudioStream().
The data must match the format/channels/samplerate specified in the latest
call to SDL_SetAudioStreamFormat, or the format specified when creating the
stream if it hasn't been changed.
An optional callback may be provided, which is called when the stream no
longer needs the data. Once this callback fires, the stream will not access
the data again. This callback will fire for any reason the data is no
longer needed, including clearing or destroying the stream.
Note that there is still an allocation to store tracking information, so
this function is more efficient for larger blocks of data. If you're
planning to put a few samples at a time, it will be more efficient to use
SDL_PutAudioStreamData(), which allocates and buffers in blocks.

**Thread safety:** It is safe to call this function from any thread, but if the
stream has a callback set, the caller might need to manage
extra locking.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_ClearAudioStream

**See also:** SDL_FlushAudioStream

**See also:** SDL_GetAudioStreamData

**See also:** SDL_GetAudioStreamQueued

**Parameter `stream`:** the stream the audio data is being added to.

**Parameter `buf`:** a pointer to the audio data to add.

**Parameter `len`:** the number of bytes to add to the stream.

**Parameter `callback`:** the callback function to call when the data is no longer
needed by the stream. May be NULL.

**Parameter `userdata`:** an opaque pointer provided to the callback for its own
personal use.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42442).

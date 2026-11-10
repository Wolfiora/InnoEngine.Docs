---
title: "SDLContext.RawApi — Method: PutAudioStreamData"
description: "Exact Method: PutAudioStreamData contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5fe279d84ce3deae
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: PutAudioStreamData

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PutAudioStreamData`

<a id="api-aa663b1a79ddd1d5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.PutAudioStreamData(Inno.Native.Sdl3.SDLAudioStream*,System.Void*,System.Int32) 3249f9e3823a7a275dc5513fc28b4df8bf1a00007b0710b1be3249173c1d9f0d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.PutAudioStreamData(Inno.Native.Sdl3.SDLAudioStream* stream, void* buf, int len)
```

Add data to the stream.
This data must match the format/channels/samplerate specified in the latest
call to SDL_SetAudioStreamFormat, or the format specified when creating the
stream if it hasn't been changed.
Note that this call simply copies the unconverted data for later. This is
different than SDL2, where data was converted during the Put call and the
Get call would just dequeue the previously-converted data.

**Thread safety:** It is safe to call this function from any thread, but if the
stream has a callback set, the caller might need to manage
extra locking.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ClearAudioStream

**See also:** SDL_FlushAudioStream

**See also:** SDL_GetAudioStreamData

**See also:** SDL_GetAudioStreamQueued

**Parameter `stream`:** the stream the audio data is being added to.

**Parameter `buf`:** a pointer to the audio data to add.

**Parameter `len`:** the number of bytes to write to the stream.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42685).

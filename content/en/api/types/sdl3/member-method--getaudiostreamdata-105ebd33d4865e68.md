---
title: "SDLContext.RawApi — Method: GetAudioStreamData"
description: "Exact Method: GetAudioStreamData contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.105ebd33d4865e68
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAudioStreamData

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioStreamData`

<a id="api-7199882240d8def2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamData(Inno.Native.Sdl3.SDLAudioStream*,System.Void*,System.Int32) d2e24e931e0418845ce8279b4f996d8dc31c10f91aac8f93a364517b783affa4 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamData(Inno.Native.Sdl3.SDLAudioStream* stream, void* buf, int len)
```

Get converted/resampled data from the stream.
The input/output data format/channels/samplerate is specified when creating
the stream, and can be changed after creation by calling
SDL_SetAudioStreamFormat.
Note that any conversion and resampling necessary is done during this call,
and SDL_PutAudioStreamData simply queues unconverted data for later. This
is different than SDL2, where that work was done while inputting new data
to the stream and requesting the output just copied the converted data.

**Thread safety:** It is safe to call this function from any thread, but if the
stream has a callback set, the caller might need to manage
extra locking.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ClearAudioStream

**See also:** SDL_GetAudioStreamAvailable

**See also:** SDL_PutAudioStreamData

**Parameter `stream`:** the stream the audio is being requested from.

**Parameter `buf`:** a buffer to fill with audio data.

**Parameter `len`:** the maximum number of bytes to fill.

**Returns:** the number of bytes read from the stream or -1 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47913).

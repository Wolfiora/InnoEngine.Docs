---
title: "SDLContext.RawApi — Method: SetAudioStreamGetCallback"
description: "Exact Method: SetAudioStreamGetCallback contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c565be9e4db3d084
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetAudioStreamGetCallback

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetAudioStreamGetCallback`

<a id="api-b08334d920144e85"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetAudioStreamGetCallback(Inno.Native.Sdl3.SDLAudioStream*,,System.Void*) 48de713e0d727c15f6479bb81d30c8c3a12098d2b81035c2771980ff13855d94 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetAudioStreamGetCallback(Inno.Native.Sdl3.SDLAudioStream* stream, delegate* unmanaged[Cdecl]<void*, Inno.Native.Sdl3.SDLAudioStream*, int, int, void> callback, void* userdata)
```

Set a callback that runs when data is requested from an audio stream.
This callback is called _before_ data is obtained from the stream, giving
the callback the chance to add more on-demand.
The callback can (optionally) call SDL_PutAudioStreamData() to add more
audio to the stream during this call; if needed, the request that triggered
this callback will obtain the new data immediately.
The callback's `additional_amount` argument is roughly how many bytes of
_unconverted_ data (in the stream's input format) is needed by the caller,
although this may overestimate a little for safety. This takes into account
how much is already in the stream and only asks for any extra necessary to
resolve the request, which means the callback may be asked for zero bytes,
and a different amount on each call.
The callback is not required to supply exact amounts; it is allowed to
supply too much or too little or none at all. The caller will get what's
available, up to the amount they requested, regardless of this callback's
outcome.
Clearing or flushing an audio stream does not call this callback.
This function obtains the stream's lock, which means any existing callback
(get or put) in progress will finish running before setting the new
callback.
Setting a NULL function turns off the callback.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetAudioStreamPutCallback

**Parameter `stream`:** the audio stream to set the new callback on.

**Parameter `callback`:** the new callback function to call when data is requested
from the stream.

**Parameter `userdata`:** an opaque pointer provided to the callback for its own
personal use.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information. This only fails if `stream` is NULL.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19177).

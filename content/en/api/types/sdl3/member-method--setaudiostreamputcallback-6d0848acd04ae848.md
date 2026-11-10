---
title: "SDLContext.RawApi — Method: SetAudioStreamPutCallback"
description: "Exact Method: SetAudioStreamPutCallback contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6d0848acd04ae848
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetAudioStreamPutCallback

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetAudioStreamPutCallback`

<a id="api-97d821e99d282677"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetAudioStreamPutCallback(Inno.Native.Sdl3.SDLAudioStream*,,System.Void*) 716b9f3d4cfa019b54a6bdda29eb50f713e1ba546fe0516d8ae8b3e32c2256f1 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetAudioStreamPutCallback(Inno.Native.Sdl3.SDLAudioStream* stream, delegate* unmanaged[Cdecl]<void*, Inno.Native.Sdl3.SDLAudioStream*, int, int, void> callback, void* userdata)
```

Set a callback that runs when data is added to an audio stream.
This callback is called _after_ the data is added to the stream, giving the
callback the chance to obtain it immediately.
The callback can (optionally) call SDL_GetAudioStreamData() to obtain audio
from the stream during this call.
The callback's `additional_amount` argument is how many bytes of
_converted_ data (in the stream's output format) was provided by the
caller, although this may underestimate a little for safety. This value
might be less than what is currently available in the stream, if data was
already there, and might be less than the caller provided if the stream
needs to keep a buffer to aid in resampling. Which means the callback may
be provided with zero bytes, and a different amount on each call.
The callback may call SDL_GetAudioStreamAvailable to see the total amount
currently available to read from the stream, instead of the total provided
by the current call.
The callback is not required to obtain all data. It is allowed to read less
or none at all. Anything not read now simply remains in the stream for
later access.
Clearing or flushing an audio stream does not call this callback.
This function obtains the stream's lock, which means any existing callback
(get or put) in progress will finish running before setting the new
callback.
Setting a NULL function turns off the callback.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetAudioStreamGetCallback

**Parameter `stream`:** the audio stream to set the new callback on.

**Parameter `callback`:** the new callback function to call when data is added to the
stream.

**Parameter `userdata`:** an opaque pointer provided to the callback for its own
personal use.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information. This only fails if `stream` is NULL.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45673).

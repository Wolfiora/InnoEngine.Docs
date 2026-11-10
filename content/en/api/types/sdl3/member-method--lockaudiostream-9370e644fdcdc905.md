---
title: "SDLContext.RawApi — Method: LockAudioStream"
description: "Exact Method: LockAudioStream contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9370e644fdcdc905
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LockAudioStream

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LockAudioStream`

<a id="api-386a0196d9046f13"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LockAudioStream(Inno.Native.Sdl3.SDLAudioStream*) 967ceb927a0dab91ada6d1d644ea1a33a7c536c5ca6ea54eab44af1349ec9b5c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.LockAudioStream(Inno.Native.Sdl3.SDLAudioStream* stream)
```

Lock an audio stream for serialized access.
Each SDL_AudioStream has an internal mutex it uses to protect its data
structures from threading conflicts. This function allows an app to lock
that mutex, which could be useful if registering callbacks on this stream.
One does not need to lock a stream to use in it most cases, as the stream
manages this lock internally. However, this lock is held during callbacks,
which may run from arbitrary threads at any time, so if an app needs to
protect shared data during those callbacks, locking the stream guarantees
that the callback is not running while the lock is held.
As this is just a wrapper over SDL_LockMutex for an internal lock; it has
all the same attributes (recursive locks are allowed, etc).

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_UnlockAudioStream

**Parameter `stream`:** the audio stream to lock.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52563).

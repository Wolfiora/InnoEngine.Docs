---
title: "SDLContext.RawApi — Method: CreateMutex"
description: "Exact Method: CreateMutex contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e72fad83180e19dd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateMutex

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateMutex`

<a id="api-1d4b983e46c6ec20"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateMutex b914b1fd92b2908eff776b72f662e23c249594d277cb71919f17c8303d5f68ce -->

```csharp
public Inno.Native.Sdl3.SDLMutex* Inno.Native.Sdl3.SDLContext.RawApi.CreateMutex()
```

Create a new mutex.
All newly-created mutexes begin in the _unlocked_ state.
Calls to SDL_LockMutex() will not return while the mutex is locked by
another thread. See SDL_TryLockMutex() to attempt to lock without blocking.
SDL mutexes are reentrant.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DestroyMutex

**See also:** SDL_LockMutex

**See also:** SDL_TryLockMutex

**See also:** SDL_UnlockMutex

**Returns:** the initialized and unlocked mutex or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25496).

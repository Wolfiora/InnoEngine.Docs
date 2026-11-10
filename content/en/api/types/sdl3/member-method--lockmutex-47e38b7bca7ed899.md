---
title: "SDLContext.RawApi — Method: LockMutex"
description: "Exact Method: LockMutex contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.47e38b7bca7ed899
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LockMutex

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LockMutex`

<a id="api-3b9fb646312cf1ad"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LockMutex(Inno.Native.Sdl3.SDLMutex*) 3c1c8d14160b6c18659a50e4aa56cf0d0761c00172ec95c16fd8d22cc63e37f0 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.LockMutex(Inno.Native.Sdl3.SDLMutex* mutex)
```

Lock the mutex.
This will block until the mutex is available, which is to say it is in the
unlocked state and the OS has chosen the caller as the next thread to lock
it. Of all threads waiting to lock the mutex, only one may do so at a time.
It is legal for the owning thread to lock an already-locked mutex. It must
unlock it the same number of times before it is actually made available for
other threads in the system (this is known as a "recursive mutex").
This function does not fail; if mutex is NULL, it will return immediately
having locked nothing. If the mutex is valid, this function will always
block until it can lock the mutex, and return with it locked.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_TryLockMutex

**See also:** SDL_UnlockMutex

**Parameter `mutex`:** the mutex to lock.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39922).

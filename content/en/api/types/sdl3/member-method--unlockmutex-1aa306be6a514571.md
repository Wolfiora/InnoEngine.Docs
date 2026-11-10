---
title: "SDLContext.RawApi — Method: UnlockMutex"
description: "Exact Method: UnlockMutex contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1aa306be6a514571
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UnlockMutex

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnlockMutex`

<a id="api-fda730c80c3a853f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UnlockMutex(Inno.Native.Sdl3.SDLMutex*) 099aad0a1f8df9a712a9520b3c8ddae348c2ba44280e22eb9944321768df8080 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.UnlockMutex(Inno.Native.Sdl3.SDLMutex* mutex)
```

Unlock the mutex.
It is legal for the owning thread to lock an already-locked mutex. It must
unlock it the same number of times before it is actually made available for
other threads in the system (this is known as a "recursive mutex").
It is illegal to unlock a mutex that has not been locked by the current
thread, and doing so results in undefined behavior.

**Thread safety:** This call must be paired with a previous locking call on the
same thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockMutex

**See also:** SDL_TryLockMutex

**Parameter `mutex`:** the mutex to unlock.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34662).

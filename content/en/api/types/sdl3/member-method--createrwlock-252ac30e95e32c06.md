---
title: "SDLContext.RawApi — Method: CreateRwLock"
description: "Exact Method: CreateRwLock contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.252ac30e95e32c06
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateRwLock

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateRwLock`

<a id="api-5957cc7223efe307"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateRwLock 5dcac55e85675f8e71204eea2edf269ff6994ce6d5f755d0c0f815c6a4de0515 -->

```csharp
public Inno.Native.Sdl3.SDLRWLock* Inno.Native.Sdl3.SDLContext.RawApi.CreateRwLock()
```

Create a new read/write lock.
A read/write lock is useful for situations where you have multiple threads
trying to access a resource that is rarely updated. All threads requesting
a read-only lock will be allowed to run in parallel; if a thread requests a
write lock, it will be provided exclusive access. This makes it safe for
multiple threads to use a resource at the same time if they promise not to
change it, and when it has to be changed, the rwlock will serve as a
gateway to make sure those changes can be made safely.
In the right situation, a rwlock can be more efficient than a mutex, which
only lets a single thread proceed at a time, even if it won't be modifying
the data.
All newly-created read/write locks begin in the _unlocked_ state.
Calls to SDL_LockRWLockForReading() and SDL_LockRWLockForWriting will not
return while the rwlock is locked _for writing_ by another thread. See
SDL_TryLockRWLockForReading() and SDL_TryLockRWLockForWriting() to attempt
to lock without blocking.
SDL read/write locks are only recursive for read-only locks! They are not
guaranteed to be fair, or provide access in a FIFO manner! They are not
guaranteed to favor writers. You may not lock a rwlock for both read-only
and write access at the same time from the same thread (so you can't
promote your read-only lock to a write lock without unlocking first).

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DestroyRWLock

**See also:** SDL_LockRWLockForReading

**See also:** SDL_LockRWLockForWriting

**See also:** SDL_TryLockRWLockForReading

**See also:** SDL_TryLockRWLockForWriting

**See also:** SDL_UnlockRWLock

**Returns:** the initialized and unlocked read/write lock or NULL on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47598).

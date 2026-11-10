---
title: "SDLContext.RawApi — Method: LockRwLockForWriting"
description: "Exact Method: LockRwLockForWriting contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ef42f1579e45681b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LockRwLockForWriting

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LockRwLockForWriting`

<a id="api-8c79017fe2a1aadd"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LockRwLockForWriting(Inno.Native.Sdl3.SDLRWLock*) 9f7ea1ac169f4c7a520d116b8e1858c395750f8615e0879ecda02b57166cbdf7 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.LockRwLockForWriting(Inno.Native.Sdl3.SDLRWLock* rwlock)
```

Lock the read/write lock for _write_ operations.
This will block until the rwlock is available, which is to say it is not
locked for reading or writing by any other thread. Only one thread may hold
the lock when it requests write access; all other threads, whether they
also want to write or only want read-only access, must wait until the
writer thread has released the lock.
It is illegal for the owning thread to lock an already-locked rwlock for
writing (read-only may be locked recursively, writing can not). Doing so
results in undefined behavior.
It is illegal to request a write lock from a thread that already holds a
read-only lock. Doing so results in undefined behavior. Unlock the
read-only lock before requesting a write lock.
This function does not fail; if rwlock is NULL, it will return immediately
having locked nothing. If the rwlock is valid, this function will always
block until it can lock the mutex, and return with it locked.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockRWLockForReading

**See also:** SDL_TryLockRWLockForWriting

**See also:** SDL_UnlockRWLock

**Parameter `rwlock`:** the read/write lock to lock.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33316).

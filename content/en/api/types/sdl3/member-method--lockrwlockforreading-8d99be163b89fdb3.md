---
title: "SDLContext.RawApi — Method: LockRwLockForReading"
description: "Exact Method: LockRwLockForReading contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8d99be163b89fdb3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LockRwLockForReading

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LockRwLockForReading`

<a id="api-d84d327fd78fe481"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LockRwLockForReading(Inno.Native.Sdl3.SDLRWLock*) 3b758622330e394507131c4282218ffcacf92f7727dd83d5b51f90d47c81af34 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.LockRwLockForReading(Inno.Native.Sdl3.SDLRWLock* rwlock)
```

Lock the read/write lock for _read only_ operations.
This will block until the rwlock is available, which is to say it is not
locked for writing by any other thread. Of all threads waiting to lock the
rwlock, all may do so at the same time as long as they are requesting
read-only access; if a thread wants to lock for writing, only one may do so
at a time, and no other threads, read-only or not, may hold the lock at the
same time.
It is legal for the owning thread to lock an already-locked rwlock for
reading. It must unlock it the same number of times before it is actually
made available for other threads in the system (this is known as a
"recursive rwlock").
Note that locking for writing is not recursive (this is only available to
read-only locks).
It is illegal to request a read-only lock from a thread that already holds
the write lock. Doing so results in undefined behavior. Unlock the write
lock before requesting a read-only lock. (But, of course, if you have the
write lock, you don't need further locks to read in any case.)
This function does not fail; if rwlock is NULL, it will return immediately
having locked nothing. If the rwlock is valid, this function will always
block until it can lock the mutex, and return with it locked.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockRWLockForWriting

**See also:** SDL_TryLockRWLockForReading

**See also:** SDL_UnlockRWLock

**Parameter `rwlock`:** the read/write lock to lock.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29731).

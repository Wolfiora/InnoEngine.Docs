---
title: "SDLContext.RawApi — Method: TryLockRwLockForWriting"
description: "Exact Method: TryLockRwLockForWriting contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e9f2dec0996b2b65
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: TryLockRwLockForWriting

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TryLockRwLockForWriting`

<a id="api-4757d3a3900c4ac5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.TryLockRwLockForWriting(Inno.Native.Sdl3.SDLRWLock*) af94ff7af497395d82daf3ff62e3b8078b6c89aefa7ef5c72c961b949608eaf7 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.TryLockRwLockForWriting(Inno.Native.Sdl3.SDLRWLock* rwlock)
```

Try to lock a read/write lock _for writing_ without blocking.
This works just like SDL_LockRWLockForWriting(), but if the rwlock is not
available, then this function returns false immediately.
This technique is useful if you need exclusive access to a resource but
don't want to wait for it, and will return to it to try again later.
It is illegal for the owning thread to lock an already-locked rwlock for
writing (read-only may be locked recursively, writing can not). Doing so
results in undefined behavior.
It is illegal to request a write lock from a thread that already holds a
read-only lock. Doing so results in undefined behavior. Unlock the
read-only lock before requesting a write lock.
This function returns true if passed a NULL rwlock.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockRWLockForWriting

**See also:** SDL_TryLockRWLockForReading

**See also:** SDL_UnlockRWLock

**Parameter `rwlock`:** the rwlock to try to lock.

**Returns:** true on success, false if the lock would block.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37330).

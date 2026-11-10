---
title: "SDLContext.RawApi — Method: UnlockRwLock"
description: "Exact Method: UnlockRwLock contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.96615c584ba62784
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UnlockRwLock

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnlockRwLock`

<a id="api-72886fc1fa46a3da"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UnlockRwLock(Inno.Native.Sdl3.SDLRWLock*) f0510ba2bcb397d09ca486b47c697b8ce631d3a3f61248c68c38dbba22db8b51 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.UnlockRwLock(Inno.Native.Sdl3.SDLRWLock* rwlock)
```

Unlock the read/write lock.
Use this function to unlock the rwlock, whether it was locked for read-only
or write operations.
It is legal for the owning thread to lock an already-locked read-only lock.
It must unlock it the same number of times before it is actually made
available for other threads in the system (this is known as a "recursive
rwlock").
It is illegal to unlock a rwlock that has not been locked by the current
thread, and doing so results in undefined behavior.

**Thread safety:** This call must be paired with a previous locking call on the
same thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockRWLockForReading

**See also:** SDL_LockRWLockForWriting

**See also:** SDL_TryLockRWLockForReading

**See also:** SDL_TryLockRWLockForWriting

**Parameter `rwlock`:** the rwlock to unlock.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45934).

---
title: "SDLContext.RawApi — Method: TryLockRwLockForReading"
description: "Exact Method: TryLockRwLockForReading contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.dde3899f66139869
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: TryLockRwLockForReading

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TryLockRwLockForReading`

<a id="api-8cd04e55c77c0937"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.TryLockRwLockForReading(Inno.Native.Sdl3.SDLRWLock*) 0658d623337aa0623a50b0e6558884a70944ec344a69af692cd572d79286fe1c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.TryLockRwLockForReading(Inno.Native.Sdl3.SDLRWLock* rwlock)
```

Try to lock a read/write lock _for reading_ without blocking.
This works just like SDL_LockRWLockForReading(), but if the rwlock is not
available, then this function returns false immediately.
This technique is useful if you need access to a resource but don't want to
wait for it, and will return to it to try again later.
Trying to lock for read-only access can succeed if other threads are
holding read-only locks, as this won't prevent access.
This function returns true if passed a NULL rwlock.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockRWLockForReading

**See also:** SDL_TryLockRWLockForWriting

**See also:** SDL_UnlockRWLock

**Parameter `rwlock`:** the rwlock to try to lock.

**Returns:** true on success, false if the lock would block.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33784).

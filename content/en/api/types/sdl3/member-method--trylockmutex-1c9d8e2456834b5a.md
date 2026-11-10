---
title: "SDLContext.RawApi — Method: TryLockMutex"
description: "Exact Method: TryLockMutex contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1c9d8e2456834b5a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: TryLockMutex

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TryLockMutex`

<a id="api-0420bb37d82be233"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.TryLockMutex(Inno.Native.Sdl3.SDLMutex*) c8e13f126c97f803f60d289b366fbfd27344abe7d9583a4ca32f26d70784bccc -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.TryLockMutex(Inno.Native.Sdl3.SDLMutex* mutex)
```

Try to lock a mutex without blocking.
This works just like SDL_LockMutex(), but if the mutex is not available,
this function returns false immediately.
This technique is useful if you need exclusive access to a resource but
don't want to wait for it, and will return to it to try again later.
This function returns true if passed a NULL mutex.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockMutex

**See also:** SDL_UnlockMutex

**Parameter `mutex`:** the mutex to try to lock.

**Returns:** true on success, false if the mutex would block.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23027).

---
title: "SDLContext.RawApi — Method: TryLockSpinlock"
description: "Exact Method: TryLockSpinlock contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8242c6dc3fc25871
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: TryLockSpinlock

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TryLockSpinlock`

<a id="api-cd2d847b65e3d894"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.TryLockSpinlock(System.Int32*) 1eaf31e093f628672b1a541b38ccc84d200d3284f13aa73c28d1769c2bd83dbd -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.TryLockSpinlock(int* @lock)
```

Try to lock a spin lock by setting it to a non-zero value.
***Please note that spinlocks are dangerous if you don't know what you're
doing. Please be careful using any sort of spinlock!***

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockSpinlock

**See also:** SDL_UnlockSpinlock

**Parameter `lock`:** a pointer to a lock variable.

**Returns:** true if the lock succeeded, false if the lock is already held.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25368).

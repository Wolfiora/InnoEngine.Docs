---
title: "SDLContext.RawApi — Method: LockSpinlock"
description: "Exact Method: LockSpinlock contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c3821cf979e81662
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LockSpinlock

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LockSpinlock`

<a id="api-8160091fe186506f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LockSpinlock(System.Int32*) 387a04216c387285d4bb16e7b7ec35a2a6cfa7da98a0511790d64fda758e724e -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.LockSpinlock(int* @lock)
```

Lock a spin lock by setting it to a non-zero value.
***Please note that spinlocks are dangerous if you don't know what you're
doing. Please be careful using any sort of spinlock!***

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_TryLockSpinlock

**See also:** SDL_UnlockSpinlock

**Parameter `lock`:** a pointer to a lock variable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51784).

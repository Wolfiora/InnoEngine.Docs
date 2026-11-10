---
title: "SDLContext.RawApi — Method: UnlockSpinlock"
description: "Exact Method: UnlockSpinlock contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.226df3761b350089
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UnlockSpinlock

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnlockSpinlock`

<a id="api-ef4fc75511c805cf"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UnlockSpinlock(System.Int32*) a88919e31cfa70b2fed841ccfc89e81defb850c190f9f29047bca4f23aee4bca -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.UnlockSpinlock(int* @lock)
```

Unlock a spin lock by setting it to 0.
Always returns immediately.
***Please note that spinlocks are dangerous if you don't know what you're
doing. Please be careful using any sort of spinlock!***

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockSpinlock

**See also:** SDL_TryLockSpinlock

**Parameter `lock`:** a pointer to a lock variable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49595).

---
title: "SDLContext.RawApi — Method: CompareAndSwapAtomicInt"
description: "Exact Method: CompareAndSwapAtomicInt contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7e058e8dfb8887eb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CompareAndSwapAtomicInt

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CompareAndSwapAtomicInt`

<a id="api-9e45a98f7066862a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CompareAndSwapAtomicInt(Inno.Native.Sdl3.SDLAtomicInt*,System.Int32,System.Int32) 8a1256c7c57dd59d60342659ff45195f90d16b33571546a058f9f341b25b61b4 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.CompareAndSwapAtomicInt(Inno.Native.Sdl3.SDLAtomicInt* a, int oldval, int newval)
```

Set an atomic variable to a new value if it is currently an old value.
***Note: If you don't know what this function is for, you shouldn't use
it!***

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetAtomicInt

**See also:** SDL_SetAtomicInt

**Parameter `a`:** a pointer to an SDL_AtomicInt variable to be modified.

**Parameter `oldval`:** the old value.

**Parameter `newval`:** the new value.

**Returns:** true if the atomic variable was set, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30524).

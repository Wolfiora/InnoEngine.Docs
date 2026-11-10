---
title: "SDLContext.RawApi — Method: CompareAndSwapAtomicU32"
description: "Exact Method: CompareAndSwapAtomicU32 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4654c57916bdb982
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CompareAndSwapAtomicU32

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CompareAndSwapAtomicU32`

<a id="api-ec9804f5c3884816"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CompareAndSwapAtomicU32(Inno.Native.Sdl3.SDLAtomicU32*,System.UInt32,System.UInt32) 348b62a1feacdde2b5464d9fbd7eea53fbfc88f4211ccf42b807f3cbaa114390 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.CompareAndSwapAtomicU32(Inno.Native.Sdl3.SDLAtomicU32* a, uint oldval, uint newval)
```

Set an atomic variable to a new value if it is currently an old value.
***Note: If you don't know what this function is for, you shouldn't use
it!***

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetAtomicU32

**See also:** SDL_SetAtomicU32

**Parameter `a`:** a pointer to an SDL_AtomicU32 variable to be modified.

**Parameter `oldval`:** the old value.

**Parameter `newval`:** the new value.

**Returns:** true if the atomic variable was set, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36333).

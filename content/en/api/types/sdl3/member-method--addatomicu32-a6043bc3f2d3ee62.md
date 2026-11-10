---
title: "SDLContext.RawApi — Method: AddAtomicU32"
description: "Exact Method: AddAtomicU32 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a6043bc3f2d3ee62
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AddAtomicU32

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AddAtomicU32`

<a id="api-57b70b5c70931c9e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AddAtomicU32(Inno.Native.Sdl3.SDLAtomicU32*,System.Int32) a1d4b56c5af625be3df6a4cb3369c76062e6a69a95874c5c9bb07a991ca4b409 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.AddAtomicU32(Inno.Native.Sdl3.SDLAtomicU32* a, int v)
```

Add to an atomic variable.
This function also acts as a full memory barrier.
***Note: If you don't know what this function is for, you shouldn't use
it!***

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `a`:** a pointer to an SDL_AtomicU32 variable to be modified.

**Parameter `v`:** the desired value to add or subtract.

**Returns:** the previous value of the atomic variable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33032).

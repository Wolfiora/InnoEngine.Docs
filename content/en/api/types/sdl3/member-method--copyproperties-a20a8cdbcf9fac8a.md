---
title: "SDLContext — Method: CopyProperties"
description: "Exact Method: CopyProperties contracts in SDLContext."
uid: api.inno.native.sdl3.a20a8cdbcf9fac8a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: CopyProperties

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CopyProperties`

<a id="api-6f278b0b23aaf5ad"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.CopyProperties(System.UInt32,System.UInt32) 12762f76f0be2d32ef8de92595166e8979a6d3533b1d168780fbb8fa61294655 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.CopyProperties(uint src, uint dst)
```

Copy a group of properties.
Copy all the properties from one group of properties to another, with the
exception of properties requiring cleanup (set using
SDL_SetPointerPropertyWithCleanup()), which will not be copied. Any
property that already exists on `dst` will be overwritten.

**Thread safety:** It is safe to call this function from any thread. This
function acquires simultaneous mutex locks on both the source
and destination property sets.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `src`:** the properties to copy.

**Parameter `dst`:** the destination properties.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11942).

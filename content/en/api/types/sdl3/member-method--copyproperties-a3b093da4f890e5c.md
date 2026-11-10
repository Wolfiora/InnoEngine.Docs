---
title: "SDL — Method: CopyProperties"
description: "Exact Method: CopyProperties contracts in SDL."
uid: api.inno.native.sdl3.a3b093da4f890e5c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: CopyProperties

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CopyProperties`

<a id="api-b93a5f2c1215fa95"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.CopyProperties(System.UInt32,System.UInt32) ff475926375cc220d5149f74014d5687ea7f50e3f07223b6e14cac362752db8f -->

```csharp
public static bool Inno.Native.Sdl3.SDL.CopyProperties(uint src, uint dst)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L501).

---
title: "SDLContext.RawApi — Method: CopyProperties"
description: "Exact Method: CopyProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2297bc8846a204a5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CopyProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CopyProperties`

<a id="api-fd1b24746087986e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CopyProperties(System.UInt32,System.UInt32) bda168043eff87c05549b4bc64e8f11027e9aca42a29ab1d36fe9ccd5ad33beb -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.CopyProperties(uint src, uint dst)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19623).

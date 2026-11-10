---
title: "SDLContext.RawApi — Method: SetNumberProperty"
description: "Exact Method: SetNumberProperty contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8ed4752fc8f3cd95
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetNumberProperty

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetNumberProperty`

<a id="api-5de0d7a70bce7d10"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetNumberProperty(System.UInt32,System.SByte*,System.Int64) a1f363baa923ee5cbbb64e435b5cd3ff0abbca588d8ff388ce56daebba59abd2 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetNumberProperty(uint props, sbyte* name, long value)
```

Set an integer property in a group of properties.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetNumberProperty

**Parameter `props`:** the properties to modify.

**Parameter `name`:** the name of the property to modify.

**Parameter `value`:** the new value of the property.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18933).

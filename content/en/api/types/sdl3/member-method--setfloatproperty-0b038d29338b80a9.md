---
title: "SDLContext.RawApi — Method: SetFloatProperty"
description: "Exact Method: SetFloatProperty contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0b038d29338b80a9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetFloatProperty

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetFloatProperty`

<a id="api-300419c3c53f8dde"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetFloatProperty(System.UInt32,System.SByte*,System.Single) 29bdc58cef3e7e018c09158d33a1c64e0095e7ddf9b0bc54f6c546a528b70d6c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetFloatProperty(uint props, sbyte* name, float value)
```

Set a floating point property in a group of properties.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetFloatProperty

**Parameter `props`:** the properties to modify.

**Parameter `name`:** the name of the property to modify.

**Parameter `value`:** the new value of the property.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38731).

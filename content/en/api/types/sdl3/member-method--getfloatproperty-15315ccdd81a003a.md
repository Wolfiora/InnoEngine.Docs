---
title: "SDLContext.RawApi — Method: GetFloatProperty"
description: "Exact Method: GetFloatProperty contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.15315ccdd81a003a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetFloatProperty

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetFloatProperty`

<a id="api-d34618cf2367786b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetFloatProperty(System.UInt32,System.SByte*,System.Single) c7257dca018e303f4df37e327c5ff3e80d1d3e172cbd91127fb88f5c34ea41ca -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.GetFloatProperty(uint props, sbyte* name, float default_value)
```

Get a floating point property from a group of properties.
You can use SDL_GetPropertyType() to query whether the property exists and
is a floating point property.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPropertyType

**See also:** SDL_HasProperty

**See also:** SDL_SetFloatProperty

**Parameter `props`:** the properties to query.

**Parameter `name`:** the name of the property to query.

**Parameter `default_value`:** the default value of the property.

**Returns:** the value of the property, or `default_value` if it is not set or
not a float property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46939).

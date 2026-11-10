---
title: "SDLContext.RawApi — Method: GetNumberProperty"
description: "Exact Method: GetNumberProperty contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fb1f187e4a9b5ff1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetNumberProperty

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumberProperty`

<a id="api-ff16d48dc2f61df5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetNumberProperty(System.UInt32,System.SByte*,System.Int64) 954bc5a4107e884694544a9a8b06989b2824d44bfcf61db0ce54e602f1d6b7d4 -->

```csharp
public long Inno.Native.Sdl3.SDLContext.RawApi.GetNumberProperty(uint props, sbyte* name, long default_value)
```

Get a number property from a group of properties.
You can use SDL_GetPropertyType() to query whether the property exists and
is a number property.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPropertyType

**See also:** SDL_HasProperty

**See also:** SDL_SetNumberProperty

**Parameter `props`:** the properties to query.

**Parameter `name`:** the name of the property to query.

**Parameter `default_value`:** the default value of the property.

**Returns:** the value of the property, or `default_value` if it is not set or
not a number property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37297).

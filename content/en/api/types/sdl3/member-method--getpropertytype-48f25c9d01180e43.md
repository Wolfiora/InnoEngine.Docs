---
title: "SDLContext.RawApi — Method: GetPropertyType"
description: "Exact Method: GetPropertyType contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.48f25c9d01180e43
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetPropertyType

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPropertyType`

<a id="api-43bb4e7195b2b3b3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetPropertyType(System.UInt32,System.SByte*) 4c6029b79e8008fcec0573a117769a210c505777911429051efec47d09e4fdb9 -->

```csharp
public Inno.Native.Sdl3.SDLPropertyType Inno.Native.Sdl3.SDLContext.RawApi.GetPropertyType(uint props, sbyte* name)
```

Get the type of a property in a group of properties.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasProperty

**Parameter `props`:** the properties to query.

**Parameter `name`:** the name of the property to query.

**Returns:** the type of the property, or SDL_PROPERTY_TYPE_INVALID if it is
not set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43001).

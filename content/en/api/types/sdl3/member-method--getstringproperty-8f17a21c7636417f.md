---
title: "SDLContext.RawApi — Method: GetStringProperty"
description: "Exact Method: GetStringProperty contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8f17a21c7636417f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetStringProperty

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetStringProperty`

<a id="api-bb43487c3eb78582"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetStringProperty(System.UInt32,System.SByte*,System.SByte*) 4cb0d4980ffa90224ce1dc4852c19211d4d089de6d9994e0f0f4caab53f107b1 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetStringProperty(uint props, sbyte* name, sbyte* default_value)
```

Get a string property from a group of properties.

**Thread safety:** It is safe to call this function from any thread, although
the data returned is not protected and could potentially be
freed if you call SDL_SetStringProperty() or
SDL_ClearProperty() on these properties from another thread.
If you need to avoid this, use SDL_LockProperties() and
SDL_UnlockProperties().

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPropertyType

**See also:** SDL_HasProperty

**See also:** SDL_SetStringProperty

**Parameter `props`:** the properties to query.

**Parameter `name`:** the name of the property to query.

**Parameter `default_value`:** the default value of the property.

**Returns:** the value of the property, or `default_value` if it is not set or
not a string property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33159).

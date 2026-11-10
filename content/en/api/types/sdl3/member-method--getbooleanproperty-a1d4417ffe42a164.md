---
title: "SDLContext.RawApi — Method: GetBooleanProperty"
description: "Exact Method: GetBooleanProperty contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a1d4417ffe42a164
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetBooleanProperty

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetBooleanProperty`

<a id="api-b60307ce919d765f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetBooleanProperty(System.UInt32,System.SByte*,System.Byte) 6412ef05c8008efd300d8a7a492367e54a766de2c1eb28cc8067a311c0f8c236 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetBooleanProperty(uint props, sbyte* name, byte default_value)
```

Get a boolean property from a group of properties.
You can use SDL_GetPropertyType() to query whether the property exists and
is a boolean property.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPropertyType

**See also:** SDL_HasProperty

**See also:** SDL_SetBooleanProperty

**Parameter `props`:** the properties to query.

**Parameter `name`:** the name of the property to query.

**Parameter `default_value`:** the default value of the property.

**Returns:** the value of the property, or `default_value` if it is not set or
not a boolean property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17290).

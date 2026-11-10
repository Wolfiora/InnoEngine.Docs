---
title: "SDLContext.RawApi — Method: HasProperty"
description: "Exact Method: HasProperty contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.80d7c17632519a87
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasProperty

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasProperty`

<a id="api-dd2981060dab2530"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasProperty(System.UInt32,System.SByte*) 3d9ab5e619d922ed0e65c7d18ad41002e2a02e4fb48b44a6fa1ea0c88423a419 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasProperty(uint props, sbyte* name)
```

Return whether a property exists in a group of properties.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPropertyType

**Parameter `props`:** the properties to query.

**Parameter `name`:** the name of the property to query.

**Returns:** true if the property exists, or false if it doesn't.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28473).

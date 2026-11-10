---
title: "SDLContext.RawApi — Method: SetPointerProperty"
description: "Exact Method: SetPointerProperty contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.62c66f6de475b897
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetPointerProperty

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetPointerProperty`

<a id="api-a72117761eea1467"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetPointerProperty(System.UInt32,System.SByte*,System.Void*) d53b95396d333778004b9f8c5f4b1e5164549f5caf0333d8eda8e1808d5877f6 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetPointerProperty(uint props, sbyte* name, void* value)
```

Set a pointer property in a group of properties.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPointerProperty

**See also:** SDL_HasProperty

**See also:** SDL_SetBooleanProperty

**See also:** SDL_SetFloatProperty

**See also:** SDL_SetNumberProperty

**See also:** SDL_SetPointerPropertyWithCleanup

**See also:** SDL_SetStringProperty

**Parameter `props`:** the properties to modify.

**Parameter `name`:** the name of the property to modify.

**Parameter `value`:** the new value of the property, or NULL to delete the property.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50559).

---
title: "SDLContext — Method: SetBooleanProperty"
description: "Exact Method: SetBooleanProperty contracts in SDLContext."
uid: api.inno.native.sdl3.19a7bb2f2281aba2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: SetBooleanProperty

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetBooleanProperty`

<a id="api-e8acfdefcbe98526"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.SetBooleanProperty(System.UInt32,System.String,System.Boolean) 7730d26c31614b986d7c656a568e0b0f06d877a482aeac36c51c42155269f9bf -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.SetBooleanProperty(uint props, string name, bool value)
```

Set a boolean property in a group of properties.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetBooleanProperty

**Parameter `props`:** the properties to modify.

**Parameter `name`:** the name of the property to modify.

**Parameter `value`:** the new value of the property.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16142).

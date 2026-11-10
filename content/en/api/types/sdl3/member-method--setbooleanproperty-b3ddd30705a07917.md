---
title: "SDL — Method: SetBooleanProperty"
description: "Exact Method: SetBooleanProperty contracts in SDL."
uid: api.inno.native.sdl3.b3ddd30705a07917
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: SetBooleanProperty

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetBooleanProperty`

<a id="api-3acce73fb9031fe1"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.SetBooleanProperty(System.UInt32,System.String,System.Boolean) 33f81d5626336826e026e89026c82ecf8d7a18bd14495b2d2b565f41ce0aa28b -->

```csharp
public static bool Inno.Native.Sdl3.SDL.SetBooleanProperty(uint props, string name, bool value)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3942).

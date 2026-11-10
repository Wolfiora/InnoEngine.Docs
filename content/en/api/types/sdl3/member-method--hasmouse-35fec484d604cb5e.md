---
title: "SDL — Method: HasMouse"
description: "Exact Method: HasMouse contracts in SDL."
uid: api.inno.native.sdl3.35fec484d604cb5e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasMouse

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasMouse`

<a id="api-eb22d57c4c3705e7"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasMouse 3303bba1271438c3a037784077ba5e576535e7503517c4e7d478544887958cd0 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasMouse()
```

Return whether a mouse is currently connected.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetMice

**Returns:** true if a mouse is connected, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3847).

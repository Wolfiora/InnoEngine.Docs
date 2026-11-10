---
title: "SDL — Method: GlResetAttributes"
description: "Exact Method: GlResetAttributes contracts in SDL."
uid: api.inno.native.sdl3.fdd9ee7f6576f2d6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GlResetAttributes

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlResetAttributes`

<a id="api-f9d7ebd3ce04555d"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GlResetAttributes 8191ff28ed5b1622666ae177d1648e338bed2b02564c35e1dc4d8a3ae0efa9a9 -->

```csharp
public static void Inno.Native.Sdl3.SDL.GlResetAttributes()
```

Reset all previously set OpenGL context attributes to their default values.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GL_GetAttribute

**See also:** SDL_GL_SetAttribute


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3225).

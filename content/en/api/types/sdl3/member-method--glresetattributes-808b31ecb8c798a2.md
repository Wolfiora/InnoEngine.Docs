---
title: "SDLContext — Method: GlResetAttributes"
description: "Exact Method: GlResetAttributes contracts in SDLContext."
uid: api.inno.native.sdl3.808b31ecb8c798a2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GlResetAttributes

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlResetAttributes`

<a id="api-a7b5abad706214b1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GlResetAttributes 3b8b5013e51507d4fb298a5aa4cf630a7e7efe0bfc7d76673760997b24cc5d88 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.GlResetAttributes()
```

Reset all previously set OpenGL context attributes to their default values.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GL_GetAttribute

**See also:** SDL_GL_SetAttribute


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15273).

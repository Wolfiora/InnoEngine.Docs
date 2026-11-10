---
title: "SDLContext.RawApi — Method: GlGetCurrentContext"
description: "Exact Method: GlGetCurrentContext contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b12ef2bc093cdb7c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GlGetCurrentContext

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlGetCurrentContext`

<a id="api-f90026d75d3e8c1f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GlGetCurrentContext 0b32da8a63effe388fc13e9d42c2de2aee5080d6ffc5969fad12c7b1fb5d5954 -->

```csharp
public Inno.Native.Sdl3.SDLGLContextState* Inno.Native.Sdl3.SDLContext.RawApi.GlGetCurrentContext()
```

Get the currently active OpenGL context.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GL_MakeCurrent

**Returns:** the currently active OpenGL context or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50119).

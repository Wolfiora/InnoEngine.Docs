---
title: "SDLContext.RawApi — Method: GlMakeCurrent"
description: "Exact Method: GlMakeCurrent contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9dda4dd09d809166
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GlMakeCurrent

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlMakeCurrent`

<a id="api-88e464a48f4d0543"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GlMakeCurrent(Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLGLContextState*) 6fd3f4fce19ee429c382aa04c877fbcaa95a0f8f930c1ee7c5b6352cdb354dff -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GlMakeCurrent(Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLGLContextState* context)
```

Set up an OpenGL context for rendering into an OpenGL window.
The context must have been created with a compatible window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GL_CreateContext

**Parameter `window`:** the window to associate with the context.

**Parameter `context`:** the OpenGL context to associate with the window.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38226).

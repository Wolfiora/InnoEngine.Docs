---
title: "SDLContext.RawApi — Method: GlCreateContext"
description: "Exact Method: GlCreateContext contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.923b7450f7a0bff5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GlCreateContext

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlCreateContext`

<a id="api-c98bc520a0afaa56"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GlCreateContext(Inno.Native.Sdl3.SDLWindow*) fd5c0b55b64374195018fada9b9888429e5718bee982289817c88b3b06d473c1 -->

```csharp
public Inno.Native.Sdl3.SDLGLContextState* Inno.Native.Sdl3.SDLContext.RawApi.GlCreateContext(Inno.Native.Sdl3.SDLWindow* window)
```

Create an OpenGL context for an OpenGL window, and make it current.
The OpenGL context will be created with the current states set through
SDL_GL_SetAttribute().
The SDL_Window specified must have been created with the SDL_WINDOW_OPENGL
flag, or context creation will fail.
Windows users new to OpenGL should note that, for historical reasons, GL
functions added after OpenGL version 1.1 are not available by default.
Those functions must be loaded at run-time, either with an OpenGL
extension-handling library or with SDL_GL_GetProcAddress() and its related
functions.
SDL_GLContext is opaque to the application.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GL_DestroyContext

**See also:** SDL_GL_MakeCurrent

**Parameter `window`:** the window to associate with the context.

**Returns:** the OpenGL context associated with `window` or NULL on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21259).

---
title: "SDLContext.RawApi — Method: GlLoadLibrary"
description: "Exact Method: GlLoadLibrary contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.39798d5cf72608a0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GlLoadLibrary

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlLoadLibrary`

<a id="api-5d8414fdb673370b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GlLoadLibrary(System.SByte*) 4fab8e30c620eb43e35e2496fa62ed0ad49cda21ffed2038e25b7f52f8465f6b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GlLoadLibrary(sbyte* path)
```

Dynamically load an OpenGL library.
This should be done after initializing the video driver, but before
creating any OpenGL windows. If no OpenGL library is loaded, the default
library will be loaded upon creation of the first OpenGL window.
If you do this, you need to retrieve all of the GL functions used in your
program from the dynamic library using SDL_GL_GetProcAddress().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GL_GetProcAddress

**See also:** SDL_GL_UnloadLibrary

**Parameter `path`:** the platform dependent OpenGL library name, or NULL to open the
default OpenGL library.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21794).

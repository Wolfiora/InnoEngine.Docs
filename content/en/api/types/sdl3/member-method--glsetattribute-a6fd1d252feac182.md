---
title: "SDLContext — Method: GlSetAttribute"
description: "Exact Method: GlSetAttribute contracts in SDLContext."
uid: api.inno.native.sdl3.a6fd1d252feac182
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GlSetAttribute

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlSetAttribute`

<a id="api-459b54379ea20e1c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GlSetAttribute(Inno.Native.Sdl3.SDLGLAttr,System.Int32) 470279ce0e9733041d5ffa7ea1dbb08c798ca3df36522fe2b8c9c0211105e8ac -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.GlSetAttribute(Inno.Native.Sdl3.SDLGLAttr attr, int value)
```

Set an OpenGL window attribute before window creation.
This function sets the OpenGL attribute `attr` to `value`. The requested
attributes should be set before creating an OpenGL window. You should use
SDL_GL_GetAttribute() to check the values after creating the OpenGL
context, since the values obtained can differ from the requested ones.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GL_CreateContext

**See also:** SDL_GL_GetAttribute

**See also:** SDL_GL_ResetAttributes

**Parameter `attr`:** an enum value specifying the OpenGL attribute to set.

**Parameter `value`:** the desired value for the attribute.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13661).

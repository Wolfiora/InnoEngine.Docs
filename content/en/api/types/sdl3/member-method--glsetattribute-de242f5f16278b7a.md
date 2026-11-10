---
title: "SDLContext.RawApi — Method: GlSetAttribute"
description: "Exact Method: GlSetAttribute contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.de242f5f16278b7a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GlSetAttribute

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlSetAttribute`

<a id="api-d826e9796d0fda31"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GlSetAttribute(Inno.Native.Sdl3.SDLGLAttr,System.Int32) 77e3ac11321132134a47d237b7acf249f2bc64f21baf82805eb36d942847d00b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GlSetAttribute(Inno.Native.Sdl3.SDLGLAttr attr, int value)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32471).

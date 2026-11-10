---
title: "SDLContext.RawApi — Method: GlGetAttribute"
description: "Exact Method: GlGetAttribute contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0a1aa38b03a2bcff
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GlGetAttribute

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlGetAttribute`

<a id="api-d9f3c4a0c65152cb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GlGetAttribute(Inno.Native.Sdl3.SDLGLAttr,System.Int32*) 59ffafaa3a81cfd5ba02785e61c5c7f73ddc45572854096d45cb68c885bd01ae -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GlGetAttribute(Inno.Native.Sdl3.SDLGLAttr attr, int* value)
```

Get the actual value for an attribute from the current context.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GL_ResetAttributes

**See also:** SDL_GL_SetAttribute

**Parameter `attr`:** an SDL_GLAttr enum value specifying the OpenGL attribute to
get.

**Parameter `value`:** a pointer filled in with the current value of `attr`.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50585).

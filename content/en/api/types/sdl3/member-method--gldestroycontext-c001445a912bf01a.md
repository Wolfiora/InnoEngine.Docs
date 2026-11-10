---
title: "SDLContext.RawApi — Method: GlDestroyContext"
description: "Exact Method: GlDestroyContext contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c001445a912bf01a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GlDestroyContext

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlDestroyContext`

<a id="api-53bbabba2bdabed1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GlDestroyContext(Inno.Native.Sdl3.SDLGLContextState*) 2c7ae89b162f0416250c9763a4c4c7a955bae2a5104fdc066c01d5bec9f6dff9 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GlDestroyContext(Inno.Native.Sdl3.SDLGLContextState* context)
```

Delete an OpenGL context.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GL_CreateContext

**Parameter `context`:** the OpenGL context to be deleted.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51965).

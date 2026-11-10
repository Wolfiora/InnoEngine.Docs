---
title: "SDLContext.RawApi — Method: GlResetAttributes"
description: "Exact Method: GlResetAttributes contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.201bb97c166e88ae
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GlResetAttributes

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlResetAttributes`

<a id="api-2d3e89e96a8d8c26"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GlResetAttributes b4de392072e7d57e42c56ba63a01ca43824c2e35051a44587a1192e37002fd83 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.GlResetAttributes()
```

Reset all previously set OpenGL context attributes to their default values.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GL_GetAttribute

**See also:** SDL_GL_SetAttribute


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42865).

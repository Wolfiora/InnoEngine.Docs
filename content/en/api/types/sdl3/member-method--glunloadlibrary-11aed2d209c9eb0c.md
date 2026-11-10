---
title: "SDLContext — Method: GlUnloadLibrary"
description: "Exact Method: GlUnloadLibrary contracts in SDLContext."
uid: api.inno.native.sdl3.11aed2d209c9eb0c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GlUnloadLibrary

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlUnloadLibrary`

<a id="api-97aa90f992477b53"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GlUnloadLibrary 005db8396926b0c4c5a486c1daeda1a1978f9380ab64a14fdbef2c780a1ab520 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.GlUnloadLibrary()
```

Unload the OpenGL library previously loaded by SDL_GL_LoadLibrary().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GL_LoadLibrary


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15618).

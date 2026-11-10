---
title: "SDLContext.RawApi — Method: GlUnloadLibrary"
description: "Exact Method: GlUnloadLibrary contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.739f130ee5462dac
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GlUnloadLibrary

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlUnloadLibrary`

<a id="api-5ebb51c50d54bf2c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GlUnloadLibrary 35b18d031a67b540bea998b8d8eed06b621269a89457c15fa8c1aaba7444345a -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.GlUnloadLibrary()
```

Unload the OpenGL library previously loaded by SDL_GL_LoadLibrary().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GL_LoadLibrary


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45250).

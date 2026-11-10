---
title: "SDL — Method: GlUnloadLibrary"
description: "Exact Method: GlUnloadLibrary contracts in SDL."
uid: api.inno.native.sdl3.4515308dc7087114
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GlUnloadLibrary

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlUnloadLibrary`

<a id="api-47de807a10cee0fd"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GlUnloadLibrary f0f0b5187120710c8420ddc0d9e829981923a83031e7aeff46223467990e7de6 -->

```csharp
public static void Inno.Native.Sdl3.SDL.GlUnloadLibrary()
```

Unload the OpenGL library previously loaded by SDL_GL_LoadLibrary().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GL_LoadLibrary


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3514).

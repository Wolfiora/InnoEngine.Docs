---
title: "SDLContext.RawApi — Method: CreateSurface"
description: "Exact Method: CreateSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0fec25ee9bec14b7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateSurface`

<a id="api-552e9a9ce3509231"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateSurface(System.Int32,System.Int32,Inno.Native.Sdl3.SDLPixelFormat) 69873bdcfe07a298fe7f81b70a4b762fb0db036c28f1216bcee2cc71ed3d2b4f -->

```csharp
public Inno.Native.Sdl3.SDLSurface* Inno.Native.Sdl3.SDLContext.RawApi.CreateSurface(int width, int height, Inno.Native.Sdl3.SDLPixelFormat format)
```

Allocate a new surface with a specific pixel format.
The pixels of the new surface are initialized to zero.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateSurfaceFrom

**See also:** SDL_DestroySurface

**Parameter `width`:** the width of the surface.

**Parameter `height`:** the height of the surface.

**Parameter `format`:** the SDL_PixelFormat for the new surface's pixel format.

**Returns:** the new SDL_Surface structure that is created or NULL on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43443).

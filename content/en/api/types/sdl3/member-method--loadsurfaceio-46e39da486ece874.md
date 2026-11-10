---
title: "SDLContext.RawApi — Method: LoadSurfaceIo"
description: "Exact Method: LoadSurfaceIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.46e39da486ece874
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LoadSurfaceIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LoadSurfaceIo`

<a id="api-76abdf72810646a9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LoadSurfaceIo(Inno.Native.Sdl3.SDLIOStream*,System.Byte) 4b9bfa4c95ca6da4e0c99addcd41ef1cfccf63d113d7b2c3c2fc827ad4c19f79 -->

```csharp
public Inno.Native.Sdl3.SDLSurface* Inno.Native.Sdl3.SDLContext.RawApi.LoadSurfaceIo(Inno.Native.Sdl3.SDLIOStream* src, byte closeio)
```

Load a BMP or PNG image from a seekable SDL data stream.
The new surface should be freed with SDL_DestroySurface(). Not doing so
will result in a memory leak.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_DestroySurface

**See also:** SDL_LoadSurface

**Parameter `src`:** the data stream for the surface.

**Parameter `closeio`:** if true, calls SDL_CloseIO() on `src` before returning, even
in the case of an error.

**Returns:** a pointer to a new SDL_Surface structure or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20706).

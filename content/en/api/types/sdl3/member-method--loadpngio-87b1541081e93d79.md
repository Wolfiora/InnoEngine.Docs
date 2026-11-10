---
title: "SDLContext.RawApi — Method: LoadPngIo"
description: "Exact Method: LoadPngIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.87b1541081e93d79
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LoadPngIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LoadPngIo`

<a id="api-f1c8ed20958ad3fb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LoadPngIo(Inno.Native.Sdl3.SDLIOStream*,System.Byte) f773ac49cd182abe5e02198f35285c06a6dc46fa2b867d771b4d60bfd452aa6f -->

```csharp
public Inno.Native.Sdl3.SDLSurface* Inno.Native.Sdl3.SDLContext.RawApi.LoadPngIo(Inno.Native.Sdl3.SDLIOStream* src, byte closeio)
```

Load a PNG image from a seekable SDL data stream.
This is intended as a convenience function for loading images from trusted
sources. If you want to load arbitrary images you should use libpng or
another image loading library designed with security in mind.
The new surface should be freed with SDL_DestroySurface(). Not doing so
will result in a memory leak.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_DestroySurface

**See also:** SDL_LoadPNG

**See also:** SDL_SavePNG_IO

**Parameter `src`:** the data stream for the surface.

**Parameter `closeio`:** if true, calls SDL_CloseIO() on `src` before returning, even
in the case of an error.

**Returns:** a pointer to a new SDL_Surface structure or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33922).

---
title: "SDLContext.RawApi — Method: SavePngIo"
description: "Exact Method: SavePngIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4b16b13e60c54c6b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SavePngIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SavePngIo`

<a id="api-90e4c2511be35b70"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SavePngIo(Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLIOStream*,System.Byte) 8c9e88af7267896f3b6b31059c3951cff723f9941cefe074fa4316a17336e3e2 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SavePngIo(Inno.Native.Sdl3.SDLSurface* surface, Inno.Native.Sdl3.SDLIOStream* dst, byte closeio)
```

Save a surface to a seekable SDL data stream in PNG format.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_LoadPNG_IO

**See also:** SDL_SavePNG

**Parameter `surface`:** the SDL_Surface structure containing the image to be saved.

**Parameter `dst`:** a data stream to save to.

**Parameter `closeio`:** if true, calls SDL_CloseIO() on `dst` before returning, even
in the case of an error.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36854).

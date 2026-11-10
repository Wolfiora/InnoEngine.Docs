---
title: "SDLContext.RawApi — Method: SaveBmpIo"
description: "Exact Method: SaveBmpIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1aecc6da798ddc19
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SaveBmpIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SaveBmpIo`

<a id="api-b152750be1ac2352"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SaveBmpIo(Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLIOStream*,System.Byte) c869ec37b5458b618d4d69898fadab9e63dcc6adb759ef3f590827a5d48e1b4b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SaveBmpIo(Inno.Native.Sdl3.SDLSurface* surface, Inno.Native.Sdl3.SDLIOStream* dst, byte closeio)
```

Save a surface to a seekable SDL data stream in BMP format.
Surfaces with a 24-bit, 32-bit and paletted 8-bit format get saved in the
BMP directly. Other RGB formats with 8-bit or higher get converted to a
24-bit surface or, if they have an alpha mask or a colorkey, to a 32-bit
surface before they are saved. YUV and paletted 1-bit and 4-bit formats are
not supported.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LoadBMP_IO

**See also:** SDL_SaveBMP

**Parameter `surface`:** the SDL_Surface structure containing the image to be saved.

**Parameter `dst`:** a data stream to save to.

**Parameter `closeio`:** if true, calls SDL_CloseIO() on `dst` before returning, even
in the case of an error.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29517).

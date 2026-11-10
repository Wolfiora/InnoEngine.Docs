---
title: "SDLContext.RawApi — Method: SaveBmp"
description: "Exact Method: SaveBmp contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.083de488d5081186
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SaveBmp

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SaveBmp`

<a id="api-9e25ff1e63e22463"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SaveBmp(Inno.Native.Sdl3.SDLSurface*,System.SByte*) d876314520088a920b0064a38957a230ba08d2b14e04eb7af62e228986deb0be -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SaveBmp(Inno.Native.Sdl3.SDLSurface* surface, sbyte* file)
```

Save a surface to a file in BMP format.
Surfaces with a 24-bit, 32-bit and paletted 8-bit format get saved in the
BMP directly. Other RGB formats with 8-bit or higher get converted to a
24-bit surface or, if they have an alpha mask or a colorkey, to a 32-bit
surface before they are saved. YUV and paletted 1-bit and 4-bit formats are
not supported.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LoadBMP

**See also:** SDL_SaveBMP_IO

**Parameter `surface`:** the SDL_Surface structure containing the image to be saved.

**Parameter `file`:** a file to save to.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32918).

---
title: "SDLContext.RawApi — Method: BlitSurfaceTiledWithScale"
description: "Exact Method: BlitSurfaceTiledWithScale contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.cb1b21fd6b7ecf67
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BlitSurfaceTiledWithScale

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BlitSurfaceTiledWithScale`

<a id="api-87e34a8c674abaea"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BlitSurfaceTiledWithScale(Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLRect*,System.Single,Inno.Native.Sdl3.SDLScaleMode,Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLRect*) fa36c35a4a32c0572f000ad0adb1ce33c0d99ad0481a67343a744e4084fe85d3 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.BlitSurfaceTiledWithScale(Inno.Native.Sdl3.SDLSurface* src, Inno.Native.Sdl3.SDLRect* srcrect, float scale, Inno.Native.Sdl3.SDLScaleMode scaleMode, Inno.Native.Sdl3.SDLSurface* dst, Inno.Native.Sdl3.SDLRect* dstrect)
```

Perform a scaled and tiled blit to a destination surface, which may be of a
different format.
The pixels in `srcrect` will be scaled and repeated as many times as needed
to completely fill `dstrect`.

**Thread safety:** Only one thread should be using the `src` and `dst` surfaces
at any given time.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BlitSurface

**Parameter `src`:** the SDL_Surface structure to be copied from.

**Parameter `srcrect`:** the SDL_Rect structure representing the rectangle to be
copied, or NULL to copy the entire surface.

**Parameter `scale`:** the scale used to transform srcrect into the destination
rectangle, e.g. a 32x32 texture with a scale of 2 would fill
64x64 tiles.

**Parameter `scaleMode`:** scale algorithm to be used.

**Parameter `dst`:** the SDL_Surface structure that is the blit target.

**Parameter `dstrect`:** the SDL_Rect structure representing the target rectangle in
the destination surface, or NULL to fill the entire surface.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31387).

---
title: "SDLContext.RawApi — Method: BlitSurface9Grid"
description: "Exact Method: BlitSurface9Grid contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f77fcf31df6e89cf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BlitSurface9Grid

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BlitSurface9Grid`

<a id="api-77acc0a40d009d78"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BlitSurface9Grid(Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLRect*,System.Int32,System.Int32,System.Int32,System.Int32,System.Single,Inno.Native.Sdl3.SDLScaleMode,Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLRect*) eb91b41da2549c34c5d11e477cf01cdae64ff902a74157f7803dac324b1365d0 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.BlitSurface9Grid(Inno.Native.Sdl3.SDLSurface* src, Inno.Native.Sdl3.SDLRect* srcrect, int left_width, int right_width, int top_height, int bottom_height, float scale, Inno.Native.Sdl3.SDLScaleMode scaleMode, Inno.Native.Sdl3.SDLSurface* dst, Inno.Native.Sdl3.SDLRect* dstrect)
```

Perform a scaled blit using the 9-grid algorithm to a destination surface,
which may be of a different format.
The pixels in the source surface are split into a 3x3 grid, using the
different corner sizes for each corner, and the sides and center making up
the remaining pixels. The corners are then scaled using `scale` and fit
into the corners of the destination rectangle. The sides and center are
then stretched into place to cover the remaining destination rectangle.

**Thread safety:** Only one thread should be using the `src` and `dst` surfaces
at any given time.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BlitSurface

**Parameter `src`:** the SDL_Surface structure to be copied from.

**Parameter `srcrect`:** the SDL_Rect structure representing the rectangle to be used
for the 9-grid, or NULL to use the entire surface.

**Parameter `left_width`:** the width, in pixels, of the left corners in `srcrect`.

**Parameter `right_width`:** the width, in pixels, of the right corners in `srcrect`.

**Parameter `top_height`:** the height, in pixels, of the top corners in `srcrect`.

**Parameter `bottom_height`:** the height, in pixels, of the bottom corners in
`srcrect`.

**Parameter `scale`:** the scale used to transform the corner of `srcrect` into the
corner of `dstrect`, or 0.0f for an unscaled blit.

**Parameter `scaleMode`:** scale algorithm to be used.

**Parameter `dst`:** the SDL_Surface structure that is the blit target.

**Parameter `dstrect`:** the SDL_Rect structure representing the target rectangle in
the destination surface, or NULL to fill the entire surface.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51739).

---
title: "SDLContext.RawApi — Method: BlitSurface"
description: "Exact Method: BlitSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1b1d08c77412fbeb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BlitSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BlitSurface`

<a id="api-2f1f3abda1c192af"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BlitSurface(Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLRect*,Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLRect*) f74e56a11fbd84d0950580d139cf77f6f11a892c2b18766419a54a266fca461d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.BlitSurface(Inno.Native.Sdl3.SDLSurface* src, Inno.Native.Sdl3.SDLRect* srcrect, Inno.Native.Sdl3.SDLSurface* dst, Inno.Native.Sdl3.SDLRect* dstrect)
```

Performs a fast blit from the source surface to the destination surface
with clipping.
If either `srcrect` or `dstrect` are NULL, the entire surface (`src` or
`dst`) is copied while ensuring clipping to `dst->clip_rect`.
The blit function should not be called on a locked surface.
The blit semantics for surfaces with and without blending and colorkey are
defined as follows:
```
RGBA->RGB:
Source surface blend mode set to SDL_BLENDMODE_BLEND:
alpha-blend (using the source alpha-channel and per-surface alpha)
SDL_SRCCOLORKEY ignored.
Source surface blend mode set to SDL_BLENDMODE_NONE:
copy RGB.
if SDL_SRCCOLORKEY set, only copy the pixels that do not match the
RGB values of the source color key, ignoring alpha in the
comparison.
RGB->RGBA:
Source surface blend mode set to SDL_BLENDMODE_BLEND:
alpha-blend (using the source per-surface alpha)
Source surface blend mode set to SDL_BLENDMODE_NONE:
copy RGB, set destination alpha to source per-surface alpha value.
both:
if SDL_SRCCOLORKEY set, only copy the pixels that do not match the
source color key.
RGBA->RGBA:
Source surface blend mode set to SDL_BLENDMODE_BLEND:
alpha-blend (using the source alpha-channel and per-surface alpha)
SDL_SRCCOLORKEY ignored.
Source surface blend mode set to SDL_BLENDMODE_NONE:
copy all of RGBA to the destination.
if SDL_SRCCOLORKEY set, only copy the pixels that do not match the
RGB values of the source color key, ignoring alpha in the
comparison.
RGB->RGB:
Source surface blend mode set to SDL_BLENDMODE_BLEND:
alpha-blend (using the source per-surface alpha)
Source surface blend mode set to SDL_BLENDMODE_NONE:
copy RGB.
both:
if SDL_SRCCOLORKEY set, only copy the pixels that do not match the
source color key.
```

**Thread safety:** Only one thread should be using the `src` and `dst` surfaces
at any given time.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BlitSurfaceScaled

**Parameter `src`:** the SDL_Surface structure to be copied from.

**Parameter `srcrect`:** the SDL_Rect structure representing the rectangle to be
copied, or NULL to copy the entire surface.

**Parameter `dst`:** the SDL_Surface structure that is the blit target.

**Parameter `dstrect`:** the SDL_Rect structure representing the x and y position in
the destination surface, or NULL for (0,0). The width and
height are ignored, and are copied from `srcrect`. If you
want a specific width and height, you should use
SDL_BlitSurfaceScaled().

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44655).

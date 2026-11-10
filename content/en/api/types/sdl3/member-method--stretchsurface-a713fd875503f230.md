---
title: "SDLContext.RawApi — Method: StretchSurface"
description: "Exact Method: StretchSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a713fd875503f230
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: StretchSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `StretchSurface`

<a id="api-bf968ea08aca9202"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.StretchSurface(Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLRect*,Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLRect*,Inno.Native.Sdl3.SDLScaleMode) ae68981c06e01add7b1a1525bf5e4ea687c412ade200cf940b6755b5504b9d05 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.StretchSurface(Inno.Native.Sdl3.SDLSurface* src, Inno.Native.Sdl3.SDLRect* srcrect, Inno.Native.Sdl3.SDLSurface* dst, Inno.Native.Sdl3.SDLRect* dstrect, Inno.Native.Sdl3.SDLScaleMode scaleMode)
```

Perform a stretched pixel copy from one surface to another.

**Thread safety:** Only one thread should be using the `src` and `dst` surfaces
at any given time.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_BlitSurfaceScaled

**Parameter `src`:** the SDL_Surface structure to be copied from.

**Parameter `srcrect`:** the SDL_Rect structure representing the rectangle to be
copied, or NULL to copy the entire surface.

**Parameter `dst`:** the SDL_Surface structure that is the blit target.

**Parameter `dstrect`:** the SDL_Rect structure representing the target rectangle in
the destination surface, or NULL to fill the entire
destination surface.

**Parameter `scaleMode`:** the SDL_ScaleMode to be used.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49694).

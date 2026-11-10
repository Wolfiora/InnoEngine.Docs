---
title: "SDLContext.RawApi — Method: BlitSurfaceScaled"
description: "Exact Method: BlitSurfaceScaled contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4eb710b8bfe5df9e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BlitSurfaceScaled

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BlitSurfaceScaled`

<a id="api-061cbb7c36a2a747"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BlitSurfaceScaled(Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLRect*,Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLRect*,Inno.Native.Sdl3.SDLScaleMode) 8d37391ff4e768f9d203bc1864dd9e627130407bcde45757717879a298127872 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.BlitSurfaceScaled(Inno.Native.Sdl3.SDLSurface* src, Inno.Native.Sdl3.SDLRect* srcrect, Inno.Native.Sdl3.SDLSurface* dst, Inno.Native.Sdl3.SDLRect* dstrect, Inno.Native.Sdl3.SDLScaleMode scaleMode)
```

Perform a scaled blit to a destination surface, which may be of a different
format.

**Thread safety:** Only one thread should be using the `src` and `dst` surfaces
at any given time.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BlitSurface

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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49657).

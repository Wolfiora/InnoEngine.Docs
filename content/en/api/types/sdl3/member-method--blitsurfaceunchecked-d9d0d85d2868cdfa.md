---
title: "SDLContext.RawApi — Method: BlitSurfaceUnchecked"
description: "Exact Method: BlitSurfaceUnchecked contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d9d0d85d2868cdfa
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BlitSurfaceUnchecked

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BlitSurfaceUnchecked`

<a id="api-b2b0090ff33ed6f7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BlitSurfaceUnchecked(Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLRect*,Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLRect*) 9d27248c81df8eb8bb5d663bfa138876c800ea292a48c7ddd2aaad7a9a28630d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.BlitSurfaceUnchecked(Inno.Native.Sdl3.SDLSurface* src, Inno.Native.Sdl3.SDLRect* srcrect, Inno.Native.Sdl3.SDLSurface* dst, Inno.Native.Sdl3.SDLRect* dstrect)
```

Perform low-level surface blitting only.
This is a semi-private blit function and it performs low-level surface
blitting, assuming the input rectangles have already been clipped.

**Thread safety:** Only one thread should be using the `src` and `dst` surfaces
at any given time.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BlitSurface

**Parameter `src`:** the SDL_Surface structure to be copied from.

**Parameter `srcrect`:** the SDL_Rect structure representing the rectangle to be
copied, may not be NULL.

**Parameter `dst`:** the SDL_Surface structure that is the blit target.

**Parameter `dstrect`:** the SDL_Rect structure representing the target rectangle in
the destination surface, may not be NULL.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27103).

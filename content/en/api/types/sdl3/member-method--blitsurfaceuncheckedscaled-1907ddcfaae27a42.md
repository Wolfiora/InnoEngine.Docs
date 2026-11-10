---
title: "SDLContext.RawApi — Method: BlitSurfaceUncheckedScaled"
description: "Exact Method: BlitSurfaceUncheckedScaled contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1907ddcfaae27a42
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BlitSurfaceUncheckedScaled

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BlitSurfaceUncheckedScaled`

<a id="api-deb3e739bfb11bfc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BlitSurfaceUncheckedScaled(Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLRect*,Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLRect*,Inno.Native.Sdl3.SDLScaleMode) 752d74d13cbab732c071c041ba60b9b3c992ca683446d64eda4516b8498701b2 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.BlitSurfaceUncheckedScaled(Inno.Native.Sdl3.SDLSurface* src, Inno.Native.Sdl3.SDLRect* srcrect, Inno.Native.Sdl3.SDLSurface* dst, Inno.Native.Sdl3.SDLRect* dstrect, Inno.Native.Sdl3.SDLScaleMode scaleMode)
```

Perform low-level surface scaled blitting only.
This is a semi-private function and it performs low-level surface blitting,
assuming the input rectangles have already been clipped.

**Thread safety:** Only one thread should be using the `src` and `dst` surfaces
at any given time.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BlitSurfaceScaled

**Parameter `src`:** the SDL_Surface structure to be copied from.

**Parameter `srcrect`:** the SDL_Rect structure representing the rectangle to be
copied, may not be NULL.

**Parameter `dst`:** the SDL_Surface structure that is the blit target.

**Parameter `dstrect`:** the SDL_Rect structure representing the target rectangle in
the destination surface, may not be NULL.

**Parameter `scaleMode`:** the SDL_ScaleMode to be used.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47049).

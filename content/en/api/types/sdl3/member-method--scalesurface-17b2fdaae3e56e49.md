---
title: "SDLContext.RawApi — Method: ScaleSurface"
description: "Exact Method: ScaleSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.17b2fdaae3e56e49
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ScaleSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ScaleSurface`

<a id="api-1bb7b79d96a792a1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ScaleSurface(Inno.Native.Sdl3.SDLSurface*,System.Int32,System.Int32,Inno.Native.Sdl3.SDLScaleMode) 44f30bd32940a16303bb1a5c48b3eaae5757785bd9ad784c194a83be95316fe6 -->

```csharp
public Inno.Native.Sdl3.SDLSurface* Inno.Native.Sdl3.SDLContext.RawApi.ScaleSurface(Inno.Native.Sdl3.SDLSurface* surface, int width, int height, Inno.Native.Sdl3.SDLScaleMode scaleMode)
```

Creates a new surface identical to the existing surface, scaled to the
desired size.
The returned surface should be freed with SDL_DestroySurface().

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DestroySurface

**Parameter `surface`:** the surface to duplicate and scale.

**Parameter `width`:** the width of the new surface.

**Parameter `height`:** the height of the new surface.

**Parameter `scaleMode`:** the SDL_ScaleMode to be used.

**Returns:** a copy of the surface or NULL on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35076).

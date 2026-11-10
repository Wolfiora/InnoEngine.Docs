---
title: "SDLContext.RawApi — Method: ConvertSurface"
description: "Exact Method: ConvertSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.97c36907f0d7733b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ConvertSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ConvertSurface`

<a id="api-e8eaed6b5c030383"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ConvertSurface(Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLPixelFormat) de637f7e82c2925930e5fbfc1573fd8d181f317e2718747c7a2fc4c9e20f68a1 -->

```csharp
public Inno.Native.Sdl3.SDLSurface* Inno.Native.Sdl3.SDLContext.RawApi.ConvertSurface(Inno.Native.Sdl3.SDLSurface* surface, Inno.Native.Sdl3.SDLPixelFormat format)
```

Copy an existing surface to a new surface of the specified format.
This function is used to optimize images for faster *repeat* blitting. This
is accomplished by converting the original and storing the result as a new
surface. The new, optimized surface can then be used as the source for
future blits, making them faster.
If you are converting to an indexed surface and want to map colors to a
palette, you can use SDL_ConvertSurfaceAndColorspace() instead.
If the original surface has alternate images, the new surface will have a
reference to them as well.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ConvertSurfaceAndColorspace

**See also:** SDL_DestroySurface

**Parameter `surface`:** the existing SDL_Surface structure to convert.

**Parameter `format`:** the new pixel format.

**Returns:** the new SDL_Surface structure that is created or NULL on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52814).

---
title: "SDLContext.RawApi — Method: PremultiplySurfaceAlpha"
description: "Exact Method: PremultiplySurfaceAlpha contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7f0da50a55ee674b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: PremultiplySurfaceAlpha

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PremultiplySurfaceAlpha`

<a id="api-ab8f458d16c49b7f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.PremultiplySurfaceAlpha(Inno.Native.Sdl3.SDLSurface*,System.Byte) 962d9c7f98c6e2879b3ad17e81ac789a0ae99722396785f0fbdcdfedb9d27a31 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.PremultiplySurfaceAlpha(Inno.Native.Sdl3.SDLSurface* surface, byte linear)
```

Premultiply the alpha in a surface.
This is safe to use with src == dst, but not for other overlapping areas.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `surface`:** the surface to modify.

**Parameter `linear`:** true to convert from sRGB to linear space for the alpha
multiplication, false to do multiplication in sRGB space.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35418).

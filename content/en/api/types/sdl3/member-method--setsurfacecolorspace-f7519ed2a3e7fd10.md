---
title: "SDLContext.RawApi — Method: SetSurfaceColorspace"
description: "Exact Method: SetSurfaceColorspace contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f7519ed2a3e7fd10
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetSurfaceColorspace

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetSurfaceColorspace`

<a id="api-ca7549cfa7500e0a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetSurfaceColorspace(Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLColorspace) f1033a6493c56cf07ecd924e533d492739135f768872f64c2bc716e7564b1169 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetSurfaceColorspace(Inno.Native.Sdl3.SDLSurface* surface, Inno.Native.Sdl3.SDLColorspace colorspace)
```

Set the colorspace used by a surface.
Setting the colorspace doesn't change the pixels, only how they are
interpreted in color operations.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetSurfaceColorspace

**Parameter `surface`:** the SDL_Surface structure to update.

**Parameter `colorspace`:** an SDL_Colorspace value describing the surface
colorspace.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52019).

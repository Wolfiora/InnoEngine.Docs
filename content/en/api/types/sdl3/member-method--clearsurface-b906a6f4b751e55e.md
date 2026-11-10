---
title: "SDLContext.RawApi — Method: ClearSurface"
description: "Exact Method: ClearSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b906a6f4b751e55e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ClearSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ClearSurface`

<a id="api-4844d2f0608b6fa9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ClearSurface(Inno.Native.Sdl3.SDLSurface*,System.Single,System.Single,System.Single,System.Single) 978789e249690df6a1922b80289e3db325cb22982975a50a2ecfb3ae57aee7c0 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ClearSurface(Inno.Native.Sdl3.SDLSurface* surface, float r, float g, float b, float a)
```

Clear a surface with a specific color, with floating point precision.
This function handles all surface formats, and ignores any clip rectangle.
If the surface is YUV, the color is assumed to be in the sRGB colorspace,
otherwise the color is assumed to be in the colorspace of the surface.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `surface`:** the SDL_Surface to clear.

**Parameter `r`:** the red component of the pixel, normally in the range 0-1.

**Parameter `g`:** the green component of the pixel, normally in the range 0-1.

**Parameter `b`:** the blue component of the pixel, normally in the range 0-1.

**Parameter `a`:** the alpha component of the pixel, normally in the range 0-1.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41045).

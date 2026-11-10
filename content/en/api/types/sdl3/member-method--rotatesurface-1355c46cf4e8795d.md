---
title: "SDLContext.RawApi — Method: RotateSurface"
description: "Exact Method: RotateSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1355c46cf4e8795d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RotateSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RotateSurface`

<a id="api-3738a21474bb835f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RotateSurface(Inno.Native.Sdl3.SDLSurface*,System.Single) 46ffc7b618b10aacf610886fc25613242ff0865586c5b0f970b03aa0b0b4cadf -->

```csharp
public Inno.Native.Sdl3.SDLSurface* Inno.Native.Sdl3.SDLContext.RawApi.RotateSurface(Inno.Native.Sdl3.SDLSurface* surface, float angle)
```

Return a copy of a surface rotated clockwise a number of degrees.
The angle of rotation can be negative for counter-clockwise rotation.
When the rotation isn't a multiple of 90 degrees, the resulting surface is
larger than the original, with the background filled in with the colorkey,
if available, or RGBA 255/255/255/0 if not.
If `surface` has the SDL_PROP_SURFACE_ROTATION_FLOAT property set on it,
the new copy will have the adjusted value set: if the rotation property is
90 and `angle` was 30, the new surface will have a property value of 60
(that is: to be upright vs gravity, this surface needs to rotate 60 more
degrees). However, note that further rotations on the new surface in this
example will produce unexpected results, since the image will have resized
and padded to accommodate the not-90 degree angle.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `surface`:** the surface to rotate.

**Parameter `angle`:** the rotation angle, in degrees.

**Returns:** a rotated copy of the surface or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51232).

---
title: "SDLContext.RawApi — Method: GetSurfaceProperties"
description: "Exact Method: GetSurfaceProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.04fa97958a42e9ec
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSurfaceProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSurfaceProperties`

<a id="api-3ebf6ceaa48df3bd"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSurfaceProperties(Inno.Native.Sdl3.SDLSurface*) d07e8401856f60b8294dd4aa08866c73359e6ccf7b09ba825f5dd3b4373bb513 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetSurfaceProperties(Inno.Native.Sdl3.SDLSurface* surface)
```

Get the properties associated with a surface.
The following properties are understood by SDL:
- `SDL_PROP_SURFACE_SDR_WHITE_POINT_FLOAT`: for HDR10 and floating point
surfaces, this defines the value of 100% diffuse white, with higher
values being displayed in the High Dynamic Range headroom. This defaults
to 203 for HDR10 surfaces and 1.0 for floating point surfaces.
- `SDL_PROP_SURFACE_HDR_HEADROOM_FLOAT`: for HDR10 and floating point
surfaces, this defines the maximum dynamic range used by the content, in
terms of the SDR white point. This defaults to 0.0, which disables tone
mapping.
- `SDL_PROP_SURFACE_TONEMAP_OPERATOR_STRING`: the tone mapping operator
used when compressing from a surface with high dynamic range to another
with lower dynamic range. Currently this supports "chrome", which uses
the same tone mapping that Chrome uses for HDR content, the form "*=N",
where N is a floating point scale factor applied in linear space, and
"none", which disables tone mapping. This defaults to "chrome".
- `SDL_PROP_SURFACE_HOTSPOT_X_NUMBER`: the hotspot pixel offset from the
left edge of the image, if this surface is being used as a cursor.
- `SDL_PROP_SURFACE_HOTSPOT_Y_NUMBER`: the hotspot pixel offset from the
top edge of the image, if this surface is being used as a cursor.
- `SDL_PROP_SURFACE_ROTATION_FLOAT`: the number of degrees a surface's data
is meant to be rotated clockwise to make the image right-side up. Default
0. This is used by the camera API, if a mobile device is oriented
differently than what its camera provides (i.e. - the camera always
provides portrait images but the phone is being held in landscape
orientation). Since SDL 3.4.0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `surface`:** the SDL_Surface structure to query.

**Returns:** a valid property ID on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49134).

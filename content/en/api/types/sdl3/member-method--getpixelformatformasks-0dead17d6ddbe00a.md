---
title: "SDL — Method: GetPixelFormatForMasks"
description: "Exact Method: GetPixelFormatForMasks contracts in SDL."
uid: api.inno.native.sdl3.0dead17d6ddbe00a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetPixelFormatForMasks

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPixelFormatForMasks`

<a id="api-756745e8740bc30b"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetPixelFormatForMasks(System.Int32,System.UInt32,System.UInt32,System.UInt32,System.UInt32) 913ad3e6cf30be46344530fac2a7c256ebf5ac75fd52a4fbadad55cf2b6dbc7b -->

```csharp
public static Inno.Native.Sdl3.SDLPixelFormat Inno.Native.Sdl3.SDL.GetPixelFormatForMasks(int bpp, uint Rmask, uint Gmask, uint Bmask, uint Amask)
```

Convert a bpp value and RGBA masks to an enumerated pixel format.
This will return `SDL_PIXELFORMAT_UNKNOWN` if the conversion wasn't
possible.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetMasksForPixelFormat

**Parameter `bpp`:** a bits per pixel value; usually 15, 16, or 32.

**Parameter `Rmask`:** the red mask for the format.

**Parameter `Gmask`:** the green mask for the format.

**Parameter `Bmask`:** the blue mask for the format.

**Parameter `Amask`:** the alpha mask for the format.

**Returns:** the SDL_PixelFormat value corresponding to the format masks, or
SDL_PIXELFORMAT_UNKNOWN if there isn't a match.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1818).

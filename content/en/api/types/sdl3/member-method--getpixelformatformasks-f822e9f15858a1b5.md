---
title: "SDLContext — Method: GetPixelFormatForMasks"
description: "Exact Method: GetPixelFormatForMasks contracts in SDLContext."
uid: api.inno.native.sdl3.f822e9f15858a1b5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetPixelFormatForMasks

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPixelFormatForMasks`

<a id="api-a753b66da038aa58"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetPixelFormatForMasks(System.Int32,System.UInt32,System.UInt32,System.UInt32,System.UInt32) 4476075cf229cdf9bb4aa518e53ebeae31b9c59424957394f5a366cb17e494d1 -->

```csharp
public Inno.Native.Sdl3.SDLPixelFormat Inno.Native.Sdl3.SDLContext.GetPixelFormatForMasks(int bpp, uint Rmask, uint Gmask, uint Bmask, uint Amask)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13564).

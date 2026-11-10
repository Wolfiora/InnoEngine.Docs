---
title: "SDLContext.RawApi — Method: GetMasksForPixelFormat"
description: "Exact Method: GetMasksForPixelFormat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1610abbfa633b226
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetMasksForPixelFormat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetMasksForPixelFormat`

<a id="api-7b64284be8e88cfa"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetMasksForPixelFormat(Inno.Native.Sdl3.SDLPixelFormat,System.Int32*,System.UInt32*,System.UInt32*,System.UInt32*,System.UInt32*) d92ad28d7b18985ad10ffb0bfe4b26cf0e064254e974d2e241a1c9910976fe6f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetMasksForPixelFormat(Inno.Native.Sdl3.SDLPixelFormat format, int* bpp, uint* Rmask, uint* Gmask, uint* Bmask, uint* Amask)
```

Convert one of the enumerated pixel formats to a bpp value and RGBA masks.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPixelFormatForMasks

**Parameter `format`:** one of the SDL_PixelFormat values.

**Parameter `bpp`:** a bits per pixel value; usually 15, 16, or 32.

**Parameter `Rmask`:** a pointer filled in with the red mask for the format.

**Parameter `Gmask`:** a pointer filled in with the green mask for the format.

**Parameter `Bmask`:** a pointer filled in with the blue mask for the format.

**Parameter `Amask`:** a pointer filled in with the alpha mask for the format.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49333).

---
title: "SDLContext.RawApi — Method: ConvertPixelsAndColorspace"
description: "Exact Method: ConvertPixelsAndColorspace contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a5b306f53885cfec
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ConvertPixelsAndColorspace

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ConvertPixelsAndColorspace`

<a id="api-72d5e458fb807646"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ConvertPixelsAndColorspace(System.Int32,System.Int32,Inno.Native.Sdl3.SDLPixelFormat,Inno.Native.Sdl3.SDLColorspace,System.UInt32,System.Void*,System.Int32,Inno.Native.Sdl3.SDLPixelFormat,Inno.Native.Sdl3.SDLColorspace,System.UInt32,System.Void*,System.Int32) 70a6632d015a937c1ed795246c9abc282aeb80c19a60c7b139864ee73414e6ec -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ConvertPixelsAndColorspace(int width, int height, Inno.Native.Sdl3.SDLPixelFormat src_format, Inno.Native.Sdl3.SDLColorspace src_colorspace, uint src_properties, void* src, int src_pitch, Inno.Native.Sdl3.SDLPixelFormat dst_format, Inno.Native.Sdl3.SDLColorspace dst_colorspace, uint dst_properties, void* dst, int dst_pitch)
```

Copy a block of pixels of one format and colorspace to another format and
colorspace.

**Thread safety:** The same destination pixels should not be used from two
threads at once. It is safe to use the same source pixels
from multiple threads.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ConvertPixels

**Parameter `width`:** the width of the block to copy, in pixels.

**Parameter `height`:** the height of the block to copy, in pixels.

**Parameter `src_format`:** an SDL_PixelFormat value of the `src` pixels format.

**Parameter `src_colorspace`:** an SDL_Colorspace value describing the colorspace of
the `src` pixels.

**Parameter `src_properties`:** an SDL_PropertiesID with additional source color
properties, or 0.

**Parameter `src`:** a pointer to the source pixels.

**Parameter `src_pitch`:** the pitch of the source pixels, in bytes.

**Parameter `dst_format`:** an SDL_PixelFormat value of the `dst` pixels format.

**Parameter `dst_colorspace`:** an SDL_Colorspace value describing the colorspace of
the `dst` pixels.

**Parameter `dst_properties`:** an SDL_PropertiesID with additional destination color
properties, or 0.

**Parameter `dst`:** a pointer to be filled in with new pixel data.

**Parameter `dst_pitch`:** the pitch of the destination pixels, in bytes.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48828).

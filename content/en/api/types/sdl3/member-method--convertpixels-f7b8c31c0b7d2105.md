---
title: "SDLContext.RawApi — Method: ConvertPixels"
description: "Exact Method: ConvertPixels contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f7b8c31c0b7d2105
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ConvertPixels

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ConvertPixels`

<a id="api-589a01f8764c56d2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ConvertPixels(System.Int32,System.Int32,Inno.Native.Sdl3.SDLPixelFormat,System.Void*,System.Int32,Inno.Native.Sdl3.SDLPixelFormat,System.Void*,System.Int32) 1c5def0ed2c83838ea2444b0d1fc33515ddf99392e616c1aa81b3f0209131215 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ConvertPixels(int width, int height, Inno.Native.Sdl3.SDLPixelFormat src_format, void* src, int src_pitch, Inno.Native.Sdl3.SDLPixelFormat dst_format, void* dst, int dst_pitch)
```

Copy a block of pixels of one format to another format.

**Thread safety:** The same destination pixels should not be used from two
threads at once. It is safe to use the same source pixels
from multiple threads.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ConvertPixelsAndColorspace

**Parameter `width`:** the width of the block to copy, in pixels.

**Parameter `height`:** the height of the block to copy, in pixels.

**Parameter `src_format`:** an SDL_PixelFormat value of the `src` pixels format.

**Parameter `src`:** a pointer to the source pixels.

**Parameter `src_pitch`:** the pitch of the source pixels, in bytes.

**Parameter `dst_format`:** an SDL_PixelFormat value of the `dst` pixels format.

**Parameter `dst`:** a pointer to be filled in with new pixel data.

**Parameter `dst_pitch`:** the pitch of the destination pixels, in bytes.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42977).

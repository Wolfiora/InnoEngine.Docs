---
title: "SDLContext.RawApi — Method: PremultiplyAlpha"
description: "Exact Method: PremultiplyAlpha contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2452eef132471f84
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: PremultiplyAlpha

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PremultiplyAlpha`

<a id="api-c4324a4731a51cfc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.PremultiplyAlpha(System.Int32,System.Int32,Inno.Native.Sdl3.SDLPixelFormat,System.Void*,System.Int32,Inno.Native.Sdl3.SDLPixelFormat,System.Void*,System.Int32,System.Byte) 666a5d1008daab974571cac02f101b215f8eb522a2b4acc66eba768afe0fb76b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.PremultiplyAlpha(int width, int height, Inno.Native.Sdl3.SDLPixelFormat src_format, void* src, int src_pitch, Inno.Native.Sdl3.SDLPixelFormat dst_format, void* dst, int dst_pitch, byte linear)
```

Premultiply the alpha on a block of pixels.
This is safe to use with src == dst, but not for other overlapping areas.

**Thread safety:** The same destination pixels should not be used from two
threads at once. It is safe to use the same source pixels
from multiple threads.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `width`:** the width of the block to convert, in pixels.

**Parameter `height`:** the height of the block to convert, in pixels.

**Parameter `src_format`:** an SDL_PixelFormat value of the `src` pixels format.

**Parameter `src`:** a pointer to the source pixels.

**Parameter `src_pitch`:** the pitch of the source pixels, in bytes.

**Parameter `dst_format`:** an SDL_PixelFormat value of the `dst` pixels format.

**Parameter `dst`:** a pointer to be filled in with premultiplied pixel data.

**Parameter `dst_pitch`:** the pitch of the destination pixels, in bytes.

**Parameter `linear`:** true to convert from sRGB to linear space for the alpha
multiplication, false to do multiplication in sRGB space.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43962).

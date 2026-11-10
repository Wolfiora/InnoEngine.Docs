---
title: "SDLContext.RawApi — Method: UpdateNvTexture"
description: "Exact Method: UpdateNvTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.587ca22a7fb9435c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UpdateNvTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UpdateNvTexture`

<a id="api-11995c7fb83a7f89"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UpdateNvTexture(Inno.Native.Sdl3.SDLTexture*,Inno.Native.Sdl3.SDLRect*,System.Byte*,System.Int32,System.Byte*,System.Int32) 8488df3afae8bff5004adb3cd29e2a5ac6a61bd7b9408147208f38c6beaa4ebe -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.UpdateNvTexture(Inno.Native.Sdl3.SDLTexture* texture, Inno.Native.Sdl3.SDLRect* rect, byte* Yplane, int Ypitch, byte* UVplane, int UVpitch)
```

Update a rectangle within a planar NV12 or NV21 texture with new pixels.
You can use SDL_UpdateTexture() as long as your pixel data is a contiguous
block of NV12/21 planes in the proper order, but this function is available
if your pixel data is not contiguous.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_UpdateTexture

**See also:** SDL_UpdateYUVTexture

**Parameter `texture`:** the texture to update.

**Parameter `rect`:** a pointer to the rectangle of pixels to update, or NULL to
update the entire texture.

**Parameter `Yplane`:** the raw pixel data for the Y plane.

**Parameter `Ypitch`:** the number of bytes between rows of pixel data for the Y
plane.

**Parameter `UVplane`:** the raw pixel data for the UV plane.

**Parameter `UVpitch`:** the number of bytes between rows of pixel data for the UV
plane.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31761).

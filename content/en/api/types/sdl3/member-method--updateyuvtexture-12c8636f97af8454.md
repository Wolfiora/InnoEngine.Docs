---
title: "SDLContext.RawApi — Method: UpdateYuvTexture"
description: "Exact Method: UpdateYuvTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.12c8636f97af8454
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UpdateYuvTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UpdateYuvTexture`

<a id="api-126ed46b51d25440"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UpdateYuvTexture(Inno.Native.Sdl3.SDLTexture*,Inno.Native.Sdl3.SDLRect*,System.Byte*,System.Int32,System.Byte*,System.Int32,System.Byte*,System.Int32) c47fbf5a2510314e5818ec84f3e59683c60c954a1b1fc8a74c233bddd06ca8da -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.UpdateYuvTexture(Inno.Native.Sdl3.SDLTexture* texture, Inno.Native.Sdl3.SDLRect* rect, byte* Yplane, int Ypitch, byte* Uplane, int Upitch, byte* Vplane, int Vpitch)
```

Update a rectangle within a planar YV12 or IYUV texture with new pixel
data.
You can use SDL_UpdateTexture() as long as your pixel data is a contiguous
block of Y and U/V planes in the proper order, but this function is
available if your pixel data is not contiguous.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_UpdateNVTexture

**See also:** SDL_UpdateTexture

**Parameter `texture`:** the texture to update.

**Parameter `rect`:** a pointer to the rectangle of pixels to update, or NULL to
update the entire texture.

**Parameter `Yplane`:** the raw pixel data for the Y plane.

**Parameter `Ypitch`:** the number of bytes between rows of pixel data for the Y
plane.

**Parameter `Uplane`:** the raw pixel data for the U plane.

**Parameter `Upitch`:** the number of bytes between rows of pixel data for the U
plane.

**Parameter `Vplane`:** the raw pixel data for the V plane.

**Parameter `Vpitch`:** the number of bytes between rows of pixel data for the V
plane.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24736).

---
title: "SDLContext.RawApi — Method: RenderTexture9GridTiled"
description: "Exact Method: RenderTexture9GridTiled contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.88fc352b15849ace
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderTexture9GridTiled

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderTexture9GridTiled`

<a id="api-664a3386949d3a6e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderTexture9GridTiled(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLTexture*,Inno.Native.Sdl3.SDLFRect*,System.Single,System.Single,System.Single,System.Single,System.Single,Inno.Native.Sdl3.SDLFRect*,System.Single) 71db14b39f2a1391143067f885a61a0d8b317f3b23e824238c52070d4b4c75fd -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderTexture9GridTiled(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLTexture* texture, Inno.Native.Sdl3.SDLFRect* srcrect, float left_width, float right_width, float top_height, float bottom_height, float scale, Inno.Native.Sdl3.SDLFRect* dstrect, float tileScale)
```

Perform a scaled copy using the 9-grid algorithm to the current rendering
target at subpixel precision.
The pixels in the texture are split into a 3x3 grid, using the different
corner sizes for each corner, and the sides and center making up the
remaining pixels. The corners are then scaled using `scale` and fit into
the corners of the destination rectangle. The sides and center are then
tiled into place to cover the remaining destination rectangle.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_RenderTexture

**See also:** SDL_RenderTexture9Grid

**Parameter `renderer`:** the renderer which should copy parts of a texture.

**Parameter `texture`:** the source texture.

**Parameter `srcrect`:** the SDL_Rect structure representing the rectangle to be used
for the 9-grid, or NULL to use the entire texture.

**Parameter `left_width`:** the width, in pixels, of the left corners in `srcrect`.

**Parameter `right_width`:** the width, in pixels, of the right corners in `srcrect`.

**Parameter `top_height`:** the height, in pixels, of the top corners in `srcrect`.

**Parameter `bottom_height`:** the height, in pixels, of the bottom corners in
`srcrect`.

**Parameter `scale`:** the scale used to transform the corner of `srcrect` into the
corner of `dstrect`, or 0.0f for an unscaled copy.

**Parameter `dstrect`:** a pointer to the destination rectangle, or NULL for the
entire rendering target.

**Parameter `tileScale`:** the scale used to transform the borders and center of
`srcrect` into the borders and middle of `dstrect`, or
1.0f for an unscaled copy.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51413).

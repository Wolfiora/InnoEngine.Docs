---
title: "SDLContext.RawApi — Method: RenderTexture9Grid"
description: "Exact Method: RenderTexture9Grid contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8f71366455798d98
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderTexture9Grid

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderTexture9Grid`

<a id="api-9750f2e8c09fd899"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderTexture9Grid(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLTexture*,Inno.Native.Sdl3.SDLFRect*,System.Single,System.Single,System.Single,System.Single,System.Single,Inno.Native.Sdl3.SDLFRect*) 345546942ffe4015504e06e993f478d0bbd4e422557c70c47f15321f09216ccb -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderTexture9Grid(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLTexture* texture, Inno.Native.Sdl3.SDLFRect* srcrect, float left_width, float right_width, float top_height, float bottom_height, float scale, Inno.Native.Sdl3.SDLFRect* dstrect)
```

Perform a scaled copy using the 9-grid algorithm to the current rendering
target at subpixel precision.
The pixels in the texture are split into a 3x3 grid, using the different
corner sizes for each corner, and the sides and center making up the
remaining pixels. The corners are then scaled using `scale` and fit into
the corners of the destination rectangle. The sides and center are then
stretched into place to cover the remaining destination rectangle.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderTexture

**See also:** SDL_RenderTexture9GridTiled

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

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31139).

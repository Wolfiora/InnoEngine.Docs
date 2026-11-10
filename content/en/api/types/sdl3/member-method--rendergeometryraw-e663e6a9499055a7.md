---
title: "SDLContext.RawApi — Method: RenderGeometryRaw"
description: "Exact Method: RenderGeometryRaw contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e663e6a9499055a7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderGeometryRaw

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderGeometryRaw`

<a id="api-4650f188b0541e59"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderGeometryRaw(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLTexture*,System.Single*,System.Int32,Inno.Native.Sdl3.SDLFColor*,System.Int32,System.Single*,System.Int32,System.Int32,System.Void*,System.Int32,System.Int32) 93fe1a677af2056c22e8f1aad051f2ea1f1c526ab87a5ba58fa9adf9b98972b2 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderGeometryRaw(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLTexture* texture, float* xy, int xy_stride, Inno.Native.Sdl3.SDLFColor* color, int color_stride, float* uv, int uv_stride, int num_vertices, void* indices, int num_indices, int size_indices)
```

Render a list of triangles, optionally using a texture and indices into the
vertex arrays.
Color and alpha modulation is done per vertex (SDL_SetTextureColorMod and
SDL_SetTextureAlphaMod are ignored).

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderGeometry

**See also:** SDL_SetRenderTextureAddressMode

**Parameter `renderer`:** the rendering context.

**Parameter `texture`:** (optional) The SDL texture to use.

**Parameter `xy`:** vertex positions.

**Parameter `xy_stride`:** byte size to move from one element to the next element.

**Parameter `color`:** vertex colors (as SDL_FColor).

**Parameter `color_stride`:** byte size to move from one element to the next element.

**Parameter `uv`:** vertex normalized texture coordinates.

**Parameter `uv_stride`:** byte size to move from one element to the next element.

**Parameter `num_vertices`:** number of vertices.

**Parameter `indices`:** (optional) An array of indices into the 'vertices' arrays,
if NULL all vertices will be rendered in sequential order.

**Parameter `num_indices`:** number of indices.

**Parameter `size_indices`:** index size: 1 (byte), 2 (short), 4 (int).

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40753).

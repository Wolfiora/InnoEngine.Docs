---
title: "SDLContext.RawApi — Method: RenderGeometry"
description: "Exact Method: RenderGeometry contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4d4c0b1d1bc8ac6f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderGeometry

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderGeometry`

<a id="api-7501be9920d744be"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderGeometry(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLTexture*,Inno.Native.Sdl3.SDLVertex*,System.Int32,System.Int32*,System.Int32) 849595cfd05609572eedc0d30fbff00d2ad857eeb6ef0b8276dc3a03ce03282c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderGeometry(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLTexture* texture, Inno.Native.Sdl3.SDLVertex* vertices, int num_vertices, int* indices, int num_indices)
```

Render a list of triangles, optionally using a texture and indices into the
vertex array.
Color and alpha modulation is done per vertex (SDL_SetTextureColorMod and
SDL_SetTextureAlphaMod are ignored).

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderGeometryRaw

**See also:** SDL_SetRenderTextureAddressMode

**Parameter `renderer`:** the rendering context.

**Parameter `texture`:** (optional) The SDL texture to use.

**Parameter `vertices`:** vertices.

**Parameter `num_vertices`:** number of vertices.

**Parameter `indices`:** (optional) An array of integer indices into the 'vertices'
array, if NULL all vertices will be rendered in sequential
order.

**Parameter `num_indices`:** number of indices.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46102).

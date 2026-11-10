---
title: "SDLContext.RawApi — Method: CreateTextureWithProperties"
description: "Exact Method: CreateTextureWithProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8970a8ceec30e0a3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateTextureWithProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateTextureWithProperties`

<a id="api-26e0a8b8f81267af"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateTextureWithProperties(Inno.Native.Sdl3.SDLRenderer*,System.UInt32) fba6328fc69b049eeffde906f0e3ca1cc63aa4075cf02526d06b1d623032a844 -->

```csharp
public Inno.Native.Sdl3.SDLTexture* Inno.Native.Sdl3.SDLContext.RawApi.CreateTextureWithProperties(Inno.Native.Sdl3.SDLRenderer* renderer, uint props)
```

Create a texture for a rendering context with the specified properties.
These are the supported properties:
- `SDL_PROP_TEXTURE_CREATE_COLORSPACE_NUMBER`: an SDL_Colorspace value
describing the texture colorspace, defaults to SDL_COLORSPACE_SRGB_LINEAR
for floating point textures, SDL_COLORSPACE_HDR10 for 10-bit textures,
SDL_COLORSPACE_SRGB for other RGB textures and SDL_COLORSPACE_JPEG for
YUV textures.
- `SDL_PROP_TEXTURE_CREATE_FORMAT_NUMBER`: one of the enumerated values in
SDL_PixelFormat, defaults to the best RGBA format for the renderer
- `SDL_PROP_TEXTURE_CREATE_ACCESS_NUMBER`: one of the enumerated values in
SDL_TextureAccess, defaults to SDL_TEXTUREACCESS_STATIC
- `SDL_PROP_TEXTURE_CREATE_WIDTH_NUMBER`: the width of the texture in
pixels, required
- `SDL_PROP_TEXTURE_CREATE_HEIGHT_NUMBER`: the height of the texture in
pixels, required
- `SDL_PROP_TEXTURE_CREATE_PALETTE_POINTER`: an SDL_Palette to use with
palettized texture formats. This can be set later with
SDL_SetTexturePalette()
- `SDL_PROP_TEXTURE_CREATE_SDR_WHITE_POINT_FLOAT`: for HDR10 and floating
point textures, this defines the value of 100% diffuse white, with higher
values being displayed in the High Dynamic Range headroom. This defaults
to 100 for HDR10 textures and 1.0 for floating point textures.
- `SDL_PROP_TEXTURE_CREATE_HDR_HEADROOM_FLOAT`: for HDR10 and floating
point textures, this defines the maximum dynamic range used by the
content, in terms of the SDR white point. This would be equivalent to
maxCLL / SDL_PROP_TEXTURE_CREATE_SDR_WHITE_POINT_FLOAT for HDR10 content.
If this is defined, any values outside the range supported by the display
will be scaled into the available HDR headroom, otherwise they are
clipped.
With the direct3d11 renderer:
- `SDL_PROP_TEXTURE_CREATE_D3D11_TEXTURE_POINTER`: the ID3D11Texture2D
associated with the texture, if you want to wrap an existing texture.
- `SDL_PROP_TEXTURE_CREATE_D3D11_TEXTURE_U_POINTER`: the ID3D11Texture2D
associated with the U plane of a YUV texture, if you want to wrap an
existing texture.
- `SDL_PROP_TEXTURE_CREATE_D3D11_TEXTURE_V_POINTER`: the ID3D11Texture2D
associated with the V plane of a YUV texture, if you want to wrap an
existing texture.
With the direct3d12 renderer:
- `SDL_PROP_TEXTURE_CREATE_D3D12_TEXTURE_POINTER`: the ID3D12Resource
associated with the texture, if you want to wrap an existing texture.
- `SDL_PROP_TEXTURE_CREATE_D3D12_TEXTURE_U_POINTER`: the ID3D12Resource
associated with the U plane of a YUV texture, if you want to wrap an
existing texture.
- `SDL_PROP_TEXTURE_CREATE_D3D12_TEXTURE_V_POINTER`: the ID3D12Resource
associated with the V plane of a YUV texture, if you want to wrap an
existing texture.
With the metal renderer:
- `SDL_PROP_TEXTURE_CREATE_METAL_PIXELBUFFER_POINTER`: the CVPixelBufferRef
associated with the texture, if you want to create a texture from an
existing pixel buffer.
With the opengl renderer:
- `SDL_PROP_TEXTURE_CREATE_OPENGL_TEXTURE_NUMBER`: the GLuint texture
associated with the texture, if you want to wrap an existing texture.
- `SDL_PROP_TEXTURE_CREATE_OPENGL_TEXTURE_UV_NUMBER`: the GLuint texture
associated with the UV plane of an NV12 texture, if you want to wrap an
existing texture.
- `SDL_PROP_TEXTURE_CREATE_OPENGL_TEXTURE_U_NUMBER`: the GLuint texture
associated with the U plane of a YUV texture, if you want to wrap an
existing texture.
- `SDL_PROP_TEXTURE_CREATE_OPENGL_TEXTURE_V_NUMBER`: the GLuint texture
associated with the V plane of a YUV texture, if you want to wrap an
existing texture.
With the opengles2 renderer:
- `SDL_PROP_TEXTURE_CREATE_OPENGLES2_TEXTURE_NUMBER`: the GLuint texture
associated with the texture, if you want to wrap an existing texture.
- `SDL_PROP_TEXTURE_CREATE_OPENGLES2_TEXTURE_UV_NUMBER`: the GLuint texture
associated with the UV plane of an NV12 texture, if you want to wrap an
existing texture.
- `SDL_PROP_TEXTURE_CREATE_OPENGLES2_TEXTURE_U_NUMBER`: the GLuint texture
associated with the U plane of a YUV texture, if you want to wrap an
existing texture.
- `SDL_PROP_TEXTURE_CREATE_OPENGLES2_TEXTURE_V_NUMBER`: the GLuint texture
associated with the V plane of a YUV texture, if you want to wrap an
existing texture.
With the vulkan renderer:
- `SDL_PROP_TEXTURE_CREATE_VULKAN_TEXTURE_NUMBER`: the VkImage associated
with the texture, if you want to wrap an existing texture.
- `SDL_PROP_TEXTURE_CREATE_VULKAN_LAYOUT_NUMBER`: the VkImageLayout for the
VkImage, defaults to VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL.
With the GPU renderer:
- `SDL_PROP_TEXTURE_CREATE_GPU_TEXTURE_POINTER`: the SDL_GPUTexture
associated with the texture, if you want to wrap an existing texture.
- `SDL_PROP_TEXTURE_CREATE_GPU_TEXTURE_UV_NUMBER`: the SDL_GPUTexture
associated with the UV plane of an NV12 texture, if you want to wrap an
existing texture.
- `SDL_PROP_TEXTURE_CREATE_GPU_TEXTURE_U_NUMBER`: the SDL_GPUTexture
associated with the U plane of a YUV texture, if you want to wrap an
existing texture.
- `SDL_PROP_TEXTURE_CREATE_GPU_TEXTURE_V_NUMBER`: the SDL_GPUTexture
associated with the V plane of a YUV texture, if you want to wrap an
existing texture.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateProperties

**See also:** SDL_CreateTexture

**See also:** SDL_CreateTextureFromSurface

**See also:** SDL_DestroyTexture

**See also:** SDL_GetTextureSize

**See also:** SDL_UpdateTexture

**Parameter `renderer`:** the rendering context.

**Parameter `props`:** the properties to use.

**Returns:** the created texture or NULL on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33480).

---
title: "SDLContext.RawApi — Method: GetTextureProperties"
description: "Exact Method: GetTextureProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4f0ae2fbd08dc19e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTextureProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTextureProperties`

<a id="api-b3ee7607eef19001"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTextureProperties(Inno.Native.Sdl3.SDLTexture*) df26d847ad565b158323fb438bb1ec412ea56c03a672d9d256653df554c05ebe -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetTextureProperties(Inno.Native.Sdl3.SDLTexture* texture)
```

Get the properties associated with a texture.
The following read-only properties are provided by SDL:
- `SDL_PROP_TEXTURE_COLORSPACE_NUMBER`: an SDL_Colorspace value describing
the texture colorspace.
- `SDL_PROP_TEXTURE_FORMAT_NUMBER`: one of the enumerated values in
SDL_PixelFormat.
- `SDL_PROP_TEXTURE_ACCESS_NUMBER`: one of the enumerated values in
SDL_TextureAccess.
- `SDL_PROP_TEXTURE_WIDTH_NUMBER`: the width of the texture in pixels.
- `SDL_PROP_TEXTURE_HEIGHT_NUMBER`: the height of the texture in pixels.
- `SDL_PROP_TEXTURE_SDR_WHITE_POINT_FLOAT`: for HDR10 and floating point
textures, this defines the value of 100% diffuse white, with higher
values being displayed in the High Dynamic Range headroom. This defaults
to 100 for HDR10 textures and 1.0 for other textures.
- `SDL_PROP_TEXTURE_HDR_HEADROOM_FLOAT`: for HDR10 and floating point
textures, this defines the maximum dynamic range used by the content, in
terms of the SDR white point. If this is defined, any values outside the
range supported by the display will be scaled into the available HDR
headroom, otherwise they are clipped. This defaults to 1.0 for SDR
textures, 4.0 for HDR10 textures, and no default for floating point
textures.
With the direct3d11 renderer:
- `SDL_PROP_TEXTURE_D3D11_TEXTURE_POINTER`: the ID3D11Texture2D associated
with the texture
- `SDL_PROP_TEXTURE_D3D11_TEXTURE_U_POINTER`: the ID3D11Texture2D
associated with the U plane of a YUV texture
- `SDL_PROP_TEXTURE_D3D11_TEXTURE_V_POINTER`: the ID3D11Texture2D
associated with the V plane of a YUV texture
With the direct3d12 renderer:
- `SDL_PROP_TEXTURE_D3D12_TEXTURE_POINTER`: the ID3D12Resource associated
with the texture
- `SDL_PROP_TEXTURE_D3D12_TEXTURE_U_POINTER`: the ID3D12Resource associated
with the U plane of a YUV texture
- `SDL_PROP_TEXTURE_D3D12_TEXTURE_V_POINTER`: the ID3D12Resource associated
with the V plane of a YUV texture
With the vulkan renderer:
- `SDL_PROP_TEXTURE_VULKAN_TEXTURE_NUMBER`: the VkImage associated with the
texture
With the opengl renderer:
- `SDL_PROP_TEXTURE_OPENGL_TEXTURE_NUMBER`: the GLuint texture associated
with the texture
- `SDL_PROP_TEXTURE_OPENGL_TEXTURE_UV_NUMBER`: the GLuint texture
associated with the UV plane of an NV12 texture
- `SDL_PROP_TEXTURE_OPENGL_TEXTURE_U_NUMBER`: the GLuint texture associated
with the U plane of a YUV texture
- `SDL_PROP_TEXTURE_OPENGL_TEXTURE_V_NUMBER`: the GLuint texture associated
with the V plane of a YUV texture
- `SDL_PROP_TEXTURE_OPENGL_TEXTURE_TARGET_NUMBER`: the GLenum for the
texture target (`GL_TEXTURE_2D`, `GL_TEXTURE_RECTANGLE_ARB`, etc)
- `SDL_PROP_TEXTURE_OPENGL_TEX_W_FLOAT`: the texture coordinate width of
the texture (0.0 - 1.0)
- `SDL_PROP_TEXTURE_OPENGL_TEX_H_FLOAT`: the texture coordinate height of
the texture (0.0 - 1.0)
With the opengles2 renderer:
- `SDL_PROP_TEXTURE_OPENGLES2_TEXTURE_NUMBER`: the GLuint texture
associated with the texture
- `SDL_PROP_TEXTURE_OPENGLES2_TEXTURE_UV_NUMBER`: the GLuint texture
associated with the UV plane of an NV12 texture
- `SDL_PROP_TEXTURE_OPENGLES2_TEXTURE_U_NUMBER`: the GLuint texture
associated with the U plane of a YUV texture
- `SDL_PROP_TEXTURE_OPENGLES2_TEXTURE_V_NUMBER`: the GLuint texture
associated with the V plane of a YUV texture
- `SDL_PROP_TEXTURE_OPENGLES2_TEXTURE_TARGET_NUMBER`: the GLenum for the
texture target (`GL_TEXTURE_2D`, `GL_TEXTURE_EXTERNAL_OES`, etc)
With the gpu renderer:
- `SDL_PROP_TEXTURE_GPU_TEXTURE_POINTER`: the SDL_GPUTexture associated
with the texture
- `SDL_PROP_TEXTURE_GPU_TEXTURE_UV_POINTER`: the SDL_GPUTexture associated
with the UV plane of an NV12 texture
- `SDL_PROP_TEXTURE_GPU_TEXTURE_U_POINTER`: the SDL_GPUTexture associated
with the U plane of a YUV texture
- `SDL_PROP_TEXTURE_GPU_TEXTURE_V_POINTER`: the SDL_GPUTexture associated
with the V plane of a YUV texture

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `texture`:** the texture to query.

**Returns:** a valid property ID on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50325).

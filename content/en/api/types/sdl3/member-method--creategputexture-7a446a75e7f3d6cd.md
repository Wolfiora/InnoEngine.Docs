---
title: "SDLContext.RawApi — Method: CreateGpuTexture"
description: "Exact Method: CreateGpuTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7a446a75e7f3d6cd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateGpuTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateGpuTexture`

<a id="api-6fd7bad80e927b2f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuTexture(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUTextureCreateInfo*) 3974ae013a093c17180876cac17d0f672308703276733995cb5779d353b731fc -->

```csharp
public Inno.Native.Sdl3.SDLGPUTexture* Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuTexture(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUTextureCreateInfo* createinfo)
```

Creates a texture object to be used in graphics or compute workflows.
The contents of this texture are undefined until data is written to the
texture, either via SDL_UploadToGPUTexture or by performing a render or
compute pass with this texture as a target.
Note that certain combinations of usage flags are invalid. For example, a
texture cannot have both the SAMPLER and GRAPHICS_STORAGE_READ flags.
If you request a sample count higher than the hardware supports, the
implementation will automatically fall back to the highest available sample
count.
There are optional properties that can be provided through
SDL_GPUTextureCreateInfo's `props`. These are the supported properties:
- `SDL_PROP_GPU_TEXTURE_CREATE_D3D12_CLEAR_R_FLOAT`: (Direct3D 12 only) if
the texture usage is SDL_GPU_TEXTUREUSAGE_COLOR_TARGET, clear the texture
to a color with this red intensity. Defaults to zero.
- `SDL_PROP_GPU_TEXTURE_CREATE_D3D12_CLEAR_G_FLOAT`: (Direct3D 12 only) if
the texture usage is SDL_GPU_TEXTUREUSAGE_COLOR_TARGET, clear the texture
to a color with this green intensity. Defaults to zero.
- `SDL_PROP_GPU_TEXTURE_CREATE_D3D12_CLEAR_B_FLOAT`: (Direct3D 12 only) if
the texture usage is SDL_GPU_TEXTUREUSAGE_COLOR_TARGET, clear the texture
to a color with this blue intensity. Defaults to zero.
- `SDL_PROP_GPU_TEXTURE_CREATE_D3D12_CLEAR_A_FLOAT`: (Direct3D 12 only) if
the texture usage is SDL_GPU_TEXTUREUSAGE_COLOR_TARGET, clear the texture
to a color with this alpha intensity. Defaults to zero.
- `SDL_PROP_GPU_TEXTURE_CREATE_D3D12_CLEAR_DEPTH_FLOAT`: (Direct3D 12 only)
if the texture usage is SDL_GPU_TEXTUREUSAGE_DEPTH_STENCIL_TARGET, clear
the texture to a depth of this value. Defaults to zero.
- `SDL_PROP_GPU_TEXTURE_CREATE_D3D12_CLEAR_STENCIL_NUMBER`: (Direct3D 12
only) if the texture usage is SDL_GPU_TEXTUREUSAGE_DEPTH_STENCIL_TARGET,
clear the texture to a stencil of this Uint8 value. Defaults to zero.
- `SDL_PROP_GPU_TEXTURE_CREATE_NAME_STRING`: a name that can be displayed
in debugging tools.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_UploadToGPUTexture

**See also:** SDL_DownloadFromGPUTexture

**See also:** SDL_BeginGPURenderPass

**See also:** SDL_BeginGPUComputePass

**See also:** SDL_BindGPUVertexSamplers

**See also:** SDL_BindGPUVertexStorageTextures

**See also:** SDL_BindGPUFragmentSamplers

**See also:** SDL_BindGPUFragmentStorageTextures

**See also:** SDL_BindGPUComputeStorageTextures

**See also:** SDL_BlitGPUTexture

**See also:** SDL_ReleaseGPUTexture

**See also:** SDL_GPUTextureSupportsFormat

**Parameter `device`:** a GPU Context.

**Parameter `createinfo`:** a struct describing the state of the texture to create.

**Returns:** a texture object on success, or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47761).

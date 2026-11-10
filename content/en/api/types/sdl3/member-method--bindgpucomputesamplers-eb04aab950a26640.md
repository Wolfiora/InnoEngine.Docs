---
title: "SDLContext.RawApi — Method: BindGpuComputeSamplers"
description: "Exact Method: BindGpuComputeSamplers contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.eb04aab950a26640
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BindGpuComputeSamplers

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BindGpuComputeSamplers`

<a id="api-f0d0360738c7f570"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BindGpuComputeSamplers(Inno.Native.Sdl3.SDLGPUComputePass*,System.UInt32,Inno.Native.Sdl3.SDLGPUTextureSamplerBinding*,System.UInt32) 79b470add4f1d43f168fbd92afb419ca66fa11563203194b4ad8c24cb3268823 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.BindGpuComputeSamplers(Inno.Native.Sdl3.SDLGPUComputePass* compute_pass, uint first_slot, Inno.Native.Sdl3.SDLGPUTextureSamplerBinding* texture_sampler_bindings, uint num_bindings)
```

Binds texture-sampler pairs for use on the compute shader.
The textures must have been created with SDL_GPU_TEXTUREUSAGE_SAMPLER.
Be sure your shader is set up according to the requirements documented in
SDL_CreateGPUComputePipeline().

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUComputePipeline

**Parameter `compute_pass`:** a compute pass handle.

**Parameter `first_slot`:** the compute sampler slot to begin binding from.

**Parameter `texture_sampler_bindings`:** an array of texture-sampler binding
structs.

**Parameter `num_bindings`:** the number of texture-sampler bindings to bind from the
array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29817).

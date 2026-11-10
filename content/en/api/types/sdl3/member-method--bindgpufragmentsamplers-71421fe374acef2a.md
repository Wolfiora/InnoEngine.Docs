---
title: "SDLContext.RawApi — Method: BindGpuFragmentSamplers"
description: "Exact Method: BindGpuFragmentSamplers contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.71421fe374acef2a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BindGpuFragmentSamplers

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BindGpuFragmentSamplers`

<a id="api-432bdde9f5f00728"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BindGpuFragmentSamplers(Inno.Native.Sdl3.SDLGPURenderPass*,System.UInt32,Inno.Native.Sdl3.SDLGPUTextureSamplerBinding*,System.UInt32) a7ad99307c1916b3f6c114e86d75f62598b2562095be2ebdadc62afbd98db2d7 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.BindGpuFragmentSamplers(Inno.Native.Sdl3.SDLGPURenderPass* render_pass, uint first_slot, Inno.Native.Sdl3.SDLGPUTextureSamplerBinding* texture_sampler_bindings, uint num_bindings)
```

Binds texture-sampler pairs for use on the fragment shader.
The textures must have been created with SDL_GPU_TEXTUREUSAGE_SAMPLER.
Be sure your shader is set up according to the requirements documented in
SDL_CreateGPUShader().

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUShader

**Parameter `render_pass`:** a render pass handle.

**Parameter `first_slot`:** the fragment sampler slot to begin binding from.

**Parameter `texture_sampler_bindings`:** an array of texture-sampler binding
structs.

**Parameter `num_bindings`:** the number of texture-sampler pairs to bind from the
array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27765).

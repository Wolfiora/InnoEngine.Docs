---
title: "SDLContext.RawApi — Method: BindGpuVertexSamplers"
description: "Exact Method: BindGpuVertexSamplers contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2a8d78f45619e107
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BindGpuVertexSamplers

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BindGpuVertexSamplers`

<a id="api-d43f94accbb4e56c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BindGpuVertexSamplers(Inno.Native.Sdl3.SDLGPURenderPass*,System.UInt32,Inno.Native.Sdl3.SDLGPUTextureSamplerBinding*,System.UInt32) 6d30caf73dc0585a51982dea45e6951617154705a5545cf5f0855c8dde39beaf -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.BindGpuVertexSamplers(Inno.Native.Sdl3.SDLGPURenderPass* render_pass, uint first_slot, Inno.Native.Sdl3.SDLGPUTextureSamplerBinding* texture_sampler_bindings, uint num_bindings)
```

Binds texture-sampler pairs for use on the vertex shader.
The textures must have been created with SDL_GPU_TEXTUREUSAGE_SAMPLER.
Be sure your shader is set up according to the requirements documented in
SDL_CreateGPUShader().

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUShader

**Parameter `render_pass`:** a render pass handle.

**Parameter `first_slot`:** the vertex sampler slot to begin binding from.

**Parameter `texture_sampler_bindings`:** an array of texture-sampler binding
structs.

**Parameter `num_bindings`:** the number of texture-sampler pairs to bind from the
array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39427).

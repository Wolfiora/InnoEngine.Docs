---
title: "SDLContext.RawApi — Method: CreateGpuComputePipeline"
description: "Exact Method: CreateGpuComputePipeline contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6ecf9d77ff367220
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateGpuComputePipeline

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateGpuComputePipeline`

<a id="api-23beffe435688fed"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuComputePipeline(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUComputePipelineCreateInfo*) 286bee97c92cc8f7ffb166074d53df2b5476db124c30e830060aa3764d8406dc -->

```csharp
public Inno.Native.Sdl3.SDLGPUComputePipeline* Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuComputePipeline(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUComputePipelineCreateInfo* createinfo)
```

Creates a pipeline object to be used in a compute workflow.
Shader resource bindings must be authored to follow a particular order
depending on the shader format.
For SPIR-V shaders, use the following resource sets:
- 0: Sampled textures, followed by read-only storage textures, followed by
read-only storage buffers
- 1: Read-write storage textures, followed by read-write storage buffers
- 2: Uniform buffers
For DXBC and DXIL shaders, use the following register order:
- (t[n], space0): Sampled textures, followed by read-only storage textures,
followed by read-only storage buffers
- (u[n], space1): Read-write storage textures, followed by read-write
storage buffers
- (b[n], space2): Uniform buffers
For MSL/metallib, use the following order:
- [[buffer]]: Uniform buffers, followed by read-only storage buffers,
followed by read-write storage buffers
- [[texture]]: Sampled textures, followed by read-only storage textures,
followed by read-write storage textures
There are optional properties that can be provided through `props`. These
are the supported properties:
- `SDL_PROP_GPU_COMPUTEPIPELINE_CREATE_NAME_STRING`: a name that can be
displayed in debugging tools.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BindGPUComputePipeline

**See also:** SDL_ReleaseGPUComputePipeline

**Parameter `device`:** a GPU Context.

**Parameter `createinfo`:** a struct describing the state of the compute pipeline to
create.

**Returns:** a compute pipeline object on success, or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52066).

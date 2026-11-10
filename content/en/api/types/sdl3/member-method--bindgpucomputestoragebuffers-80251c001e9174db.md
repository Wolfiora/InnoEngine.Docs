---
title: "SDLContext.RawApi — Method: BindGpuComputeStorageBuffers"
description: "Exact Method: BindGpuComputeStorageBuffers contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.80251c001e9174db
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BindGpuComputeStorageBuffers

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BindGpuComputeStorageBuffers`

<a id="api-d5f37f1a823d6b8b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BindGpuComputeStorageBuffers(Inno.Native.Sdl3.SDLGPUComputePass*,System.UInt32,Inno.Native.Sdl3.SDLGPUBuffer**,System.UInt32) 5b2eec9a82db0143994762854512799fce9f71f6a00c5579d55e72e2843ec3d8 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.BindGpuComputeStorageBuffers(Inno.Native.Sdl3.SDLGPUComputePass* compute_pass, uint first_slot, Inno.Native.Sdl3.SDLGPUBuffer** storage_buffers, uint num_bindings)
```

Binds storage buffers as readonly for use on the compute pipeline.
These buffers must have been created with
SDL_GPU_BUFFERUSAGE_COMPUTE_STORAGE_READ.
Be sure your shader is set up according to the requirements documented in
SDL_CreateGPUComputePipeline().

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUComputePipeline

**Parameter `compute_pass`:** a compute pass handle.

**Parameter `first_slot`:** the compute storage buffer slot to begin binding from.

**Parameter `storage_buffers`:** an array of storage buffer binding structs.

**Parameter `num_bindings`:** the number of storage buffers to bind from the array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32989).

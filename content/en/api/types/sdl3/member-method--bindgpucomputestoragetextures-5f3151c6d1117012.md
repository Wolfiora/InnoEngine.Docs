---
title: "SDLContext.RawApi — Method: BindGpuComputeStorageTextures"
description: "Exact Method: BindGpuComputeStorageTextures contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5f3151c6d1117012
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BindGpuComputeStorageTextures

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BindGpuComputeStorageTextures`

<a id="api-c99d8d6bf8cbc76f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BindGpuComputeStorageTextures(Inno.Native.Sdl3.SDLGPUComputePass*,System.UInt32,Inno.Native.Sdl3.SDLGPUTexture**,System.UInt32) a1087634210b434646c31e3bf4058e2ce4b1ab790809dfe7368a1869f16f3db4 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.BindGpuComputeStorageTextures(Inno.Native.Sdl3.SDLGPUComputePass* compute_pass, uint first_slot, Inno.Native.Sdl3.SDLGPUTexture** storage_textures, uint num_bindings)
```

Binds storage textures as readonly for use on the compute pipeline.
These textures must have been created with
SDL_GPU_TEXTUREUSAGE_COMPUTE_STORAGE_READ.
Be sure your shader is set up according to the requirements documented in
SDL_CreateGPUComputePipeline().

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUComputePipeline

**Parameter `compute_pass`:** a compute pass handle.

**Parameter `first_slot`:** the compute storage texture slot to begin binding from.

**Parameter `storage_textures`:** an array of storage textures.

**Parameter `num_bindings`:** the number of storage textures to bind from the array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50194).

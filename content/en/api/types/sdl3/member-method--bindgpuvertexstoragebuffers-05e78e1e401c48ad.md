---
title: "SDLContext.RawApi — Method: BindGpuVertexStorageBuffers"
description: "Exact Method: BindGpuVertexStorageBuffers contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.05e78e1e401c48ad
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BindGpuVertexStorageBuffers

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BindGpuVertexStorageBuffers`

<a id="api-a1b0057459b26f38"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BindGpuVertexStorageBuffers(Inno.Native.Sdl3.SDLGPURenderPass*,System.UInt32,Inno.Native.Sdl3.SDLGPUBuffer**,System.UInt32) 2a8c055ca96e4e1455a68fc10c4d6e6c366900615085007f24b84b9aceea4e60 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.BindGpuVertexStorageBuffers(Inno.Native.Sdl3.SDLGPURenderPass* render_pass, uint first_slot, Inno.Native.Sdl3.SDLGPUBuffer** storage_buffers, uint num_bindings)
```

Binds storage buffers for use on the vertex shader.
These buffers must have been created with
SDL_GPU_BUFFERUSAGE_GRAPHICS_STORAGE_READ.
Be sure your shader is set up according to the requirements documented in
SDL_CreateGPUShader().

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUShader

**Parameter `render_pass`:** a render pass handle.

**Parameter `first_slot`:** the vertex storage buffer slot to begin binding from.

**Parameter `storage_buffers`:** an array of buffers.

**Parameter `num_bindings`:** the number of buffers to bind from the array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25933).

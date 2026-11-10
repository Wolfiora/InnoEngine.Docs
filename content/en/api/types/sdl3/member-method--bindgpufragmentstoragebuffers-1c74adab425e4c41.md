---
title: "SDLContext.RawApi — Method: BindGpuFragmentStorageBuffers"
description: "Exact Method: BindGpuFragmentStorageBuffers contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1c74adab425e4c41
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BindGpuFragmentStorageBuffers

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BindGpuFragmentStorageBuffers`

<a id="api-5fe5987831301078"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BindGpuFragmentStorageBuffers(Inno.Native.Sdl3.SDLGPURenderPass*,System.UInt32,Inno.Native.Sdl3.SDLGPUBuffer**,System.UInt32) cfacae4ec3d09e697e0d33de765231c16627345106cc44a1e441f335e019ef90 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.BindGpuFragmentStorageBuffers(Inno.Native.Sdl3.SDLGPURenderPass* render_pass, uint first_slot, Inno.Native.Sdl3.SDLGPUBuffer** storage_buffers, uint num_bindings)
```

Binds storage buffers for use on the fragment shader.
These buffers must have been created with
SDL_GPU_BUFFERUSAGE_GRAPHICS_STORAGE_READ.
Be sure your shader is set up according to the requirements documented in
SDL_CreateGPUShader().

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUShader

**Parameter `render_pass`:** a render pass handle.

**Parameter `first_slot`:** the fragment storage buffer slot to begin binding from.

**Parameter `storage_buffers`:** an array of storage buffers.

**Parameter `num_bindings`:** the number of storage buffers to bind from the array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50639).

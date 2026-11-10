---
title: "SDLContext.RawApi — Method: BindGpuVertexStorageTextures"
description: "Exact Method: BindGpuVertexStorageTextures contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.016435bf1e07932d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BindGpuVertexStorageTextures

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BindGpuVertexStorageTextures`

<a id="api-a0ae896c20c37448"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BindGpuVertexStorageTextures(Inno.Native.Sdl3.SDLGPURenderPass*,System.UInt32,Inno.Native.Sdl3.SDLGPUTexture**,System.UInt32) 79dad63a939e9d5b941eac0fd7e0c38935ac4d92edd5261e48680ed6390fcf10 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.BindGpuVertexStorageTextures(Inno.Native.Sdl3.SDLGPURenderPass* render_pass, uint first_slot, Inno.Native.Sdl3.SDLGPUTexture** storage_textures, uint num_bindings)
```

Binds storage textures for use on the vertex shader.
These textures must have been created with
SDL_GPU_TEXTUREUSAGE_GRAPHICS_STORAGE_READ.
Be sure your shader is set up according to the requirements documented in
SDL_CreateGPUShader().

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUShader

**Parameter `render_pass`:** a render pass handle.

**Parameter `first_slot`:** the vertex storage texture slot to begin binding from.

**Parameter `storage_textures`:** an array of storage textures.

**Parameter `num_bindings`:** the number of storage texture to bind from the array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50148).

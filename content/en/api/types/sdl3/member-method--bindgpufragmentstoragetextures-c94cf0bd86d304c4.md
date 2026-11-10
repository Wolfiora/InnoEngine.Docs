---
title: "SDLContext.RawApi — Method: BindGpuFragmentStorageTextures"
description: "Exact Method: BindGpuFragmentStorageTextures contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c94cf0bd86d304c4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BindGpuFragmentStorageTextures

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BindGpuFragmentStorageTextures`

<a id="api-eb8638020298cadb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BindGpuFragmentStorageTextures(Inno.Native.Sdl3.SDLGPURenderPass*,System.UInt32,Inno.Native.Sdl3.SDLGPUTexture**,System.UInt32) d330f61758f7546de908e4d601302e03c201423cec0a99a9d4c0092650b96c5e -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.BindGpuFragmentStorageTextures(Inno.Native.Sdl3.SDLGPURenderPass* render_pass, uint first_slot, Inno.Native.Sdl3.SDLGPUTexture** storage_textures, uint num_bindings)
```

Binds storage textures for use on the fragment shader.
These textures must have been created with
SDL_GPU_TEXTUREUSAGE_GRAPHICS_STORAGE_READ.
Be sure your shader is set up according to the requirements documented in
SDL_CreateGPUShader().

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUShader

**Parameter `render_pass`:** a render pass handle.

**Parameter `first_slot`:** the fragment storage texture slot to begin binding from.

**Parameter `storage_textures`:** an array of storage textures.

**Parameter `num_bindings`:** the number of storage textures to bind from the array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47853).

---
title: "SDLContext.RawApi — Method: SetGpuRenderStateStorageTextures"
description: "Exact Method: SetGpuRenderStateStorageTextures contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d02f63920d8fdff1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGpuRenderStateStorageTextures

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGpuRenderStateStorageTextures`

<a id="api-d15cb70d2d198d4c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGpuRenderStateStorageTextures(Inno.Native.Sdl3.SDLGPURenderState*,System.Int32,Inno.Native.Sdl3.SDLGPUTexture**) 20b68815b24ca7719c5975365e48e62bfacbd78a0f63b6a50667d4220f34b3a3 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetGpuRenderStateStorageTextures(Inno.Native.Sdl3.SDLGPURenderState* state, int num_storage_textures, Inno.Native.Sdl3.SDLGPUTexture** storage_textures)
```

Set storage textures variables in a custom GPU render state.
The data is copied and will be binded using
SDL_BindGPUFragmentStorageTextures() during draw call execution.

**Thread safety:** This function should be called on the thread that created the
renderer.

**Upstream availability:** This function is available since SDL 3.6.0.

**Parameter `state`:** the state to modify.

**Parameter `num_storage_textures`:** The number of storage textures to bind.

**Parameter `storage_textures`:** Storage textures to bind.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31083).

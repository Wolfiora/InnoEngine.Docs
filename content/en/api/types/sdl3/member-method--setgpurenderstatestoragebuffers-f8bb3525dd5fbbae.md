---
title: "SDLContext.RawApi — Method: SetGpuRenderStateStorageBuffers"
description: "Exact Method: SetGpuRenderStateStorageBuffers contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f8bb3525dd5fbbae
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGpuRenderStateStorageBuffers

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGpuRenderStateStorageBuffers`

<a id="api-ae7c89724bea6bea"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGpuRenderStateStorageBuffers(Inno.Native.Sdl3.SDLGPURenderState*,System.Int32,Inno.Native.Sdl3.SDLGPUBuffer**) 00aeae86b5d6f4aed90de2c3384c248f25a20be47223581343eb07552b891e90 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetGpuRenderStateStorageBuffers(Inno.Native.Sdl3.SDLGPURenderState* state, int num_storage_buffers, Inno.Native.Sdl3.SDLGPUBuffer** storage_buffers)
```

Set storage buffers variables in a custom GPU render state.
The data is copied and will be binded using
SDL_BindGPUFragmentStorageBuffers() during draw call execution.

**Thread safety:** This function should be called on the thread that created the
renderer.

**Upstream availability:** This function is available since SDL 3.6.0.

**Parameter `state`:** the state to modify.

**Parameter `num_storage_buffers`:** The number of storage buffers to bind.

**Parameter `storage_buffers`:** Storage buffers to bind.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22263).

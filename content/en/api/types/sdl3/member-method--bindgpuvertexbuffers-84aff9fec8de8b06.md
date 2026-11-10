---
title: "SDLContext.RawApi — Method: BindGpuVertexBuffers"
description: "Exact Method: BindGpuVertexBuffers contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.84aff9fec8de8b06
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BindGpuVertexBuffers

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BindGpuVertexBuffers`

<a id="api-d07c5781bf188b8b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BindGpuVertexBuffers(Inno.Native.Sdl3.SDLGPURenderPass*,System.UInt32,Inno.Native.Sdl3.SDLGPUBufferBinding*,System.UInt32) 61a2120cc3c7e278f99d79ab6084b18210c793c9ea529852acf03eb243745b62 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.BindGpuVertexBuffers(Inno.Native.Sdl3.SDLGPURenderPass* render_pass, uint first_slot, Inno.Native.Sdl3.SDLGPUBufferBinding* bindings, uint num_bindings)
```

Binds vertex buffers on a command buffer for use with subsequent draw
calls.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `render_pass`:** a render pass handle.

**Parameter `first_slot`:** the vertex buffer slot to begin binding from.

**Parameter `bindings`:** an array of SDL_GPUBufferBinding structs containing vertex
buffers and offset values.

**Parameter `num_bindings`:** the number of bindings in the bindings array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30550).

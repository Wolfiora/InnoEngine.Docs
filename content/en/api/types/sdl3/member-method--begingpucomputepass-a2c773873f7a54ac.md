---
title: "SDLContext.RawApi — Method: BeginGpuComputePass"
description: "Exact Method: BeginGpuComputePass contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a2c773873f7a54ac
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BeginGpuComputePass

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginGpuComputePass`

<a id="api-472b83dafa6999d6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BeginGpuComputePass(Inno.Native.Sdl3.SDLGPUCommandBuffer*,Inno.Native.Sdl3.SDLGPUStorageTextureReadWriteBinding*,System.UInt32,Inno.Native.Sdl3.SDLGPUStorageBufferReadWriteBinding*,System.UInt32) 71c4e06664e2ba6510cbc4d354ed45852bef7956c966f47ab2aec4251ce2b7c6 -->

```csharp
public Inno.Native.Sdl3.SDLGPUComputePass* Inno.Native.Sdl3.SDLContext.RawApi.BeginGpuComputePass(Inno.Native.Sdl3.SDLGPUCommandBuffer* command_buffer, Inno.Native.Sdl3.SDLGPUStorageTextureReadWriteBinding* storage_texture_bindings, uint num_storage_texture_bindings, Inno.Native.Sdl3.SDLGPUStorageBufferReadWriteBinding* storage_buffer_bindings, uint num_storage_buffer_bindings)
```

Begins a compute pass on a command buffer.
A compute pass is defined by a set of texture subresources and buffers that
may be written to by compute pipelines. These textures and buffers must
have been created with the COMPUTE_STORAGE_WRITE bit or the
COMPUTE_STORAGE_SIMULTANEOUS_READ_WRITE bit. If you do not create a texture
with COMPUTE_STORAGE_SIMULTANEOUS_READ_WRITE, you must not read from the
texture in the compute pass. All operations related to compute pipelines
must take place inside of a compute pass. You must not begin another
compute pass, or a render pass or copy pass before ending the compute pass.
A VERY IMPORTANT NOTE - Reads and writes in compute passes are NOT
implicitly synchronized. This means you may cause data races by both
reading and writing a resource region in a compute pass, or by writing
multiple times to a resource region. If your compute work depends on
reading the completed output from a previous dispatch, you MUST end the
current compute pass and begin a new one before you can safely access the
data. Otherwise you will receive unexpected results. Reading and writing a
texture in the same compute pass is only supported by specific texture
formats. Make sure you check the format support!

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_EndGPUComputePass

**Parameter `command_buffer`:** a command buffer.

**Parameter `storage_texture_bindings`:** an array of writeable storage texture
binding structs.

**Parameter `num_storage_texture_bindings`:** the number of storage textures to bind
from the array.

**Parameter `storage_buffer_bindings`:** an array of writeable storage buffer binding
structs.

**Parameter `num_storage_buffer_bindings`:** the number of storage buffers to bind
from the array.

**Returns:** a compute pass handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34412).

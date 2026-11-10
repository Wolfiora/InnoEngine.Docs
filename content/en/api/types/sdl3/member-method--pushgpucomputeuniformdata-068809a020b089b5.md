---
title: "SDLContext.RawApi — Method: PushGpuComputeUniformData"
description: "Exact Method: PushGpuComputeUniformData contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.068809a020b089b5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: PushGpuComputeUniformData

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PushGpuComputeUniformData`

<a id="api-5f10af0448de1419"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.PushGpuComputeUniformData(Inno.Native.Sdl3.SDLGPUCommandBuffer*,System.UInt32,System.Void*,System.UInt32) 292c2dcaa66fd4b12c9f20969d0ebcc08a491df9b8eb0aa156adec7d7cb322cd -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.PushGpuComputeUniformData(Inno.Native.Sdl3.SDLGPUCommandBuffer* command_buffer, uint slot_index, void* data, uint length)
```

Pushes data to a uniform slot on the command buffer.
Subsequent draw calls in this command buffer will use this uniform data.
The data being pushed must respect std140 layout conventions. In practical
terms this means you must ensure that vec3 and vec4 fields are 16-byte
aligned.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `command_buffer`:** a command buffer.

**Parameter `slot_index`:** the uniform slot to push data to.

**Parameter `data`:** client data to write.

**Parameter `length`:** the length of the data to write.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25904).

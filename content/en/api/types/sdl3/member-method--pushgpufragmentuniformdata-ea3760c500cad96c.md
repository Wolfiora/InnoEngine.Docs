---
title: "SDLContext.RawApi — Method: PushGpuFragmentUniformData"
description: "Exact Method: PushGpuFragmentUniformData contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ea3760c500cad96c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: PushGpuFragmentUniformData

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PushGpuFragmentUniformData`

<a id="api-1dcefa99bb2bdd9d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.PushGpuFragmentUniformData(Inno.Native.Sdl3.SDLGPUCommandBuffer*,System.UInt32,System.Void*,System.UInt32) 579fc4741bf5a003954ee1aa4f81d94dbb3fe72a457951ccb1732208994eb63d -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.PushGpuFragmentUniformData(Inno.Native.Sdl3.SDLGPUCommandBuffer* command_buffer, uint slot_index, void* data, uint length)
```

Pushes data to a fragment uniform slot on the command buffer.
Subsequent draw calls in this command buffer will use this uniform data.
The data being pushed must respect std140 layout conventions. In practical
terms this means you must ensure that vec3 and vec4 fields are 16-byte
aligned.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `command_buffer`:** a command buffer.

**Parameter `slot_index`:** the fragment uniform slot to push data to.

**Parameter `data`:** client data to write.

**Parameter `length`:** the length of the data to write.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21914).

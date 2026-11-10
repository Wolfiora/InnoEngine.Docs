---
title: "SDLContext.RawApi — Method: BindGpuIndexBuffer"
description: "Exact Method: BindGpuIndexBuffer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5eedc6b5791bec69
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BindGpuIndexBuffer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BindGpuIndexBuffer`

<a id="api-fb5d54dd8ede8947"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BindGpuIndexBuffer(Inno.Native.Sdl3.SDLGPURenderPass*,Inno.Native.Sdl3.SDLGPUBufferBinding*,Inno.Native.Sdl3.SDLGPUIndexElementSize) 6c540bca987a43aa12489d12ea1c7b09d0be399710886380b41a5d9a841b12b4 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.BindGpuIndexBuffer(Inno.Native.Sdl3.SDLGPURenderPass* render_pass, Inno.Native.Sdl3.SDLGPUBufferBinding* binding, Inno.Native.Sdl3.SDLGPUIndexElementSize index_element_size)
```

Binds an index buffer on a command buffer for use with subsequent draw
calls.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `render_pass`:** a render pass handle.

**Parameter `binding`:** a pointer to a struct containing an index buffer and offset.

**Parameter `index_element_size`:** whether the index values in the buffer are 16- or
32-bit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34846).

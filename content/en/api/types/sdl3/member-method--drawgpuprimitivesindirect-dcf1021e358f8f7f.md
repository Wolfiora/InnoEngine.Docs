---
title: "SDLContext.RawApi — Method: DrawGpuPrimitivesIndirect"
description: "Exact Method: DrawGpuPrimitivesIndirect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.dcf1021e358f8f7f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DrawGpuPrimitivesIndirect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DrawGpuPrimitivesIndirect`

<a id="api-a5be0d14d3502cd0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DrawGpuPrimitivesIndirect(Inno.Native.Sdl3.SDLGPURenderPass*,Inno.Native.Sdl3.SDLGPUBuffer*,System.UInt32,System.UInt32) a3e7862600b5edcda5909e5ed5431a52d37b2d2202a39fa5bf5e54cdcb6c592c -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DrawGpuPrimitivesIndirect(Inno.Native.Sdl3.SDLGPURenderPass* render_pass, Inno.Native.Sdl3.SDLGPUBuffer* buffer, uint offset, uint draw_count)
```

Draws data using bound graphics state and with draw parameters set from a
buffer.
The buffer must consist of tightly-packed draw parameter sets that each
match the layout of SDL_GPUIndirectDrawCommand. You must not call this
function before binding a graphics pipeline.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `render_pass`:** a render pass handle.

**Parameter `buffer`:** a buffer containing draw parameters.

**Parameter `offset`:** the offset to start reading from the draw buffer.

**Parameter `draw_count`:** the number of draw parameter sets that should be read
from the draw buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49539).

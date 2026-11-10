---
title: "SDLContext.RawApi — Method: DrawGpuIndexedPrimitivesIndirect"
description: "Exact Method: DrawGpuIndexedPrimitivesIndirect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d8f05172baf47ffc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DrawGpuIndexedPrimitivesIndirect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DrawGpuIndexedPrimitivesIndirect`

<a id="api-6bcbcde438cd87ef"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DrawGpuIndexedPrimitivesIndirect(Inno.Native.Sdl3.SDLGPURenderPass*,Inno.Native.Sdl3.SDLGPUBuffer*,System.UInt32,System.UInt32) 98c56613d6671943c17f546cc8f0978c0b6004a62423e91401a8de17d2f158f0 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DrawGpuIndexedPrimitivesIndirect(Inno.Native.Sdl3.SDLGPURenderPass* render_pass, Inno.Native.Sdl3.SDLGPUBuffer* buffer, uint offset, uint draw_count)
```

Draws data using bound graphics state with an index buffer enabled and with
draw parameters set from a buffer.
The buffer must consist of tightly-packed draw parameter sets that each
match the layout of SDL_GPUIndexedIndirectDrawCommand. You must not call
this function before binding a graphics pipeline.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `render_pass`:** a render pass handle.

**Parameter `buffer`:** a buffer containing draw parameters.

**Parameter `offset`:** the offset to start reading from the draw buffer.

**Parameter `draw_count`:** the number of draw parameter sets that should be read
from the draw buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51112).

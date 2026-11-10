---
title: "SDLContext.RawApi — Method: DispatchGpuComputeIndirect"
description: "Exact Method: DispatchGpuComputeIndirect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7a9602e967d73860
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DispatchGpuComputeIndirect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DispatchGpuComputeIndirect`

<a id="api-63e8e582d383cd77"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DispatchGpuComputeIndirect(Inno.Native.Sdl3.SDLGPUComputePass*,Inno.Native.Sdl3.SDLGPUBuffer*,System.UInt32) b19778a6010259420ef0b296c532c4f7782817d3e2be1a0453fdfe40afea72d0 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DispatchGpuComputeIndirect(Inno.Native.Sdl3.SDLGPUComputePass* compute_pass, Inno.Native.Sdl3.SDLGPUBuffer* buffer, uint offset)
```

Dispatches compute work with parameters set from a buffer.
The buffer layout should match the layout of
SDL_GPUIndirectDispatchCommand. You must not call this function before
binding a compute pipeline.
A VERY IMPORTANT NOTE If you dispatch multiple times in a compute pass, and
the dispatches write to the same resource region as each other, there is no
guarantee of which order the writes will occur. If the write order matters,
you MUST end the compute pass and begin another one.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `compute_pass`:** a compute pass handle.

**Parameter `buffer`:** a buffer containing dispatch parameters.

**Parameter `offset`:** the offset to start reading from the dispatch buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40816).

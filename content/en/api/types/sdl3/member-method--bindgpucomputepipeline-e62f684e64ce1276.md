---
title: "SDLContext.RawApi — Method: BindGpuComputePipeline"
description: "Exact Method: BindGpuComputePipeline contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e62f684e64ce1276
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BindGpuComputePipeline

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BindGpuComputePipeline`

<a id="api-3f9572552130a348"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BindGpuComputePipeline(Inno.Native.Sdl3.SDLGPUComputePass*,Inno.Native.Sdl3.SDLGPUComputePipeline*) 25f38e41bd127b1a62c2c72f83c2cea40993255a8d7511283abf620c9e5ce905 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.BindGpuComputePipeline(Inno.Native.Sdl3.SDLGPUComputePass* compute_pass, Inno.Native.Sdl3.SDLGPUComputePipeline* compute_pipeline)
```

Binds a compute pipeline on a command buffer for use in compute dispatch.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `compute_pass`:** a compute pass handle.

**Parameter `compute_pipeline`:** a compute pipeline to bind.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34430).

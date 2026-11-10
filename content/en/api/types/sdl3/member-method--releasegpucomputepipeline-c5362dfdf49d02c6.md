---
title: "SDLContext.RawApi — Method: ReleaseGpuComputePipeline"
description: "Exact Method: ReleaseGpuComputePipeline contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c5362dfdf49d02c6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReleaseGpuComputePipeline

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReleaseGpuComputePipeline`

<a id="api-657eeba7605de4b6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReleaseGpuComputePipeline(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUComputePipeline*) 3c539c89e5451385d81c43275c9d1a9896f120ac74bb757355a5fc2c22517bdf -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.ReleaseGpuComputePipeline(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUComputePipeline* compute_pipeline)
```

Frees the given compute pipeline as soon as it is safe to do so.
You must not reference the compute pipeline after calling this function.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `device`:** a GPU context.

**Parameter `compute_pipeline`:** a compute pipeline to be destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25407).

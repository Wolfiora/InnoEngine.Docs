---
title: "SDLContext.RawApi — Method: EndGpuComputePass"
description: "Exact Method: EndGpuComputePass contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c3f35cb207e73bee
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: EndGpuComputePass

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EndGpuComputePass`

<a id="api-d9c3a34ce54d69ea"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.EndGpuComputePass(Inno.Native.Sdl3.SDLGPUComputePass*) 0595a33f48c0d009343d4a5d9634e150b94237b80d8bd0b02fb270ba2a2cda3f -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.EndGpuComputePass(Inno.Native.Sdl3.SDLGPUComputePass* compute_pass)
```

Ends the current compute pass.
All bound compute state on the command buffer is unset. The compute pass
handle is now invalid.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `compute_pass`:** a compute pass handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22307).

---
title: "SDLContext.RawApi — Method: DispatchGpuCompute"
description: "Exact Method: DispatchGpuCompute contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.cce8f57aa21b204e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DispatchGpuCompute

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DispatchGpuCompute`

<a id="api-e39947359da108ee"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DispatchGpuCompute(Inno.Native.Sdl3.SDLGPUComputePass*,System.UInt32,System.UInt32,System.UInt32) b6d05861621a592179ced921ca7233e3bbbb4b4e66e989d33d3e5592febe309b -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DispatchGpuCompute(Inno.Native.Sdl3.SDLGPUComputePass* compute_pass, uint groupcount_x, uint groupcount_y, uint groupcount_z)
```

Dispatches compute work.
You must not call this function before binding a compute pipeline.
A VERY IMPORTANT NOTE If you dispatch multiple times in a compute pass, and
the dispatches write to the same resource region as each other, there is no
guarantee of which order the writes will occur. If the write order matters,
you MUST end the compute pass and begin another one.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `compute_pass`:** a compute pass handle.

**Parameter `groupcount_x`:** number of local workgroups to dispatch in the X
dimension.

**Parameter `groupcount_y`:** number of local workgroups to dispatch in the Y
dimension.

**Parameter `groupcount_z`:** number of local workgroups to dispatch in the Z
dimension.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39014).

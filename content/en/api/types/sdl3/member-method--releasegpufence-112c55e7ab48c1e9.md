---
title: "SDLContext.RawApi — Method: ReleaseGpuFence"
description: "Exact Method: ReleaseGpuFence contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.112c55e7ab48c1e9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReleaseGpuFence

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReleaseGpuFence`

<a id="api-d1a42521c250192f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReleaseGpuFence(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUFence*) c848682ec339e35e24bcd7d05ec5bbe1d3a834a62f9e4d5a7c8485907d78f8d4 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.ReleaseGpuFence(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUFence* fence)
```

Releases a fence obtained from SDL_SubmitGPUCommandBufferAndAcquireFence.
You must not reference the fence after calling this function.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SubmitGPUCommandBufferAndAcquireFence

**Parameter `device`:** a GPU context.

**Parameter `fence`:** a fence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28826).

---
title: "SDLContext.RawApi — Method: QueryGpuFence"
description: "Exact Method: QueryGpuFence contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2288c83245f19d3c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: QueryGpuFence

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `QueryGpuFence`

<a id="api-a8bce8254f7095fe"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.QueryGpuFence(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUFence*) d2c00557bb5f92223e8fd2df43dcc480578444bf29f18c88e1954e7e4c550bab -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.QueryGpuFence(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUFence* fence)
```

Checks the status of a fence.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SubmitGPUCommandBufferAndAcquireFence

**Parameter `device`:** a GPU context.

**Parameter `fence`:** a fence.

**Returns:** true if the fence is signaled, false if it is not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29055).

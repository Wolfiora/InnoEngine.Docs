---
title: "SDLContext.RawApi — Method: AcquireGpuCommandBuffer"
description: "Exact Method: AcquireGpuCommandBuffer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fe08f49f229eab6d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AcquireGpuCommandBuffer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AcquireGpuCommandBuffer`

<a id="api-78aca9fd204752e2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AcquireGpuCommandBuffer(Inno.Native.Sdl3.SDLGPUDevice*) 2d03779d568fce2ac78f74ecb4c527ad8d26ce93ff60ad7cff444125c82e5758 -->

```csharp
public Inno.Native.Sdl3.SDLGPUCommandBuffer* Inno.Native.Sdl3.SDLContext.RawApi.AcquireGpuCommandBuffer(Inno.Native.Sdl3.SDLGPUDevice* device)
```

Acquire a command buffer.
This command buffer is managed by the implementation and should not be
freed by the user. The command buffer may only be used on the thread it was
acquired on. The command buffer should be submitted on the thread it was
acquired on.
It is valid to acquire multiple command buffers on the same thread at once.
In fact a common design pattern is to acquire two command buffers per frame
where one is dedicated to render and compute passes and the other is
dedicated to copy passes and other preparatory work such as generating
mipmaps. Interleaving commands between the two command buffers reduces the
total amount of passes overall which improves rendering performance.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SubmitGPUCommandBuffer

**See also:** SDL_SubmitGPUCommandBufferAndAcquireFence

**Parameter `device`:** a GPU context.

**Returns:** a command buffer, or NULL on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37361).

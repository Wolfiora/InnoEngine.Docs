---
title: "SDLContext.RawApi — Method: AddVulkanRenderSemaphores"
description: "Exact Method: AddVulkanRenderSemaphores contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.90022102309deede
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AddVulkanRenderSemaphores

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AddVulkanRenderSemaphores`

<a id="api-7f6ec22b2986204d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AddVulkanRenderSemaphores(Inno.Native.Sdl3.SDLRenderer*,System.UInt32,System.Int64,System.Int64) 27a2145711a1b60fb079a1e24ca75805d8a267fb17ba7687f4326f0d352c6b7a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.AddVulkanRenderSemaphores(Inno.Native.Sdl3.SDLRenderer* renderer, uint wait_stage_mask, long wait_semaphore, long signal_semaphore)
```

Add a set of synchronization semaphores for the current frame.
The Vulkan renderer will wait for `wait_semaphore` before submitting
rendering commands and signal `signal_semaphore` after rendering commands
are complete for this frame.
This should be called each frame that you want semaphore synchronization.
The Vulkan renderer may have multiple frames in flight on the GPU, so you
should have multiple semaphores that are used for synchronization. Querying
SDL_PROP_RENDERER_VULKAN_SWAPCHAIN_IMAGE_COUNT_NUMBER will give you the
maximum number of semaphores you'll need.

**Thread safety:** It is **NOT** safe to call this function from two threads at
once.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `renderer`:** the rendering context.

**Parameter `wait_stage_mask`:** the VkPipelineStageFlags for the wait.

**Parameter `wait_semaphore`:** a VkSempahore to wait on before rendering the current
frame, or 0 if not needed.

**Parameter `signal_semaphore`:** a VkSempahore that SDL will signal when rendering
for the current frame is complete, or 0 if not
needed.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17259).

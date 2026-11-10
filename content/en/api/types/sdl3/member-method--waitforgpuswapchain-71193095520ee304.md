---
title: "SDLContext.RawApi — Method: WaitForGpuSwapchain"
description: "Exact Method: WaitForGpuSwapchain contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.71193095520ee304
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WaitForGpuSwapchain

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WaitForGpuSwapchain`

<a id="api-9a84d95202bf83c7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WaitForGpuSwapchain(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLWindow*) ef75678a72990e96c7ca89610c833488049e4d79666b7f30b8115e019f60f63c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WaitForGpuSwapchain(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLWindow* window)
```

Blocks the thread until a swapchain texture is available to be acquired.

**Thread safety:** This function should only be called from the thread that
created the window.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AcquireGPUSwapchainTexture

**See also:** SDL_WaitAndAcquireGPUSwapchainTexture

**See also:** SDL_SetGPUAllowedFramesInFlight

**Parameter `device`:** a GPU context.

**Parameter `window`:** a window that has been claimed.

**Returns:** true on success, false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42807).

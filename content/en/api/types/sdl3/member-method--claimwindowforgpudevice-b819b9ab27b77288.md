---
title: "SDLContext.RawApi — Method: ClaimWindowForGpuDevice"
description: "Exact Method: ClaimWindowForGpuDevice contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b819b9ab27b77288
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ClaimWindowForGpuDevice

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ClaimWindowForGpuDevice`

<a id="api-aae7954f6482c14f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ClaimWindowForGpuDevice(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLWindow*) a9768c9eb923d1b35e9813c2704af721e73277eb0a4d501aab9590baaa77b776 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ClaimWindowForGpuDevice(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLWindow* window)
```

Claims a window, creating a swapchain structure for it.
This must be called before SDL_AcquireGPUSwapchainTexture is called using
the window. You should only call this function from the thread that created
the window.
The swapchain will be created with SDL_GPU_SWAPCHAINCOMPOSITION_SDR and
SDL_GPU_PRESENTMODE_VSYNC. If you want to have different swapchain
parameters, you must call SDL_SetGPUSwapchainParameters after claiming the
window.

**Thread safety:** This function should only be called from the thread that
created the window.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_WaitAndAcquireGPUSwapchainTexture

**See also:** SDL_ReleaseWindowFromGPUDevice

**See also:** SDL_WindowSupportsGPUPresentMode

**See also:** SDL_WindowSupportsGPUSwapchainComposition

**Parameter `device`:** a GPU context.

**Parameter `window`:** an SDL_Window.

**Returns:** true on success, or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27276).

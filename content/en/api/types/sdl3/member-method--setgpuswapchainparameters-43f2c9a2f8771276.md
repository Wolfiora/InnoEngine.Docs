---
title: "SDLContext.RawApi — Method: SetGpuSwapchainParameters"
description: "Exact Method: SetGpuSwapchainParameters contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.43f2c9a2f8771276
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGpuSwapchainParameters

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGpuSwapchainParameters`

<a id="api-19942c4da221a0b7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGpuSwapchainParameters(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLGPUSwapchainComposition,Inno.Native.Sdl3.SDLGPUPresentMode) 75f1f1b64f5bb21e7eefe48ddfbb81566240d43b9d02b0d22766ca2ea5872d34 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetGpuSwapchainParameters(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLGPUSwapchainComposition swapchain_composition, Inno.Native.Sdl3.SDLGPUPresentMode present_mode)
```

Changes the swapchain parameters for the given claimed window.
This function will fail if the requested present mode or swapchain
composition are unsupported by the device. Check if the parameters are
supported via SDL_WindowSupportsGPUPresentMode /
SDL_WindowSupportsGPUSwapchainComposition prior to calling this function.
SDL_GPU_PRESENTMODE_VSYNC with SDL_GPU_SWAPCHAINCOMPOSITION_SDR is always
supported.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_WindowSupportsGPUPresentMode

**See also:** SDL_WindowSupportsGPUSwapchainComposition

**Parameter `device`:** a GPU context.

**Parameter `window`:** an SDL_Window that has been claimed.

**Parameter `swapchain_composition`:** the desired composition of the swapchain.

**Parameter `present_mode`:** the desired present mode for the swapchain.

**Returns:** true if successful, false on error; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32772).

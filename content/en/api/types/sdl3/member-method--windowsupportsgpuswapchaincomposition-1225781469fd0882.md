---
title: "SDLContext.RawApi — Method: WindowSupportsGpuSwapchainComposition"
description: "Exact Method: WindowSupportsGpuSwapchainComposition contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1225781469fd0882
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WindowSupportsGpuSwapchainComposition

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WindowSupportsGpuSwapchainComposition`

<a id="api-cc47beb6fa532fbe"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WindowSupportsGpuSwapchainComposition(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLGPUSwapchainComposition) d9b566d55dbb42e7175e2ebb1ed2197dd411c58d518c0687f058e2a0d52c5ca2 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WindowSupportsGpuSwapchainComposition(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLGPUSwapchainComposition swapchain_composition)
```

Determines whether a swapchain composition is supported by the window.
The window must be claimed before calling this function.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ClaimWindowForGPUDevice

**Parameter `device`:** a GPU context.

**Parameter `window`:** an SDL_Window.

**Parameter `swapchain_composition`:** the swapchain composition to check.

**Returns:** true if supported, false if unsupported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40527).

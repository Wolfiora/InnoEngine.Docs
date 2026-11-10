---
title: "SDLContext.RawApi — Method: GetGpuSwapchainTextureFormat"
description: "Exact Method: GetGpuSwapchainTextureFormat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.05f90589e406d0f4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGpuSwapchainTextureFormat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGpuSwapchainTextureFormat`

<a id="api-9c306ef2582267ef"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGpuSwapchainTextureFormat(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLWindow*) 95cda1e0d5c18f847358f25a24b0d6e03a90a650c79e06ff3c86454d6d02a7cf -->

```csharp
public Inno.Native.Sdl3.SDLGPUTextureFormat Inno.Native.Sdl3.SDLContext.RawApi.GetGpuSwapchainTextureFormat(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLWindow* window)
```

Obtains the texture format of the swapchain for the given window.
Note that this format can change if the swapchain parameters change.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `device`:** a GPU context.

**Parameter `window`:** an SDL_Window that has been claimed.

**Returns:** the texture format of the swapchain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32046).

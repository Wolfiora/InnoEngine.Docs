---
title: "SDLContext.RawApi — Method: ReleaseWindowFromGpuDevice"
description: "Exact Method: ReleaseWindowFromGpuDevice contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a97fe3e3c6af6fe0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReleaseWindowFromGpuDevice

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReleaseWindowFromGpuDevice`

<a id="api-4839228be8405667"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReleaseWindowFromGpuDevice(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLWindow*) de17bd84931b298956486414ebb3178668aa3b28f55087d687069ed1ee216c1a -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.ReleaseWindowFromGpuDevice(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLWindow* window)
```

Unclaims a window, destroying its swapchain structure.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ClaimWindowForGPUDevice

**Parameter `device`:** a GPU context.

**Parameter `window`:** an SDL_Window that has been claimed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51803).

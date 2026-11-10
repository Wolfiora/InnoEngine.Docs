---
title: "SDLContext.RawApi — Method: WindowSupportsGpuPresentMode"
description: "Exact Method: WindowSupportsGpuPresentMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.cae69f1b36204ac4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WindowSupportsGpuPresentMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WindowSupportsGpuPresentMode`

<a id="api-58403a99e4f40d6a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WindowSupportsGpuPresentMode(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLGPUPresentMode) b8c5d7c32f53508a39024c2728cff4dfe266925fcab171563fea4cb215b0848c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WindowSupportsGpuPresentMode(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLGPUPresentMode present_mode)
```

Determines whether a presentation mode is supported by the window.
The window must be claimed before calling this function.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ClaimWindowForGPUDevice

**Parameter `device`:** a GPU context.

**Parameter `window`:** an SDL_Window.

**Parameter `present_mode`:** the presentation mode to check.

**Returns:** true if supported, false if unsupported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29641).

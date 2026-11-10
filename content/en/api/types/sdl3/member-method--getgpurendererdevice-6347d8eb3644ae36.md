---
title: "SDLContext.RawApi — Method: GetGpuRendererDevice"
description: "Exact Method: GetGpuRendererDevice contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6347d8eb3644ae36
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGpuRendererDevice

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGpuRendererDevice`

<a id="api-0eb03332662601f4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGpuRendererDevice(Inno.Native.Sdl3.SDLRenderer*) f6131d830d25d8d0ac779695ca51a1cb2e81321a928d0ce868dedaf091da331e -->

```csharp
public Inno.Native.Sdl3.SDLGPUDevice* Inno.Native.Sdl3.SDLContext.RawApi.GetGpuRendererDevice(Inno.Native.Sdl3.SDLRenderer* renderer)
```

Return the GPU device used by a renderer.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `renderer`:** the rendering context.

**Returns:** the GPU device used by the renderer, or NULL if the renderer is
not a GPU renderer; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19240).

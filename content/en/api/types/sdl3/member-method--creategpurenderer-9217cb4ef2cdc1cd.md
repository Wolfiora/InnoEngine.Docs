---
title: "SDLContext.RawApi — Method: CreateGpuRenderer"
description: "Exact Method: CreateGpuRenderer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9217cb4ef2cdc1cd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateGpuRenderer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateGpuRenderer`

<a id="api-c52aff8aedf39518"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuRenderer(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLWindow*) 0544daf3739098c240a8524c5b07f954eef2458cee72ae4fd94aa010eb16829e -->

```csharp
public Inno.Native.Sdl3.SDLRenderer* Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuRenderer(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLWindow* window)
```

Create a 2D GPU rendering context.
The GPU device to use is passed in as a parameter. If this is NULL, then a
device will be created normally and can be retrieved using
SDL_GetGPURendererDevice().
The window to use is passed in as a parameter. If this is NULL, then this
will become an offscreen renderer. In that case, you should call
SDL_SetRenderTarget() to setup rendering to a texture, and then call
SDL_RenderPresent() normally to complete drawing a frame.

**Thread safety:** If this function is called with a valid GPU device, it should
be called on the thread that created the device. If this
function is called with a valid window, it should be called
on the thread that created the window.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_CreateRendererWithProperties

**See also:** SDL_GetGPURendererDevice

**See also:** SDL_CreateGPUShader

**See also:** SDL_CreateGPURenderState

**See also:** SDL_SetGPURenderState

**Parameter `device`:** the GPU device to use with the renderer, or NULL to create a
device.

**Parameter `window`:** the window where rendering is displayed, or NULL to create an
offscreen renderer.

**Returns:** a valid rendering context or NULL if there was an error; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33678).

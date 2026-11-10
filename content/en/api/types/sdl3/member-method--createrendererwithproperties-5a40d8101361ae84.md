---
title: "SDLContext.RawApi — Method: CreateRendererWithProperties"
description: "Exact Method: CreateRendererWithProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5a40d8101361ae84
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateRendererWithProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateRendererWithProperties`

<a id="api-62ee453cf4e44164"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateRendererWithProperties(System.UInt32) 82e355fe1bc4d99b074b63267874d815f399dadb065853c79314c58d87eaeb47 -->

```csharp
public Inno.Native.Sdl3.SDLRenderer* Inno.Native.Sdl3.SDLContext.RawApi.CreateRendererWithProperties(uint props)
```

Create a 2D rendering context for a window, with the specified properties.
These are the supported properties:
- `SDL_PROP_RENDERER_CREATE_NAME_STRING`: the name of the rendering driver
to use, if a specific one is desired
- `SDL_PROP_RENDERER_CREATE_WINDOW_POINTER`: the window where rendering is
displayed, required if this isn't a software renderer using a surface
- `SDL_PROP_RENDERER_CREATE_SURFACE_POINTER`: the surface where rendering
is displayed, if you want a software renderer without a window
- `SDL_PROP_RENDERER_CREATE_OUTPUT_COLORSPACE_NUMBER`: an SDL_Colorspace
value describing the colorspace for output to the display, defaults to
SDL_COLORSPACE_SRGB. The direct3d11, direct3d12, and metal renderers
support SDL_COLORSPACE_SRGB_LINEAR, which is a linear color space and
supports HDR output. If you select SDL_COLORSPACE_SRGB_LINEAR, drawing
still uses the sRGB colorspace, but values can go beyond 1.0 and float
(linear) format textures can be used for HDR content.
- `SDL_PROP_RENDERER_CREATE_PRESENT_VSYNC_NUMBER`: non-zero if you want
present synchronized with the refresh rate. This property can take any
value that is supported by SDL_SetRenderVSync() for the renderer.
With the SDL GPU renderer (since SDL 3.4.0):
- `SDL_PROP_RENDERER_CREATE_GPU_DEVICE_POINTER`: the device to use with the
renderer, optional.
- `SDL_PROP_RENDERER_CREATE_GPU_SHADERS_SPIRV_BOOLEAN`: the app is able to
provide SPIR-V shaders to SDL_GPURenderState, optional.
- `SDL_PROP_RENDERER_CREATE_GPU_SHADERS_DXIL_BOOLEAN`: the app is able to
provide DXIL shaders to SDL_GPURenderState, optional.
- `SDL_PROP_RENDERER_CREATE_GPU_SHADERS_MSL_BOOLEAN`: the app is able to
provide MSL shaders to SDL_GPURenderState, optional.
With the vulkan renderer:
- `SDL_PROP_RENDERER_CREATE_VULKAN_INSTANCE_POINTER`: the VkInstance to use
with the renderer, optional.
- `SDL_PROP_RENDERER_CREATE_VULKAN_SURFACE_NUMBER`: the VkSurfaceKHR to use
with the renderer, optional.
- `SDL_PROP_RENDERER_CREATE_VULKAN_PHYSICAL_DEVICE_POINTER`: the
VkPhysicalDevice to use with the renderer, optional.
- `SDL_PROP_RENDERER_CREATE_VULKAN_DEVICE_POINTER`: the VkDevice to use
with the renderer, optional.
- `SDL_PROP_RENDERER_CREATE_VULKAN_GRAPHICS_QUEUE_FAMILY_INDEX_NUMBER`: the
queue family index used for rendering.
- `SDL_PROP_RENDERER_CREATE_VULKAN_PRESENT_QUEUE_FAMILY_INDEX_NUMBER`: the
queue family index used for presentation.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateProperties

**See also:** SDL_CreateRenderer

**See also:** SDL_CreateSoftwareRenderer

**See also:** SDL_DestroyRenderer

**See also:** SDL_GetRendererName

**Parameter `props`:** the properties to use.

**Returns:** a valid rendering context or NULL if there was an error; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22985).

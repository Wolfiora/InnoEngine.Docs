---
title: "SDLContext.RawApi — Method: GetRendererProperties"
description: "Exact Method: GetRendererProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c8d2004a2a158eb7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRendererProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRendererProperties`

<a id="api-804567c27536d93b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRendererProperties(Inno.Native.Sdl3.SDLRenderer*) 8c705cfc7f67dfce2a9c69dd016f0501f4227af4c771facb92948981fbeeca1a -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetRendererProperties(Inno.Native.Sdl3.SDLRenderer* renderer)
```

Get the properties associated with a renderer.
The following read-only properties are provided by SDL:
- `SDL_PROP_RENDERER_NAME_STRING`: the name of the rendering driver
- `SDL_PROP_RENDERER_WINDOW_POINTER`: the window where rendering is
displayed, if any
- `SDL_PROP_RENDERER_SURFACE_POINTER`: the surface where rendering is
displayed, if this is a software renderer without a window
- `SDL_PROP_RENDERER_VSYNC_NUMBER`: the current vsync setting
- `SDL_PROP_RENDERER_MAX_TEXTURE_SIZE_NUMBER`: the maximum texture width
and height
- `SDL_PROP_RENDERER_TEXTURE_FORMATS_POINTER`: a (const SDL_PixelFormat *)
array of pixel formats, terminated with SDL_PIXELFORMAT_UNKNOWN,
representing the available texture formats for this renderer.
- `SDL_PROP_RENDERER_TEXTURE_WRAPPING_BOOLEAN`: true if the renderer
supports SDL_TEXTURE_ADDRESS_WRAP on non-power-of-two textures.
- `SDL_PROP_RENDERER_OUTPUT_COLORSPACE_NUMBER`: an SDL_Colorspace value
describing the colorspace for output to the display, defaults to
SDL_COLORSPACE_SRGB.
- `SDL_PROP_RENDERER_HDR_ENABLED_BOOLEAN`: true if the output colorspace is
SDL_COLORSPACE_SRGB_LINEAR and the renderer is showing on a display with
HDR enabled. This property can change dynamically when
SDL_EVENT_WINDOW_HDR_STATE_CHANGED is sent.
- `SDL_PROP_RENDERER_SDR_WHITE_POINT_FLOAT`: the value of SDR white in the
SDL_COLORSPACE_SRGB_LINEAR colorspace. When HDR is enabled, this value is
automatically multiplied into the color scale. This property can change
dynamically when SDL_EVENT_WINDOW_HDR_STATE_CHANGED is sent.
- `SDL_PROP_RENDERER_HDR_HEADROOM_FLOAT`: the additional high dynamic range
that can be displayed, in terms of the SDR white point. When HDR is not
enabled, this will be 1.0. This property can change dynamically when
SDL_EVENT_WINDOW_HDR_STATE_CHANGED is sent.
With the direct3d renderer:
- `SDL_PROP_RENDERER_D3D9_DEVICE_POINTER`: the IDirect3DDevice9 associated
with the renderer
With the direct3d11 renderer:
- `SDL_PROP_RENDERER_D3D11_DEVICE_POINTER`: the ID3D11Device associated
with the renderer
- `SDL_PROP_RENDERER_D3D11_SWAPCHAIN_POINTER`: the IDXGISwapChain1
associated with the renderer. This may change when the window is resized.
With the direct3d12 renderer:
- `SDL_PROP_RENDERER_D3D12_DEVICE_POINTER`: the ID3D12Device associated
with the renderer
- `SDL_PROP_RENDERER_D3D12_SWAPCHAIN_POINTER`: the IDXGISwapChain4
associated with the renderer.
- `SDL_PROP_RENDERER_D3D12_COMMAND_QUEUE_POINTER`: the ID3D12CommandQueue
associated with the renderer
With the vulkan renderer:
- `SDL_PROP_RENDERER_VULKAN_INSTANCE_POINTER`: the VkInstance associated
with the renderer
- `SDL_PROP_RENDERER_VULKAN_SURFACE_NUMBER`: the VkSurfaceKHR associated
with the renderer
- `SDL_PROP_RENDERER_VULKAN_PHYSICAL_DEVICE_POINTER`: the VkPhysicalDevice
associated with the renderer
- `SDL_PROP_RENDERER_VULKAN_DEVICE_POINTER`: the VkDevice associated with
the renderer
- `SDL_PROP_RENDERER_VULKAN_GRAPHICS_QUEUE_FAMILY_INDEX_NUMBER`: the queue
family index used for rendering
- `SDL_PROP_RENDERER_VULKAN_PRESENT_QUEUE_FAMILY_INDEX_NUMBER`: the queue
family index used for presentation
- `SDL_PROP_RENDERER_VULKAN_SWAPCHAIN_IMAGE_COUNT_NUMBER`: the number of
swapchain images, or potential frames in flight, used by the Vulkan
renderer
With the gpu renderer:
- `SDL_PROP_RENDERER_GPU_DEVICE_POINTER`: the SDL_GPUDevice associated with
the renderer

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `renderer`:** the rendering context.

**Returns:** a valid property ID on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21203).

---
title: "SDLContext.RawApi — Method: CreateGpuDeviceWithProperties"
description: "Exact Method: CreateGpuDeviceWithProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c7d0db8c1f2bd7cb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateGpuDeviceWithProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateGpuDeviceWithProperties`

<a id="api-962d2bd96c7b7be4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuDeviceWithProperties(System.UInt32) 6e55d2b5bc71af5d7736b5a7fd7d918ec8d6e2929930500526cd74aacc468958 -->

```csharp
public Inno.Native.Sdl3.SDLGPUDevice* Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuDeviceWithProperties(uint props)
```

Creates a GPU context.
These are the supported properties:
- `SDL_PROP_GPU_DEVICE_CREATE_DEBUGMODE_BOOLEAN`: enable debug mode
properties and validations, defaults to true.
- `SDL_PROP_GPU_DEVICE_CREATE_PREFERLOWPOWER_BOOLEAN`: enable to prefer
energy efficiency over maximum GPU performance, defaults to false.
- `SDL_PROP_GPU_DEVICE_CREATE_VERBOSE_BOOLEAN`: enable to automatically log
useful debug information on device creation, defaults to true.
- `SDL_PROP_GPU_DEVICE_CREATE_NAME_STRING`: the name of the GPU driver to
use, if a specific one is desired.
- `SDL_PROP_GPU_DEVICE_CREATE_FEATURE_CLIP_DISTANCE_BOOLEAN`: Enable Vulkan
device feature shaderClipDistance. If disabled, clip distances are not
supported in shader code: gl_ClipDistance[] built-ins of GLSL,
SV_ClipDistance0/1 semantics of HLSL and [[clip_distance]] attribute of
Metal. Disabling optional features allows the application to run on some
older Android devices. Defaults to true.
- `SDL_PROP_GPU_DEVICE_CREATE_FEATURE_DEPTH_CLAMPING_BOOLEAN`: Enable
Vulkan device feature depthClamp. If disabled, there is no depth clamp
support and enable_depth_clip in SDL_GPURasterizerState must always be
set to true. Disabling optional features allows the application to run on
some older Android devices. Defaults to true.
- `SDL_PROP_GPU_DEVICE_CREATE_FEATURE_INDIRECT_DRAW_FIRST_INSTANCE_BOOLEAN`:
Enable Vulkan device feature drawIndirectFirstInstance. If disabled, the
argument first_instance of SDL_GPUIndirectDrawCommand must be set to
zero. Disabling optional features allows the application to run on some
older Android devices. Defaults to true.
- `SDL_PROP_GPU_DEVICE_CREATE_FEATURE_ANISOTROPY_BOOLEAN`: Enable Vulkan
device feature samplerAnisotropy. If disabled, enable_anisotropy of
SDL_GPUSamplerCreateInfo must be set to false. Disabling optional
features allows the application to run on some older Android devices.
Defaults to true.
These are the current shader format properties:
- `SDL_PROP_GPU_DEVICE_CREATE_SHADERS_PRIVATE_BOOLEAN`: The app is able to
provide shaders for an NDA platform.
- `SDL_PROP_GPU_DEVICE_CREATE_SHADERS_SPIRV_BOOLEAN`: The app is able to
provide SPIR-V shaders if applicable.
- `SDL_PROP_GPU_DEVICE_CREATE_SHADERS_DXBC_BOOLEAN`: The app is able to
provide DXBC shaders if applicable
- `SDL_PROP_GPU_DEVICE_CREATE_SHADERS_DXIL_BOOLEAN`: The app is able to
provide DXIL shaders if applicable.
- `SDL_PROP_GPU_DEVICE_CREATE_SHADERS_MSL_BOOLEAN`: The app is able to
provide MSL shaders if applicable.
- `SDL_PROP_GPU_DEVICE_CREATE_SHADERS_METALLIB_BOOLEAN`: The app is able to
provide Metal shader libraries if applicable.
With the D3D12 backend:
- `SDL_PROP_GPU_DEVICE_CREATE_D3D12_SEMANTIC_NAME_STRING`: the prefix to
use for all vertex semantics, default is "TEXCOORD".
- `SDL_PROP_GPU_DEVICE_CREATE_D3D12_ALLOW_FEWER_RESOURCE_SLOTS_BOOLEAN`: By
default, Resourcing Binding Tier 2 is required for D3D12 support.
However, an application can set this property to true to enable Tier 1
support, if (and only if) the application uses 8 or fewer storage
resources across all shader stages. As of writing, this property is
useful for targeting Intel Haswell and Broadwell GPUs; other hardware
either supports Tier 2 Resource Binding or does not support D3D12 in any
capacity. Defaults to false.
- `SDL_PROP_GPU_DEVICE_CREATE_D3D12_AGILITY_SDK_VERSION_NUMBER`: Certain
feature checks are only possible on Windows 11 by default. By setting
this alongside `SDL_PROP_GPU_DEVICE_CREATE_D3D12_AGILITY_SDK_PATH_STRING`
and vendoring D3D12Core.dll from the D3D12 Agility SDK, you can make
those feature checks possible on older platforms. The version you provide
must match the one given in the DLL.
- `SDL_PROP_GPU_DEVICE_CREATE_D3D12_AGILITY_SDK_PATH_STRING`: Certain
feature checks are only possible on Windows 11 by default. By setting
this alongside
`SDL_PROP_GPU_DEVICE_CREATE_D3D12_AGILITY_SDK_VERSION_NUMBER` and
vendoring D3D12Core.dll from the D3D12 Agility SDK, you can make those
feature checks possible on older platforms. The path you provide must be
relative to the executable path of your app. Be sure not to put the DLL
in the same directory as the exe; Microsoft strongly advises against
this!
With the Vulkan backend:
- `SDL_PROP_GPU_DEVICE_CREATE_VULKAN_REQUIRE_HARDWARE_ACCELERATION_BOOLEAN`:
By default, Vulkan device enumeration includes drivers of all types,
including software renderers (for example, the Lavapipe Mesa driver).
This can be useful if your application _requires_ SDL_GPU, but if you can
provide your own fallback renderer (for example, an OpenGL renderer) this
property can be set to true. Defaults to false.
- `SDL_PROP_GPU_DEVICE_CREATE_VULKAN_OPTIONS_POINTER`: a pointer to an
SDL_GPUVulkanOptions structure to be processed during device creation.
This allows configuring a variety of Vulkan-specific options such as
increasing the API version and opting into extensions aside from the
minimal set SDL requires.
With the Metal backend: -
`SDL_PROP_GPU_DEVICE_CREATE_METAL_ALLOW_MACFAMILY1_BOOLEAN`: By default,
macOS support requires what Apple calls "MTLGPUFamilyMac2" hardware or
newer. However, an application can set this property to true to enable
support for "MTLGPUFamilyMac1" hardware, if (and only if) the application
does not write to sRGB textures. (For history's sake: MacFamily1 also does
not support indirect command buffers, MSAA depth resolve, and stencil
resolve/feedback, but these are not exposed features in SDL_GPU.)

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGPUShaderFormats

**See also:** SDL_GetGPUDeviceDriver

**See also:** SDL_DestroyGPUDevice

**See also:** SDL_GPUSupportsProperties

**Parameter `props`:** the properties to use.

**Returns:** a GPU context on success or NULL on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26270).

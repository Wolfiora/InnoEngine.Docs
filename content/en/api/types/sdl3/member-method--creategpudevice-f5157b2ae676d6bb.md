---
title: "SDLContext.RawApi — Method: CreateGpuDevice"
description: "Exact Method: CreateGpuDevice contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f5157b2ae676d6bb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateGpuDevice

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateGpuDevice`

<a id="api-3d36c79ba6166a40"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuDevice(System.UInt32,System.Byte,System.SByte*) 44836a9a6fa978c3861e4d434575845a3ebd537776905b0985ab38302bddf7c4 -->

```csharp
public Inno.Native.Sdl3.SDLGPUDevice* Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuDevice(uint format_flags, byte debug_mode, sbyte* name)
```

Creates a GPU context.
The GPU driver name can be one of the following:
- "vulkan": [Vulkan](https://wiki.libsdl.org/SDL3/CategoryGPU#vulkan)
- "direct3d12": [D3D12](https://wiki.libsdl.org/SDL3/CategoryGPU#d3d12)
- "metal": [Metal](https://wiki.libsdl.org/SDL3/CategoryGPU#metal)
- NULL: let SDL pick the optimal driver

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUDeviceWithProperties

**See also:** SDL_GetGPUShaderFormats

**See also:** SDL_GetGPUDeviceDriver

**See also:** SDL_DestroyGPUDevice

**See also:** SDL_GPUSupportsShaderFormats

**Parameter `format_flags`:** a bitflag indicating which shader formats the app is
able to provide.

**Parameter `debug_mode`:** enable debug mode properties and validations.

**Parameter `name`:** the preferred GPU driver, or NULL to let SDL pick the optimal
driver.

**Returns:** a GPU context on success or NULL on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27660).

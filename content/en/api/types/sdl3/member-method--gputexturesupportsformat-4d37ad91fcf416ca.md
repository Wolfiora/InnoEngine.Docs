---
title: "SDLContext.RawApi — Method: GpuTextureSupportsFormat"
description: "Exact Method: GpuTextureSupportsFormat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4d37ad91fcf416ca
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GpuTextureSupportsFormat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GpuTextureSupportsFormat`

<a id="api-4302afb24aeb9a8b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GpuTextureSupportsFormat(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUTextureFormat,Inno.Native.Sdl3.SDLGPUTextureType,System.UInt32) 13e5c617d974d38896792a2b74eae1c58377232683091bdc9f73511a456b481d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GpuTextureSupportsFormat(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUTextureFormat format, Inno.Native.Sdl3.SDLGPUTextureType type, uint usage)
```

Determines whether a texture format is supported for a given type and
usage.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `device`:** a GPU context.

**Parameter `format`:** the texture format to check.

**Parameter `type`:** the type of texture (2D, 3D, Cube).

**Parameter `usage`:** a bitmask of all usage scenarios to check.

**Returns:** whether the texture format is supported for this type and usage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49445).

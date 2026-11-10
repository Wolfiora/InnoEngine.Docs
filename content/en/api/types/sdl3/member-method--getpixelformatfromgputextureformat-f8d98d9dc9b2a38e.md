---
title: "SDL — Method: GetPixelFormatFromGpuTextureFormat"
description: "Exact Method: GetPixelFormatFromGpuTextureFormat contracts in SDL."
uid: api.inno.native.sdl3.f8d98d9dc9b2a38e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetPixelFormatFromGpuTextureFormat

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPixelFormatFromGpuTextureFormat`

<a id="api-afc5f9836e58dafc"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetPixelFormatFromGpuTextureFormat(Inno.Native.Sdl3.SDLGPUTextureFormat) 235c84a5d6b54137c263d4c6a524e4a92fe9b39e9c6f3fa0e8539b4f0dd54ca7 -->

```csharp
public static Inno.Native.Sdl3.SDLPixelFormat Inno.Native.Sdl3.SDL.GetPixelFormatFromGpuTextureFormat(Inno.Native.Sdl3.SDLGPUTextureFormat format)
```

Get the SDL pixel format corresponding to a GPU texture format.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `format`:** a texture format.

**Returns:** the corresponding pixel format, or SDL_PIXELFORMAT_UNKNOWN if
there is no corresponding pixel format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1400).

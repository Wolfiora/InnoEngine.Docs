---
title: "SDL — Method: GetGpuTextureFormatFromPixelFormat"
description: "Exact Method: GetGpuTextureFormatFromPixelFormat contracts in SDL."
uid: api.inno.native.sdl3.6ddc69291b4a4c51
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetGpuTextureFormatFromPixelFormat

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGpuTextureFormatFromPixelFormat`

<a id="api-dd898c0ab93760bc"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetGpuTextureFormatFromPixelFormat(Inno.Native.Sdl3.SDLPixelFormat) d5339ba6ebe6af8d1ffd933b5a17dd9b8acbf00d0c3d3a7dd9cb95b45a559e7e -->

```csharp
public static Inno.Native.Sdl3.SDLGPUTextureFormat Inno.Native.Sdl3.SDL.GetGpuTextureFormatFromPixelFormat(Inno.Native.Sdl3.SDLPixelFormat format)
```

Get the GPU texture format corresponding to an SDL pixel format.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `format`:** a pixel format.

**Returns:** the corresponding GPU texture format, or
SDL_GPU_TEXTUREFORMAT_INVALID if there is no corresponding GPU
texture format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1428).

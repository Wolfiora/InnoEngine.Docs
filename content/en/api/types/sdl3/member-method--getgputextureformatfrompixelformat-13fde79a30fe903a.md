---
title: "SDLContext.RawApi — Method: GetGpuTextureFormatFromPixelFormat"
description: "Exact Method: GetGpuTextureFormatFromPixelFormat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.13fde79a30fe903a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGpuTextureFormatFromPixelFormat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGpuTextureFormatFromPixelFormat`

<a id="api-127aaf46c927bfe0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGpuTextureFormatFromPixelFormat(Inno.Native.Sdl3.SDLPixelFormat) 3c3720f9baca1ace0918597fd94abde7ff099ed55ca4a59faeb02a56c3ad3fdf -->

```csharp
public Inno.Native.Sdl3.SDLGPUTextureFormat Inno.Native.Sdl3.SDLContext.RawApi.GetGpuTextureFormatFromPixelFormat(Inno.Native.Sdl3.SDLPixelFormat format)
```

Get the GPU texture format corresponding to an SDL pixel format.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `format`:** a pixel format.

**Returns:** the corresponding GPU texture format, or
SDL_GPU_TEXTUREFORMAT_INVALID if there is no corresponding GPU
texture format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28113).

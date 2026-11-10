---
title: "SDLContext — Method: GetPixelFormatFromGpuTextureFormat"
description: "Exact Method: GetPixelFormatFromGpuTextureFormat contracts in SDLContext."
uid: api.inno.native.sdl3.fcfd09611541282c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetPixelFormatFromGpuTextureFormat

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPixelFormatFromGpuTextureFormat`

<a id="api-61f708222a23ad0b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetPixelFormatFromGpuTextureFormat(Inno.Native.Sdl3.SDLGPUTextureFormat) 2952ba07f641a605c1aca8331582da2de6346c60a32a2c720b44ff9b408a8025 -->

```csharp
public Inno.Native.Sdl3.SDLPixelFormat Inno.Native.Sdl3.SDLContext.GetPixelFormatFromGpuTextureFormat(Inno.Native.Sdl3.SDLGPUTextureFormat format)
```

Get the SDL pixel format corresponding to a GPU texture format.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `format`:** a texture format.

**Returns:** the corresponding pixel format, or SDL_PIXELFORMAT_UNKNOWN if
there is no corresponding pixel format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13057).

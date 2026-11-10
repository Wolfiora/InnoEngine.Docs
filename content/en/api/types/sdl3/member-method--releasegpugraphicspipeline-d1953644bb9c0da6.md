---
title: "SDLContext.RawApi — Method: ReleaseGpuGraphicsPipeline"
description: "Exact Method: ReleaseGpuGraphicsPipeline contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d1953644bb9c0da6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReleaseGpuGraphicsPipeline

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReleaseGpuGraphicsPipeline`

<a id="api-6df0a484f8972d9c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReleaseGpuGraphicsPipeline(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUGraphicsPipeline*) 38b2996fb988bf9f55824aa8d8b4f113db18b128d941b12b33aa39548d59c2bf -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.ReleaseGpuGraphicsPipeline(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUGraphicsPipeline* graphics_pipeline)
```

Frees the given graphics pipeline as soon as it is safe to do so.
You must not reference the graphics pipeline after calling this function.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `device`:** a GPU context.

**Parameter `graphics_pipeline`:** a graphics pipeline to be destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19456).

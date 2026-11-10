---
title: "SDLContext.RawApi — Method: BindGpuGraphicsPipeline"
description: "Exact Method: BindGpuGraphicsPipeline contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0ce91fadd121036f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BindGpuGraphicsPipeline

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BindGpuGraphicsPipeline`

<a id="api-4be2279e8ed8cc7d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BindGpuGraphicsPipeline(Inno.Native.Sdl3.SDLGPURenderPass*,Inno.Native.Sdl3.SDLGPUGraphicsPipeline*) 02c3fa5e51207a774331f6253dba7508584e3c425a32d73f3d7c70ed33d2433e -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.BindGpuGraphicsPipeline(Inno.Native.Sdl3.SDLGPURenderPass* render_pass, Inno.Native.Sdl3.SDLGPUGraphicsPipeline* graphics_pipeline)
```

Binds a graphics pipeline on a render pass to be used in rendering.
A graphics pipeline must be bound before making any draw calls.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `render_pass`:** a render pass handle.

**Parameter `graphics_pipeline`:** the graphics pipeline to bind.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38982).

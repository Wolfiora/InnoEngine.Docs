---
title: "SDLContext.RawApi — Method: EndGpuRenderPass"
description: "Exact Method: EndGpuRenderPass contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8675ebe75f4fe235
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: EndGpuRenderPass

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EndGpuRenderPass`

<a id="api-fed9d1e5c346e615"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.EndGpuRenderPass(Inno.Native.Sdl3.SDLGPURenderPass*) ca11809daeb10f052ffc3c060d3a0d691ae154682f3fd92eadf032ddb9013452 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.EndGpuRenderPass(Inno.Native.Sdl3.SDLGPURenderPass* render_pass)
```

Ends the given render pass.
All bound graphics state on the render pass command buffer is unset. The
render pass handle is now invalid.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `render_pass`:** a render pass handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33695).

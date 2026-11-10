---
title: "SDLContext.RawApi — Method: DrawGpuPrimitives"
description: "Exact Method: DrawGpuPrimitives contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2018f918e0026089
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DrawGpuPrimitives

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DrawGpuPrimitives`

<a id="api-4a6aaf4972a8d201"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DrawGpuPrimitives(Inno.Native.Sdl3.SDLGPURenderPass*,System.UInt32,System.UInt32,System.UInt32,System.UInt32) 3f9aa979a4e9f78a8c6d760e0d7e1ba49bb72d531d19eec758dc11bb865a11f8 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DrawGpuPrimitives(Inno.Native.Sdl3.SDLGPURenderPass* render_pass, uint num_vertices, uint num_instances, uint first_vertex, uint first_instance)
```

Draws data using bound graphics state.
You must not call this function before binding a graphics pipeline.
Note that the `first_vertex` and `first_instance` parameters are NOT
compatible with built-in vertex/instance ID variables in shaders (for
example, SV_VertexID); GPU APIs and shader languages do not define these
built-in variables consistently, so if your shader depends on them, the
only way to keep behavior consistent and portable is to always pass 0 for
the correlating parameter in the draw calls.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `render_pass`:** a render pass handle.

**Parameter `num_vertices`:** the number of vertices to draw.

**Parameter `num_instances`:** the number of instances that will be drawn.

**Parameter `first_vertex`:** the index of the first vertex to draw.

**Parameter `first_instance`:** the ID of the first instance to draw.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43681).

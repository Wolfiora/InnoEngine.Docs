---
title: "SDLContext.RawApi — Method: DrawGpuIndexedPrimitives"
description: "Exact Method: DrawGpuIndexedPrimitives contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a9a9193178b18633
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DrawGpuIndexedPrimitives

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DrawGpuIndexedPrimitives`

<a id="api-4fbd4ed8e1dd44d0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DrawGpuIndexedPrimitives(Inno.Native.Sdl3.SDLGPURenderPass*,System.UInt32,System.UInt32,System.UInt32,System.Int32,System.UInt32) 1e0f77e3c8a4d7bac4f3022b050f879f24ae892fc9147872a671826e959ee934 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DrawGpuIndexedPrimitives(Inno.Native.Sdl3.SDLGPURenderPass* render_pass, uint num_indices, uint num_instances, uint first_index, int vertex_offset, uint first_instance)
```

Draws data using bound graphics state with an index buffer and instancing
enabled.
You must not call this function before binding a graphics pipeline.
Note that the `first_vertex` and `first_instance` parameters are NOT
compatible with built-in vertex/instance ID variables in shaders (for
example, SV_VertexID); GPU APIs and shader languages do not define these
built-in variables consistently, so if your shader depends on them, the
only way to keep behavior consistent and portable is to always pass 0 for
the correlating parameter in the draw calls.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `render_pass`:** a render pass handle.

**Parameter `num_indices`:** the number of indices to draw per instance.

**Parameter `num_instances`:** the number of instances to draw.

**Parameter `first_index`:** the starting index within the index buffer.

**Parameter `vertex_offset`:** value added to vertex index before indexing into the
vertex buffer.

**Parameter `first_instance`:** the ID of the first instance to draw.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52705).

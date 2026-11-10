---
title: "SDLContext.RawApi — Method: SetGpuStencilReference"
description: "Exact Method: SetGpuStencilReference contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fdfc84162ed65014
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGpuStencilReference

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGpuStencilReference`

<a id="api-608d3adf11edd798"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGpuStencilReference(Inno.Native.Sdl3.SDLGPURenderPass*,System.Byte) 1d16ca9fa9989d6b89ae2409fcdf74b252d55a3f69d6387c8bd91d9b3471817f -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetGpuStencilReference(Inno.Native.Sdl3.SDLGPURenderPass* render_pass, byte reference)
```

Sets the current stencil reference value on a command buffer.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `render_pass`:** a render pass handle.

**Parameter `reference`:** the stencil reference value to set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17575).

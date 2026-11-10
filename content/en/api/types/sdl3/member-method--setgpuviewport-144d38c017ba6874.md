---
title: "SDLContext.RawApi — Method: SetGpuViewport"
description: "Exact Method: SetGpuViewport contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.144d38c017ba6874
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGpuViewport

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGpuViewport`

<a id="api-607a25df8409595d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGpuViewport(Inno.Native.Sdl3.SDLGPURenderPass*,Inno.Native.Sdl3.SDLGPUViewport*) 50bb68cd9654e7277e94e992bf21409e4f061226e67f0468c12801ba4f2a8c12 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetGpuViewport(Inno.Native.Sdl3.SDLGPURenderPass* render_pass, Inno.Native.Sdl3.SDLGPUViewport* viewport)
```

Sets the current viewport state on a command buffer.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `render_pass`:** a render pass handle.

**Parameter `viewport`:** the viewport to set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20139).

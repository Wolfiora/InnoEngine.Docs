---
title: "SDLContext.RawApi — Method: SetGpuScissor"
description: "Exact Method: SetGpuScissor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fe23aa135aa70138
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGpuScissor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGpuScissor`

<a id="api-687707b4b34465d7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGpuScissor(Inno.Native.Sdl3.SDLGPURenderPass*,Inno.Native.Sdl3.SDLRect*) acca480ecc8bcd8c9942224ed889c520d9183f855fd04351acab9bab491816bd -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetGpuScissor(Inno.Native.Sdl3.SDLGPURenderPass* render_pass, Inno.Native.Sdl3.SDLRect* scissor)
```

Sets the current scissor state on a command buffer.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `render_pass`:** a render pass handle.

**Parameter `scissor`:** the scissor area to set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25444).

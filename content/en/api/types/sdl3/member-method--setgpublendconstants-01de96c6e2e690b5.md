---
title: "SDLContext.RawApi — Method: SetGpuBlendConstants"
description: "Exact Method: SetGpuBlendConstants contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.01de96c6e2e690b5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGpuBlendConstants

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGpuBlendConstants`

<a id="api-91c9838d3b1659a5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGpuBlendConstants(Inno.Native.Sdl3.SDLGPURenderPass*,Inno.Native.Sdl3.SDLFColor*) 7e534bb5f14e09595e22aee912b2f9f03893c2eed645931708c0468679b37fc1 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetGpuBlendConstants(Inno.Native.Sdl3.SDLGPURenderPass* render_pass, Inno.Native.Sdl3.SDLFColor* blend_constants)
```

Sets the current blend constants on a command buffer.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GPU_BLENDFACTOR_CONSTANT_COLOR

**See also:** SDL_GPU_BLENDFACTOR_ONE_MINUS_CONSTANT_COLOR

**Parameter `render_pass`:** a render pass handle.

**Parameter `blend_constants`:** the blend constant color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30495).

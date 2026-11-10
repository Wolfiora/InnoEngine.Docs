---
title: "SDLContext.RawApi — Method: BeginGpuCopyPass"
description: "Exact Method: BeginGpuCopyPass contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1cadf3a9675a81a9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BeginGpuCopyPass

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginGpuCopyPass`

<a id="api-1de11d5177676e63"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BeginGpuCopyPass(Inno.Native.Sdl3.SDLGPUCommandBuffer*) b9d77d220a5db6445e46372f5df275b779dcb07c7af0c122f93b52616a27b6ac -->

```csharp
public Inno.Native.Sdl3.SDLGPUCopyPass* Inno.Native.Sdl3.SDLContext.RawApi.BeginGpuCopyPass(Inno.Native.Sdl3.SDLGPUCommandBuffer* command_buffer)
```

Begins a copy pass on a command buffer.
All operations related to copying to or from buffers or textures take place
inside a copy pass. You must not begin another copy pass, or a render pass
or compute pass before ending the copy pass.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_EndGPUCopyPass

**Parameter `command_buffer`:** a command buffer.

**Returns:** a copy pass handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25062).

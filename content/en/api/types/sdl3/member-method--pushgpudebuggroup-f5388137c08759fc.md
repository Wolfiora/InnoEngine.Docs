---
title: "SDLContext.RawApi — Method: PushGpuDebugGroup"
description: "Exact Method: PushGpuDebugGroup contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f5388137c08759fc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: PushGpuDebugGroup

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PushGpuDebugGroup`

<a id="api-8f2f1697c40142d4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.PushGpuDebugGroup(Inno.Native.Sdl3.SDLGPUCommandBuffer*,System.SByte*) 2c0e372bd77c6aa69464eadbce98c6d46294587efa5b15b85c8c1c95391ee9f0 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.PushGpuDebugGroup(Inno.Native.Sdl3.SDLGPUCommandBuffer* command_buffer, sbyte* name)
```

Begins a debug group with an arbitrary name.
Used for denoting groups of calls when viewing the command buffer
callstream in a graphics debugging tool.
Each call to SDL_PushGPUDebugGroup must have a corresponding call to
SDL_PopGPUDebugGroup.
On Direct3D 12, using SDL_PushGPUDebugGroup requires WinPixEventRuntime.dll
to be in your PATH or in the same directory as your executable. See
[here](https://devblogs.microsoft.com/pix/winpixeventruntime/)
for instructions on how to obtain it.
On some backends (e.g. Metal), pushing a debug group during a
render/blit/compute pass will create a group that is scoped to the native
pass rather than the command buffer. For best results, if you push a debug
group during a pass, always pop it in the same pass.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PopGPUDebugGroup

**Parameter `command_buffer`:** a command buffer.

**Parameter `name`:** a UTF-8 string constant that names the group.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41990).

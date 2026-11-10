---
title: "SDLContext.RawApi — Method: PopGpuDebugGroup"
description: "Exact Method: PopGpuDebugGroup contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5936fd8920b245fc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: PopGpuDebugGroup

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PopGpuDebugGroup`

<a id="api-075e608980551fcc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.PopGpuDebugGroup(Inno.Native.Sdl3.SDLGPUCommandBuffer*) 0c2eb6999aef0a93624127522aa6e6c109e5d250d1e97dc40e58df224a1ad1b8 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.PopGpuDebugGroup(Inno.Native.Sdl3.SDLGPUCommandBuffer* command_buffer)
```

Ends the most-recently pushed debug group.
On Direct3D 12, using SDL_PopGPUDebugGroup requires WinPixEventRuntime.dll
to be in your PATH or in the same directory as your executable. See
[here](https://devblogs.microsoft.com/pix/winpixeventruntime/)
for instructions on how to obtain it.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PushGPUDebugGroup

**Parameter `command_buffer`:** a command buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35748).

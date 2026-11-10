---
title: "SDLContext.RawApi — Method: InsertGpuDebugLabel"
description: "Exact Method: InsertGpuDebugLabel contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e1afa69c37b218c6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: InsertGpuDebugLabel

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `InsertGpuDebugLabel`

<a id="api-84de542ed81122ed"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.InsertGpuDebugLabel(Inno.Native.Sdl3.SDLGPUCommandBuffer*,System.SByte*) de38de498e8cf823cb42b21cb59f362a81475754c674d8d1960a27bc5b9ea4c0 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.InsertGpuDebugLabel(Inno.Native.Sdl3.SDLGPUCommandBuffer* command_buffer, sbyte* text)
```

Inserts an arbitrary string label into the command buffer callstream.
Useful for debugging.
On Direct3D 12, using SDL_InsertGPUDebugLabel requires
WinPixEventRuntime.dll to be in your PATH or in the same directory as your
executable. See
[here](https://devblogs.microsoft.com/pix/winpixeventruntime/)
for instructions on how to obtain it.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `command_buffer`:** a command buffer.

**Parameter `text`:** a UTF-8 string constant to insert as the label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36592).

---
title: "SDLContext.RawApi — Method: KillProcess"
description: "Exact Method: KillProcess contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ef2e2e7fcb4ea77d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: KillProcess

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `KillProcess`

<a id="api-cf032cfde7b633fb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.KillProcess(Inno.Native.Sdl3.SDLProcess*,System.Byte) 3478d0d4b82dea8d7c1c7f62acd8241bb1fa01efa93b14dc92f821740b2744ae -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.KillProcess(Inno.Native.Sdl3.SDLProcess* process, byte force)
```

Stop a process.

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateProcess

**See also:** SDL_CreateProcessWithProperties

**See also:** SDL_WaitProcess

**See also:** SDL_DestroyProcess

**Parameter `process`:** The process to stop.

**Parameter `force`:** true to terminate the process immediately, false to try to
stop the process gracefully. In general you should try to stop
the process gracefully first as terminating a process may
leave it with half-written data or in some other unstable
state.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29424).

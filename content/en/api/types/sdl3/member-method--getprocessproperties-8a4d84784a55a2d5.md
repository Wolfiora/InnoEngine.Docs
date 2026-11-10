---
title: "SDLContext.RawApi — Method: GetProcessProperties"
description: "Exact Method: GetProcessProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8a4d84784a55a2d5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetProcessProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetProcessProperties`

<a id="api-be8b6399d4e3650a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetProcessProperties(Inno.Native.Sdl3.SDLProcess*) e17277e713670929a2c5140522f5b4ec3e605ce9aa613b07bbb24660e8f76fc9 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetProcessProperties(Inno.Native.Sdl3.SDLProcess* process)
```

Get the properties associated with a process.
The following read-only properties are provided by SDL:
- `SDL_PROP_PROCESS_PID_NUMBER`: the process ID of the process.
- `SDL_PROP_PROCESS_STDIN_POINTER`: an SDL_IOStream that can be used to
write input to the process, if it was created with
`SDL_PROP_PROCESS_CREATE_STDIN_NUMBER` set to `SDL_PROCESS_STDIO_APP`.
- `SDL_PROP_PROCESS_STDOUT_POINTER`: a non-blocking SDL_IOStream that can
be used to read output from the process, if it was created with
`SDL_PROP_PROCESS_CREATE_STDOUT_NUMBER` set to `SDL_PROCESS_STDIO_APP`.
- `SDL_PROP_PROCESS_STDERR_POINTER`: a non-blocking SDL_IOStream that can
be used to read error output from the process, if it was created with
`SDL_PROP_PROCESS_CREATE_STDERR_NUMBER` set to `SDL_PROCESS_STDIO_APP`.
- `SDL_PROP_PROCESS_BACKGROUND_BOOLEAN`: true if the process is running in
the background.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateProcess

**See also:** SDL_CreateProcessWithProperties

**Parameter `process`:** the process to query.

**Returns:** a valid property ID on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47011).

---
title: "SDLContext.RawApi — Method: CreateProcess"
description: "Exact Method: CreateProcess contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.54938411da17801d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateProcess

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateProcess`

<a id="api-176992a048f707e8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateProcess(System.SByte**,System.Byte) 928e16504cfa6013c74a9756e7699d63d509ba41e410293fed96a3fb2d05db75 -->

```csharp
public Inno.Native.Sdl3.SDLProcess* Inno.Native.Sdl3.SDLContext.RawApi.CreateProcess(sbyte** args, byte pipe_stdio)
```

Create a new process.
The path to the executable is supplied in args[0]. args[1..N] are
additional arguments passed on the command line of the new process, and the
argument list should be terminated with a NULL, e.g.:
```c
const char *args[] = { "myprogram", "argument", NULL };
```
Setting pipe_stdio to true is equivalent to setting
`SDL_PROP_PROCESS_CREATE_STDIN_NUMBER` and
`SDL_PROP_PROCESS_CREATE_STDOUT_NUMBER` to `SDL_PROCESS_STDIO_APP`, and
will allow the use of SDL_ReadProcess() or SDL_GetProcessInput() and
SDL_GetProcessOutput().
See SDL_CreateProcessWithProperties() for more details.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateProcessWithProperties

**See also:** SDL_GetProcessProperties

**See also:** SDL_ReadProcess

**See also:** SDL_GetProcessInput

**See also:** SDL_GetProcessOutput

**See also:** SDL_KillProcess

**See also:** SDL_WaitProcess

**See also:** SDL_DestroyProcess

**Parameter `args`:** the path and arguments for the new process.

**Parameter `pipe_stdio`:** true to create pipes to the process's standard input and
from the process's standard output, false for the process
to have no input and inherit the application's standard
output.

**Returns:** the newly created and running process, or NULL if the process
couldn't be created.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50798).

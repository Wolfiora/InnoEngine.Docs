---
title: "SDLContext.RawApi — Method: CreateProcessWithProperties"
description: "Exact Method: CreateProcessWithProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b7200c9b7055e1f5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateProcessWithProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateProcessWithProperties`

<a id="api-358d4432d921ddbd"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateProcessWithProperties(System.UInt32) 45d7649b0429dbe03eb38ed1bfb9f44d240acd21376f134f3ccc2bdb0ca00909 -->

```csharp
public Inno.Native.Sdl3.SDLProcess* Inno.Native.Sdl3.SDLContext.RawApi.CreateProcessWithProperties(uint props)
```

Create a new process with the specified properties.
These are the supported properties:
- `SDL_PROP_PROCESS_CREATE_ARGS_POINTER`: an array of strings containing
the program to run, any arguments, and a NULL pointer, e.g. const char
*args[] = { "myprogram", "argument", NULL }. This is a required property.
- `SDL_PROP_PROCESS_CREATE_ENVIRONMENT_POINTER`: an SDL_Environment
pointer. If this property is set, it will be the entire environment for
the process, otherwise the current environment is used.
- `SDL_PROP_PROCESS_CREATE_WORKING_DIRECTORY_STRING`: a UTF-8 encoded
string representing the working directory for the process, defaults to
the current working directory.
- `SDL_PROP_PROCESS_CREATE_STDIN_NUMBER`: an SDL_ProcessIO value describing
where standard input for the process comes from, defaults to
`SDL_PROCESS_STDIO_NULL`.
- `SDL_PROP_PROCESS_CREATE_STDIN_POINTER`: an SDL_IOStream pointer used for
standard input when `SDL_PROP_PROCESS_CREATE_STDIN_NUMBER` is set to
`SDL_PROCESS_STDIO_REDIRECT`.
- `SDL_PROP_PROCESS_CREATE_STDOUT_NUMBER`: an SDL_ProcessIO value
describing where standard output for the process goes to, defaults to
`SDL_PROCESS_STDIO_INHERITED`.
- `SDL_PROP_PROCESS_CREATE_STDOUT_POINTER`: an SDL_IOStream pointer used
for standard output when `SDL_PROP_PROCESS_CREATE_STDOUT_NUMBER` is set
to `SDL_PROCESS_STDIO_REDIRECT`.
- `SDL_PROP_PROCESS_CREATE_STDERR_NUMBER`: an SDL_ProcessIO value
describing where standard error for the process goes to, defaults to
`SDL_PROCESS_STDIO_INHERITED`.
- `SDL_PROP_PROCESS_CREATE_STDERR_POINTER`: an SDL_IOStream pointer used
for standard error when `SDL_PROP_PROCESS_CREATE_STDERR_NUMBER` is set to
`SDL_PROCESS_STDIO_REDIRECT`.
- `SDL_PROP_PROCESS_CREATE_STDERR_TO_STDOUT_BOOLEAN`: true if the error
output of the process should be redirected into the standard output of
the process. This property has no effect if
`SDL_PROP_PROCESS_CREATE_STDERR_NUMBER` is set.
- `SDL_PROP_PROCESS_CREATE_BACKGROUND_BOOLEAN`: true if the process should
run in the background. In this case the default input and output is
`SDL_PROCESS_STDIO_NULL` and the exitcode of the process is not
available, and will always be 0.
- `SDL_PROP_PROCESS_CREATE_CMDLINE_STRING`: a string containing the program
to run and any parameters. This string is passed directly to
`CreateProcess` on Windows, and does nothing on other platforms. This
property is only important if you want to start programs that does
non-standard command-line processing, and in most cases using
`SDL_PROP_PROCESS_CREATE_ARGS_POINTER` is sufficient.
On POSIX platforms, wait() and waitpid(-1, ...) should not be called, and
SIGCHLD should not be ignored or handled because those would prevent SDL
from properly tracking the lifetime of the underlying process. You should
use SDL_WaitProcess() instead.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateProcess

**See also:** SDL_GetProcessProperties

**See also:** SDL_ReadProcess

**See also:** SDL_GetProcessInput

**See also:** SDL_GetProcessOutput

**See also:** SDL_KillProcess

**See also:** SDL_WaitProcess

**See also:** SDL_DestroyProcess

**Parameter `props`:** the properties to use.

**Returns:** the newly created and running process, or NULL if the process
couldn't be created.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21503).

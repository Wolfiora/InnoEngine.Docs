---
title: "SDLContext.RawApi — Method: GetProcessOutput"
description: "Exact Method: GetProcessOutput contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.03b1a4481ee2f31a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetProcessOutput

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetProcessOutput`

<a id="api-4791e2dd387a4510"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetProcessOutput(Inno.Native.Sdl3.SDLProcess*) c3aecf2364191811bb51ba5ccfb003be8c7a943acc74665337d0cf6a211107e6 -->

```csharp
public Inno.Native.Sdl3.SDLIOStream* Inno.Native.Sdl3.SDLContext.RawApi.GetProcessOutput(Inno.Native.Sdl3.SDLProcess* process)
```

Get the SDL_IOStream associated with process standard output.
The process must have been created with SDL_CreateProcess() and pipe_stdio
set to true, or with SDL_CreateProcessWithProperties() and
`SDL_PROP_PROCESS_CREATE_STDOUT_NUMBER` set to `SDL_PROCESS_STDIO_APP`.
Reading from this stream can return 0 with SDL_GetIOStatus() returning
SDL_IO_STATUS_NOT_READY if no output is available yet.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateProcess

**See also:** SDL_CreateProcessWithProperties

**See also:** SDL_GetProcessInput

**Parameter `process`:** The process to get the output stream for.

**Returns:** the output stream or NULL on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23938).

---
title: "SDLContext.RawApi — Method: GetProcessInput"
description: "Exact Method: GetProcessInput contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.79e27ffd2d85c80d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetProcessInput

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetProcessInput`

<a id="api-380e8129934bab4b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetProcessInput(Inno.Native.Sdl3.SDLProcess*) d6297df832663d720f318df802b349decd0e2b5e3832c5e04883ca62066bc328 -->

```csharp
public Inno.Native.Sdl3.SDLIOStream* Inno.Native.Sdl3.SDLContext.RawApi.GetProcessInput(Inno.Native.Sdl3.SDLProcess* process)
```

Get the SDL_IOStream associated with process standard input.
The process must have been created with SDL_CreateProcess() and pipe_stdio
set to true, or with SDL_CreateProcessWithProperties() and
`SDL_PROP_PROCESS_CREATE_STDIN_NUMBER` set to `SDL_PROCESS_STDIO_APP`.
Writing to this stream can return less data than expected if the process
hasn't read its input. It may be blocked waiting for its output to be read,
if so you may need to call SDL_GetProcessOutput() and read the output in
parallel with writing input.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateProcess

**See also:** SDL_CreateProcessWithProperties

**See also:** SDL_GetProcessOutput

**Parameter `process`:** The process to get the input stream for.

**Returns:** the input stream or NULL on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32339).

---
title: "SDLContext.RawApi — Method: WaitProcess"
description: "Exact Method: WaitProcess contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4f12d0b19c36de91
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WaitProcess

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WaitProcess`

<a id="api-c43ba76de414d7f3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WaitProcess(Inno.Native.Sdl3.SDLProcess*,System.Byte,System.Int32*) d1fe3062d6a57da63cbc0453198d9d1bf582082b78bb9016c9d66c3bac07aa9e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WaitProcess(Inno.Native.Sdl3.SDLProcess* process, byte block, int* exitcode)
```

Wait for a process to finish.
This can be called multiple times to get the status of a process.
The exit code will be the exit code of the process if it terminates
normally, a negative signal if it terminated due to a signal, or -255
otherwise. It will not be changed if the process is still running.
If you create a process with standard output piped to the application
(`pipe_stdio` being true) then you should read all of the process output
before calling SDL_WaitProcess(). If you don't do this the process might be
blocked indefinitely waiting for output to be read and SDL_WaitProcess()
will never return true;

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateProcess

**See also:** SDL_CreateProcessWithProperties

**See also:** SDL_KillProcess

**See also:** SDL_DestroyProcess

**Parameter `process`:** The process to wait for.

**Parameter `block`:** If true, block until the process finishes; otherwise, report
on the process' status.

**Parameter `exitcode`:** a pointer filled in with the process exit code if the
process has exited, may be NULL.

**Returns:** true if the process exited, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33638).

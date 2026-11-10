---
title: "SDLContext.RawApi — Method: ReadProcess"
description: "Exact Method: ReadProcess contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1bfd57a84b0d5f57
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReadProcess

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReadProcess`

<a id="api-a0c4fc38b686cfe3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReadProcess(Inno.Native.Sdl3.SDLProcess*,System.UInt64*,System.Int32*) cd07643864b4100d5a78dda12d778d2d6f192d4a8b0d0fdbd7c8cdbb2a59fba6 -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.ReadProcess(Inno.Native.Sdl3.SDLProcess* process, ulong* datasize, int* exitcode)
```

Read all the output from a process.
If a process was created with I/O enabled, you can use this function to
read the output. This function blocks until the process is complete,
capturing all output, and providing the process exit code.
The data is allocated with a zero byte at the end (null terminated) for
convenience. This extra byte is not included in the value reported via
`datasize`.
The data should be freed with SDL_free().

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateProcess

**See also:** SDL_CreateProcessWithProperties

**See also:** SDL_DestroyProcess

**Parameter `process`:** The process to read.

**Parameter `datasize`:** a pointer filled in with the number of bytes read, may be
NULL.

**Parameter `exitcode`:** a pointer filled in with the process exit code if the
process has exited, may be NULL.

**Returns:** the data or NULL on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38907).

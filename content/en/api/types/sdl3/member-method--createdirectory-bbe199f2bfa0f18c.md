---
title: "SDLContext.RawApi — Method: CreateDirectory"
description: "Exact Method: CreateDirectory contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bbe199f2bfa0f18c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateDirectory

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateDirectory`

<a id="api-82b80d0e63839f48"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateDirectory(System.SByte*) 4842e7e5d3e465fd19632bab0c4ed4d7a1a43e708f81257a906e37bbfbe8340d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.CreateDirectory(sbyte* path)
```

Create a directory, and any missing parent directories.
This reports success if `path` already exists as a directory.
If parent directories are missing, it will also create them. Note that if
this fails, it will not remove any parent directories it already made.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `path`:** the path of the directory to create.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41776).

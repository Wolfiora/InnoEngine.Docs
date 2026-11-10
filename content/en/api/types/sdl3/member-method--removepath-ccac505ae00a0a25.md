---
title: "SDLContext.RawApi — Method: RemovePath"
description: "Exact Method: RemovePath contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ccac505ae00a0a25
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RemovePath

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RemovePath`

<a id="api-9446df0d4a4ee33e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RemovePath(System.SByte*) d000a1a9ef789cb9178987e1d27ec699a85c0e6fc6c378994f07e8b30664e694 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RemovePath(sbyte* path)
```

Remove a file or an empty directory.
Directories that are not empty will fail; this function will not recursely
delete directory trees.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `path`:** the path to remove from the filesystem.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47269).

---
title: "SDLContext.RawApi — Method: RenameStoragePath"
description: "Exact Method: RenameStoragePath contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c9649885a995fb46
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenameStoragePath

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenameStoragePath`

<a id="api-7a3c0bcba1aa8db4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenameStoragePath(Inno.Native.Sdl3.SDLStorage*,System.SByte*,System.SByte*) ccfe92c16a677c2a7230ffe83ec65757925997c119cb0cfc7a399e06848196c9 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenameStoragePath(Inno.Native.Sdl3.SDLStorage* storage, sbyte* oldpath, sbyte* newpath)
```

Rename a file or directory in a writable storage container.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_StorageReady

**Parameter `storage`:** a storage container.

**Parameter `oldpath`:** the old path.

**Parameter `newpath`:** the new path.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50752).

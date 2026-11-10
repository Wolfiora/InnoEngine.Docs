---
title: "SDLContext.RawApi — Method: GetStorageFileSize"
description: "Exact Method: GetStorageFileSize contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7e6a0fcac3a3eeaf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetStorageFileSize

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetStorageFileSize`

<a id="api-bb1ef6d579cfa6c9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetStorageFileSize(Inno.Native.Sdl3.SDLStorage*,System.SByte*,System.UInt64*) d2942cbfc04a316d7d3ee0ff9a394b086649cfdbb47011fa779c73a8bf3063ec -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetStorageFileSize(Inno.Native.Sdl3.SDLStorage* storage, sbyte* path, ulong* length)
```

Query the size of a file within a storage container.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ReadStorageFile

**See also:** SDL_StorageReady

**Parameter `storage`:** a storage container to query.

**Parameter `path`:** the relative path of the file to query.

**Parameter `length`:** a pointer to be filled with the file's length.

**Returns:** true if the file could be queried or false on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40501).

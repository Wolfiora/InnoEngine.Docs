---
title: "SDLContext.RawApi — Method: OpenFileStorage"
description: "Exact Method: OpenFileStorage contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b5ed1774f45fa6bc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OpenFileStorage

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OpenFileStorage`

<a id="api-226ca47efec02c57"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OpenFileStorage(System.SByte*) 1c4ad8fbb996b037fd764fd136922c1f6f5dbdccfb09a237ceb2800fad8c55d1 -->

```csharp
public Inno.Native.Sdl3.SDLStorage* Inno.Native.Sdl3.SDLContext.RawApi.OpenFileStorage(sbyte* path)
```

Opens up a container for local filesystem storage.
This is provided for development and tools. Portable applications should
use SDL_OpenTitleStorage() for access to game data and
SDL_OpenUserStorage() for access to user data.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CloseStorage

**See also:** SDL_GetStorageFileSize

**See also:** SDL_GetStorageSpaceRemaining

**See also:** SDL_OpenTitleStorage

**See also:** SDL_OpenUserStorage

**See also:** SDL_ReadStorageFile

**See also:** SDL_WriteStorageFile

**Parameter `path`:** the base path prepended to all storage paths, or NULL for no
base path.

**Returns:** a filesystem storage container on success or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39604).

---
title: "SDLContext.RawApi — Method: OpenUserStorage"
description: "Exact Method: OpenUserStorage contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c10ec22cd204f235
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OpenUserStorage

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OpenUserStorage`

<a id="api-3b7fef1a935fa12e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OpenUserStorage(System.SByte*,System.SByte*,System.UInt32) 1b252384dcc033eae511cf396b3b7d486b5da895957151ab5701907057b7bec5 -->

```csharp
public Inno.Native.Sdl3.SDLStorage* Inno.Native.Sdl3.SDLContext.RawApi.OpenUserStorage(sbyte* org, sbyte* app, uint props)
```

Opens up a container for a user's unique read/write filesystem.
While title storage can generally be kept open throughout runtime, user
storage should only be opened when the client is ready to read/write files.
This allows the backend to properly batch file operations and flush them
when the container has been closed; ensuring safe and optimal save I/O.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CloseStorage

**See also:** SDL_GetStorageFileSize

**See also:** SDL_GetStorageSpaceRemaining

**See also:** SDL_OpenTitleStorage

**See also:** SDL_ReadStorageFile

**See also:** SDL_StorageReady

**See also:** SDL_WriteStorageFile

**Parameter `org`:** the name of your organization.

**Parameter `app`:** the name of your application.

**Parameter `props`:** a property list that may contain backend-specific information.

**Returns:** a user storage container on success or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27992).

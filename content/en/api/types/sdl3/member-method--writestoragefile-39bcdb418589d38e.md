---
title: "SDLContext.RawApi — Method: WriteStorageFile"
description: "Exact Method: WriteStorageFile contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.39bcdb418589d38e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteStorageFile

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteStorageFile`

<a id="api-d43fed358f184d4c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteStorageFile(Inno.Native.Sdl3.SDLStorage*,System.SByte*,System.Void*,System.UInt64) 3cad1d25a1f7dd81ac0d58aa35a5e5189cc28e41b8ed4ffd6a2db38679317672 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WriteStorageFile(Inno.Native.Sdl3.SDLStorage* storage, sbyte* path, void* source, ulong length)
```

Synchronously write a file from client memory into a storage container.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetStorageSpaceRemaining

**See also:** SDL_ReadStorageFile

**See also:** SDL_StorageReady

**Parameter `storage`:** a storage container to write to.

**Parameter `path`:** the relative path of the file to write.

**Parameter `source`:** a client-provided buffer to write from.

**Parameter `length`:** the length of the source buffer.

**Returns:** true if the file was written or false on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18077).

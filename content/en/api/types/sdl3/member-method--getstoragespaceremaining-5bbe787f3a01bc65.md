---
title: "SDLContext.RawApi — Method: GetStorageSpaceRemaining"
description: "Exact Method: GetStorageSpaceRemaining contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5bbe787f3a01bc65
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetStorageSpaceRemaining

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetStorageSpaceRemaining`

<a id="api-c6686b6735f85131"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetStorageSpaceRemaining(Inno.Native.Sdl3.SDLStorage*) 90691e6f6136a5e920a8ccec9385f55a42a5195d65560c73f67ea3aa79dbd5fc -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.GetStorageSpaceRemaining(Inno.Native.Sdl3.SDLStorage* storage)
```

Queries the remaining space in a storage container.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_StorageReady

**See also:** SDL_WriteStorageFile

**Parameter `storage`:** a storage container to query.

**Returns:** the amount of remaining space, in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41753).

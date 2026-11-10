---
title: "SDLContext.RawApi — Method: RemoveStoragePath"
description: "Exact Method: RemoveStoragePath contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b12c3d24a879ead1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RemoveStoragePath

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RemoveStoragePath`

<a id="api-a2a848015b8111fe"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RemoveStoragePath(Inno.Native.Sdl3.SDLStorage*,System.SByte*) 2280e37b8bf60c3ee35ee5285be12b20975879fc03f785610756f21d5387e007 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RemoveStoragePath(Inno.Native.Sdl3.SDLStorage* storage, sbyte* path)
```

Remove a file or an empty directory in a writable storage container.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_StorageReady

**Parameter `storage`:** a storage container.

**Parameter `path`:** the path to remove from the filesystem.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27220).

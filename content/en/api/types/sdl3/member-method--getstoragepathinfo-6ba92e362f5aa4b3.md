---
title: "SDLContext.RawApi — Method: GetStoragePathInfo"
description: "Exact Method: GetStoragePathInfo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6ba92e362f5aa4b3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetStoragePathInfo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetStoragePathInfo`

<a id="api-2e00294c3ebab25b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetStoragePathInfo(Inno.Native.Sdl3.SDLStorage*,System.SByte*,Inno.Native.Sdl3.SDLPathInfo*) e47c56fff0830fe23bcc2cb4c17f6cd886fe495b31065fecaa927530b4c52c68 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetStoragePathInfo(Inno.Native.Sdl3.SDLStorage* storage, sbyte* path, Inno.Native.Sdl3.SDLPathInfo* info)
```

Get information about a filesystem path in a storage container.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_StorageReady

**Parameter `storage`:** a storage container.

**Parameter `path`:** the path to query.

**Parameter `info`:** a pointer filled in with information about the path, or NULL to
check for the existence of a file.

**Returns:** true on success or false if the file doesn't exist, or another
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22501).

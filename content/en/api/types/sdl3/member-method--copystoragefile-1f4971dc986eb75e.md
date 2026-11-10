---
title: "SDLContext.RawApi — Method: CopyStorageFile"
description: "Exact Method: CopyStorageFile contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1f4971dc986eb75e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CopyStorageFile

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CopyStorageFile`

<a id="api-8253cdca26cd1c75"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CopyStorageFile(Inno.Native.Sdl3.SDLStorage*,System.SByte*,System.SByte*) 3f238a1e3fc0b4fd66ef90fa6d9f7de1aee2c1d6fe99b65f713aa03ad011a666 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.CopyStorageFile(Inno.Native.Sdl3.SDLStorage* storage, sbyte* oldpath, sbyte* newpath)
```

Copy a file in a writable storage container.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_StorageReady

**Parameter `storage`:** a storage container.

**Parameter `oldpath`:** the old path.

**Parameter `newpath`:** the new path.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47939).

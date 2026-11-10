---
title: "SDLContext.RawApi — Method: CreateStorageDirectory"
description: "Exact Method: CreateStorageDirectory contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0661e62b7ec2e9b9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateStorageDirectory

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateStorageDirectory`

<a id="api-afe103bbe5029be4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateStorageDirectory(Inno.Native.Sdl3.SDLStorage*,System.SByte*) 4d4726f5051f395384f5b342bc9075a1b86386e097dd663b7c389123b3790a51 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.CreateStorageDirectory(Inno.Native.Sdl3.SDLStorage* storage, sbyte* path)
```

Create a directory in a writable storage container.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_StorageReady

**Parameter `storage`:** a storage container.

**Parameter `path`:** the path of the directory to create.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37496).

---
title: "SDLContext.RawApi — Method: ReadStorageFile"
description: "Exact Method: ReadStorageFile contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f579c52dad635d15
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReadStorageFile

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReadStorageFile`

<a id="api-0439f4a4b8eafb9f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReadStorageFile(Inno.Native.Sdl3.SDLStorage*,System.SByte*,System.Void*,System.UInt64) f7c334f18b5586f349af67dc4ac67972b3949a7751e1281fd2f5573da755ee5e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ReadStorageFile(Inno.Native.Sdl3.SDLStorage* storage, sbyte* path, void* destination, ulong length)
```

Synchronously read a file from a storage container into a client-provided
buffer.
The value of `length` must match the length of the file exactly; call
SDL_GetStorageFileSize() to get this value. This behavior may be relaxed in
a future release.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetStorageFileSize

**See also:** SDL_StorageReady

**See also:** SDL_WriteStorageFile

**Parameter `storage`:** a storage container to read from.

**Parameter `path`:** the relative path of the file to read.

**Parameter `destination`:** a client-provided buffer to read the file into.

**Parameter `length`:** the length of the destination buffer.

**Returns:** true if the file was read or false on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36824).

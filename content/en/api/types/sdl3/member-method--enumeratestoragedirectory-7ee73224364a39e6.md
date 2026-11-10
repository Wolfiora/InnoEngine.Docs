---
title: "SDLContext.RawApi — Method: EnumerateStorageDirectory"
description: "Exact Method: EnumerateStorageDirectory contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7ee73224364a39e6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: EnumerateStorageDirectory

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EnumerateStorageDirectory`

<a id="api-634a30a5f0d2348b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.EnumerateStorageDirectory(Inno.Native.Sdl3.SDLStorage*,System.SByte*,,System.Void*) 72be05172802b2ef00e9ab53809201e0f826cdebc228e930a99e8a7e428f7b2b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.EnumerateStorageDirectory(Inno.Native.Sdl3.SDLStorage* storage, sbyte* path, delegate* unmanaged[Cdecl]<void*, sbyte*, sbyte*, Inno.Native.Sdl3.SDLEnumerationResult> callback, void* userdata)
```

Enumerate a directory in a storage container through a callback function.
This function provides every directory entry through an app-provided
callback, called once for each directory entry, until all results have been
provided or the callback returns either SDL_ENUM_SUCCESS or
SDL_ENUM_FAILURE.
This will return false if there was a system problem in general, or if a
callback returns SDL_ENUM_FAILURE. A successful return means a callback
returned SDL_ENUM_SUCCESS to halt enumeration, or all directory entries
were enumerated.
If `path` is NULL, this is treated as a request to enumerate the root of
the storage container's tree. An empty string also works for this.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_StorageReady

**Parameter `storage`:** a storage container.

**Parameter `path`:** the path of the directory to enumerate, or NULL for the root.

**Parameter `callback`:** a function that is called for each entry in the directory.

**Parameter `userdata`:** a pointer that is passed to `callback`.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49417).

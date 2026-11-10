---
title: "SDLContext.RawApi — Method: OpenStorage"
description: "Exact Method: OpenStorage contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.72dc13d25f386154
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OpenStorage

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OpenStorage`

<a id="api-0f195718064b095c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OpenStorage(Inno.Native.Sdl3.SDLStorageInterface*,System.Void*) 36b8d6b9ec02702d445e6ace2b449e99cb92f57dc576b837abba20b818942478 -->

```csharp
public Inno.Native.Sdl3.SDLStorage* Inno.Native.Sdl3.SDLContext.RawApi.OpenStorage(Inno.Native.Sdl3.SDLStorageInterface* iface, void* userdata)
```

Opens up a container using a client-provided storage interface.
Applications do not need to use this function unless they are providing
their own SDL_Storage implementation. If you just need an SDL_Storage, you
should use the built-in implementations in SDL, like SDL_OpenTitleStorage()
or SDL_OpenUserStorage().
This function makes a copy of `iface` and the caller does not need to keep
it around after this call.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CloseStorage

**See also:** SDL_GetStorageFileSize

**See also:** SDL_GetStorageSpaceRemaining

**See also:** SDL_INIT_INTERFACE

**See also:** SDL_ReadStorageFile

**See also:** SDL_StorageReady

**See also:** SDL_WriteStorageFile

**Parameter `iface`:** the interface that implements this storage, initialized using
SDL_INIT_INTERFACE().

**Parameter `userdata`:** the pointer that will be passed to the interface functions.

**Returns:** a storage container on success or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28149).

---
title: "SDLContext.RawApi — Method: EnumerateDirectory"
description: "Exact Method: EnumerateDirectory contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.18329c31a9333ab3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: EnumerateDirectory

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EnumerateDirectory`

<a id="api-92fb1c8089d23758"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.EnumerateDirectory(System.SByte*,,System.Void*) 76d5b06a57f4787ac038fc0ff42c6345bdb4e6df7561d3723c86d5d6899eaaf1 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.EnumerateDirectory(sbyte* path, delegate* unmanaged[Cdecl]<void*, sbyte*, sbyte*, Inno.Native.Sdl3.SDLEnumerationResult> callback, void* userdata)
```

Enumerate a directory through a callback function.
This function provides every directory entry through an app-provided
callback, called once for each directory entry, until all results have been
provided or the callback returns either SDL_ENUM_SUCCESS or
SDL_ENUM_FAILURE.
This will return false if there was a system problem in general, or if a
callback returns SDL_ENUM_FAILURE. A successful return means a callback
returned SDL_ENUM_SUCCESS to halt enumeration, or all directory entries
were enumerated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `path`:** the path of the directory to enumerate.

**Parameter `callback`:** a function that is called for each entry in the directory.

**Parameter `userdata`:** a pointer that is passed to `callback`.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27515).

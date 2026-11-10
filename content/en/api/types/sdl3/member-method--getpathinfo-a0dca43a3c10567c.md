---
title: "SDLContext.RawApi — Method: GetPathInfo"
description: "Exact Method: GetPathInfo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a0dca43a3c10567c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetPathInfo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPathInfo`

<a id="api-a97173c35104d693"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetPathInfo(System.SByte*,Inno.Native.Sdl3.SDLPathInfo*) fa74ea90220f8d0c3c78372cf63f0b5504cc555b62b6e306630d5d5771b4419c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetPathInfo(sbyte* path, Inno.Native.Sdl3.SDLPathInfo* info)
```

Get information about a filesystem path.
Symlinks, on filesystems that support them, are always followed, so you
will always get information on what the symlink eventually points to, and
not the symlink itself.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `path`:** the path to query.

**Parameter `info`:** a pointer filled in with information about the path, or NULL to
check for the existence of a file.

**Returns:** true on success or false if the file doesn't exist, or another
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30685).

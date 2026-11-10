---
title: "SDLContext.RawApi — Method: RenamePath"
description: "Exact Method: RenamePath contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0ed338994b785715
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenamePath

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenamePath`

<a id="api-9fe738860fe1a869"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenamePath(System.SByte*,System.SByte*) e1790159fad6acdce71cf8433ff0a2430640ac547b2bd9e930d3f31035f1a27a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenamePath(sbyte* oldpath, sbyte* newpath)
```

Rename a file or directory.
If the file at `newpath` already exists, it will be replaced.
Note that this will not copy files across filesystems/drives/volumes, as
that is a much more complicated (and possibly time-consuming) operation.
Which is to say, if this function fails, SDL_CopyFile() to a temporary file
in the same directory as `newpath`, then SDL_RenamePath() from the
temporary file to `newpath` and SDL_RemovePath() on `oldpath` might work
for files. Renaming a non-empty directory across filesystems is
dramatically more complex, however.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `oldpath`:** the old path.

**Parameter `newpath`:** the new path.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42896).

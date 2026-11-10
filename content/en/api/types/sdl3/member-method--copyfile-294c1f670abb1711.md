---
title: "SDLContext.RawApi — Method: CopyFile"
description: "Exact Method: CopyFile contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.294c1f670abb1711
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CopyFile

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CopyFile`

<a id="api-da9ba1219e0a0ba1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CopyFile(System.SByte*,System.SByte*) 03c1db2a81043d69b51633f338641fda0c919cfe875cb756c6786a8a3b2fed74 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.CopyFile(sbyte* oldpath, sbyte* newpath)
```

Copy a file.
If the file at `newpath` already exists, it will be overwritten with the
contents of the file at `oldpath`.
This function will block until the copy is complete, which might be a
significant time for large files on slow disks. On some platforms, the copy
can be handed off to the OS itself, but on others SDL might just open both
paths, and read from one and write to the other.
Note that this is not an atomic operation! If something tries to read from
`newpath` while the copy is in progress, it will see an incomplete copy of
the data, and if the calling thread terminates (or the power goes out)
during the copy, `newpath`'s previous contents will be gone, replaced with
an incomplete copy of the data. To avoid this risk, it is recommended that
the app copy to a temporary file in the same directory as `newpath`, and if
the copy is successful, use SDL_RenamePath() to replace `newpath` with the
temporary file. This will ensure that reads of `newpath` will either see a
complete copy of the data, or it will see the pre-copy state of `newpath`.
This function attempts to synchronize the newly-copied data to disk before
returning, if the platform allows it, so that the renaming trick will not
have a problem in a system crash or power failure, where the file could be
renamed but the contents never made it from the system file cache to the
physical disk.
If the copy fails for any reason, the state of `newpath` is undefined. It
might be half a copy, it might be the untouched data of what was already
there, or it might be a zero-byte file, etc.

**Thread safety:** It is safe to call this function from any thread, but this
operation is not atomic, so the app might need to protect
access to specific paths from other threads if appropriate.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `oldpath`:** the old path.

**Parameter `newpath`:** the new path.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49068).

---
title: "SDLContext.RawApi — Method: GlobStorageDirectory"
description: "Exact Method: GlobStorageDirectory contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.acabe3082f9e56ec
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GlobStorageDirectory

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlobStorageDirectory`

<a id="api-a2fda14582a9fa0b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GlobStorageDirectory(Inno.Native.Sdl3.SDLStorage*,System.SByte*,System.SByte*,System.UInt32,System.Int32*) e5fd52822fdd829e1a7bc606fe2914e3de94f3d8150aaf64a7d75de2c19c793c -->

```csharp
public sbyte** Inno.Native.Sdl3.SDLContext.RawApi.GlobStorageDirectory(Inno.Native.Sdl3.SDLStorage* storage, sbyte* path, sbyte* pattern, uint flags, int* count)
```

Enumerate a directory tree, filtered by pattern, and return a list.
Files are filtered out if they don't match the string in `pattern`, which
may contain wildcard characters `*` (match everything) and `?` (match one
character). If pattern is NULL, no filtering is done and all results are
returned. Subdirectories are permitted, and are specified with a path
separator of '/'. Wildcard characters `*` and `?` never match a path
separator.
`flags` may be set to SDL_GLOB_CASEINSENSITIVE to make the pattern matching
case-insensitive.
The returned array is always NULL-terminated, for your iterating
convenience, but if `count` is non-NULL, on return it will contain the
number of items in the array, not counting the NULL terminator.
If `path` is NULL, this is treated as a request to enumerate the root of
the storage container's tree. An empty string also works for this.

**Thread safety:** It is safe to call this function from any thread, assuming
the `storage` object is thread-safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `storage`:** a storage container.

**Parameter `path`:** the path of the directory to enumerate, or NULL for the root.

**Parameter `pattern`:** the pattern that files in the directory must match. Can be
NULL.

**Parameter `flags`:** `SDL_GLOB_*` bitflags that affect this search.

**Parameter `count`:** on return, will be set to the number of items in the returned
array. Can be NULL.

**Returns:** an array of strings on success or NULL on failure; call
SDL_GetError() for more information. The caller should pass the
returned pointer to SDL_free when done with it. This is a single
allocation that should be freed with SDL_free() when it is no
longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48178).

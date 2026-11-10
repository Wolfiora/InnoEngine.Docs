---
title: "SDLContext.RawApi — Method: Malloc"
description: "Exact Method: Malloc contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.73201ee13827407d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Malloc

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Malloc`

<a id="api-9ddfdf1db02e0177"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Malloc(System.UInt64) f670c1418d1e2ceee811f0d7ed131d89f4a076b3bf1097635264622d27fb66fd -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.Malloc(ulong size)
```

Allocate uninitialized memory.
The allocated memory returned by this function must be freed with
SDL_free().
If `size` is 0, it will be set to 1.
If the allocation is successful, the returned pointer is guaranteed to be
aligned to either the *fundamental alignment* (`alignof(max_align_t)` in
C11 and later) or `2 * sizeof(void *)`, whichever is smaller. Use
SDL_aligned_alloc() if you need to allocate memory aligned to an alignment
greater than this guarantee.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_free

**See also:** SDL_calloc

**See also:** SDL_realloc

**See also:** SDL_aligned_alloc

**Parameter `size`:** the size to allocate.

**Returns:** a pointer to the allocated memory, or NULL if allocation failed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21729).

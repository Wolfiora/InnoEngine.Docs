---
title: "SDLContext.RawApi — Method: Calloc"
description: "Exact Method: Calloc contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.857a55157f4533cf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Calloc

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Calloc`

<a id="api-a684e0f7f04bb860"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Calloc(System.UInt64,System.UInt64) 85b7dd16d9646f61bfe1d3d6149bfe784a92e9a7810e30ae73988c3d040fbe94 -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.Calloc(ulong nmemb, ulong size)
```

Allocate a zero-initialized array.
The memory returned by this function must be freed with SDL_free().
If either of `nmemb` or `size` is 0, they will both be set to 1.
If the allocation is successful, the returned pointer is guaranteed to be
aligned to either the *fundamental alignment* (`alignof(max_align_t)` in
C11 and later) or `2 * sizeof(void *)`, whichever is smaller.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_free

**See also:** SDL_malloc

**See also:** SDL_realloc

**Parameter `nmemb`:** the number of elements in the array.

**Parameter `size`:** the size of each element of the array.

**Returns:** a pointer to the allocated array, or NULL if allocation failed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20516).

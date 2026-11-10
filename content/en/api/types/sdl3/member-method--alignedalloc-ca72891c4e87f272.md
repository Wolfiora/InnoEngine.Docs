---
title: "SDLContext.RawApi — Method: AlignedAlloc"
description: "Exact Method: AlignedAlloc contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ca72891c4e87f272
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AlignedAlloc

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AlignedAlloc`

<a id="api-3a504287c4a59dda"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AlignedAlloc(System.UInt64,System.UInt64) 57dd6ad82ac15d6066bc5a819bc198497ea2651f53406e28055b176fcd8a116b -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.AlignedAlloc(ulong alignment, ulong size)
```

Allocate memory aligned to a specific alignment.
The memory returned by this function must be freed with SDL_aligned_free(),
_not_ SDL_free().
If `alignment` is less than the size of `void *`, it will be increased to
match that.
The returned memory address will be a multiple of the alignment value, and
the size of the memory allocated will be a multiple of the alignment value.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_aligned_free

**Parameter `alignment`:** the alignment of the memory.

**Parameter `size`:** the size to allocate.

**Returns:** a pointer to the aligned memory, or NULL if allocation failed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33983).

---
title: "SDLContext.RawApi — Method: Realloc"
description: "Exact Method: Realloc contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.db039cd967cbb021
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Realloc

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Realloc`

<a id="api-1495096a76b2f285"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Realloc(System.Void*,System.UInt64) 11c00a8c40efc4e851e263416120515dd297cb79eaee24a8c3ec60aefcdb72cf -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.Realloc(void* mem, ulong size)
```

Change the size of allocated memory.
The memory returned by this function must be freed with SDL_free().
If `size` is 0, it will be set to 1. Note that this is unlike some other C
runtime `realloc` implementations, which may treat `realloc(mem, 0)` the
same way as `free(mem)`.
If `mem` is NULL, the behavior of this function is equivalent to
SDL_malloc(). Otherwise, the function can have one of three possible
outcomes:
- If it returns the same pointer as `mem`, it means that `mem` was resized
in place without freeing.
- If it returns a different non-NULL pointer, it means that `mem` was freed
and cannot be dereferenced anymore.
- If it returns NULL (indicating failure), then `mem` will remain valid and
must still be freed with SDL_free().
If the allocation is successfully resized, the returned pointer is
guaranteed to be aligned to either the *fundamental alignment*
(`alignof(max_align_t)` in C11 and later) or `2 * sizeof(void *)`,
whichever is smaller.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_free

**See also:** SDL_malloc

**See also:** SDL_calloc

**Parameter `mem`:** a pointer to allocated memory to reallocate, or NULL.

**Parameter `size`:** the new size of the memory.

**Returns:** a pointer to the newly allocated memory, or NULL if allocation
failed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20955).

---
title: "SDLContext.RawApi — Method: SetMemoryFunctions"
description: "Exact Method: SetMemoryFunctions contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.66b256a2377ea01d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetMemoryFunctions

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetMemoryFunctions`

<a id="api-5041d8239776b76c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetMemoryFunctions(,,,) af1d9ae7a95dd728aa3b2ecf3189a6140ee585c0e1d934908df5d854805a23cf -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetMemoryFunctions(delegate* unmanaged[Cdecl]<ulong, void*> malloc_func, delegate* unmanaged[Cdecl]<ulong, ulong, void*> calloc_func, delegate* unmanaged[Cdecl]<void*, ulong, void*> realloc_func, delegate* unmanaged[Cdecl]<void*, void> free_func)
```

Replace SDL's memory allocation functions with a custom set.
It is not safe to call this function once any allocations have been made,
as future calls to SDL_free will use the new allocator, even if they came
from an SDL_malloc made with the old one!
If used, usually this needs to be the first call made into the SDL library,
if not the very first thing done at program startup time.

**Thread safety:** It is safe to call this function from any thread, but one
should not replace the memory functions once any allocations
are made!

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetMemoryFunctions

**See also:** SDL_GetOriginalMemoryFunctions

**Parameter `malloc_func`:** custom malloc function.

**Parameter `calloc_func`:** custom calloc function.

**Parameter `realloc_func`:** custom realloc function.

**Parameter `free_func`:** custom free function.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19334).

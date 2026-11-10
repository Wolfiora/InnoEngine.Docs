---
title: "SDLContext.RawApi — Method: GetOriginalMemoryFunctions"
description: "Exact Method: GetOriginalMemoryFunctions contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8bb53644d2a0f09d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetOriginalMemoryFunctions

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetOriginalMemoryFunctions`

<a id="api-63d78f9969a7ff33"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetOriginalMemoryFunctions(*,*,*,*) 6dd3deb6231a3c6ba6834875e0efd30d5295087a42933114971e809d6157b9e9 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.GetOriginalMemoryFunctions(delegate* unmanaged[Cdecl]<ulong, void*>* malloc_func, delegate* unmanaged[Cdecl]<ulong, ulong, void*>* calloc_func, delegate* unmanaged[Cdecl]<void*, ulong, void*>* realloc_func, delegate* unmanaged[Cdecl]<void*, void>* free_func)
```

Get the original set of SDL memory functions.
This is what SDL_malloc and friends will use by default, if there has been
no call to SDL_SetMemoryFunctions. This is not necessarily using the C
runtime's `malloc` functions behind the scenes! Different platforms and
build configurations might do any number of unexpected things.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `malloc_func`:** filled with malloc function.

**Parameter `calloc_func`:** filled with calloc function.

**Parameter `realloc_func`:** filled with realloc function.

**Parameter `free_func`:** filled with free function.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46244).

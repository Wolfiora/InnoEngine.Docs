---
title: "SDLContext.RawApi — Method: GetMemoryFunctions"
description: "Exact Method: GetMemoryFunctions contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fb41d704b1150ee4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetMemoryFunctions

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetMemoryFunctions`

<a id="api-6bd9d4e3fc3ca116"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetMemoryFunctions(*,*,*,*) 4c99ef3a968d06d282dda51bbb1c8d1e68d2c6045754cf9260754fefd8663934 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.GetMemoryFunctions(delegate* unmanaged[Cdecl]<ulong, void*>* malloc_func, delegate* unmanaged[Cdecl]<ulong, ulong, void*>* calloc_func, delegate* unmanaged[Cdecl]<void*, ulong, void*>* realloc_func, delegate* unmanaged[Cdecl]<void*, void>* free_func)
```

Get the current set of SDL memory functions.

**Thread safety:** This does not hold a lock, so do not call this in the
unlikely event of a background thread calling
SDL_SetMemoryFunctions simultaneously.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetMemoryFunctions

**See also:** SDL_GetOriginalMemoryFunctions

**Parameter `malloc_func`:** filled with malloc function.

**Parameter `calloc_func`:** filled with calloc function.

**Parameter `realloc_func`:** filled with realloc function.

**Parameter `free_func`:** filled with free function.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28450).

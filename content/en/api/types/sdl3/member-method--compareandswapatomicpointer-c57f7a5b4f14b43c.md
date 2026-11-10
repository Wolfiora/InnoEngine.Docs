---
title: "SDLContext.RawApi — Method: CompareAndSwapAtomicPointer"
description: "Exact Method: CompareAndSwapAtomicPointer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c57f7a5b4f14b43c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CompareAndSwapAtomicPointer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CompareAndSwapAtomicPointer`

<a id="api-7d4376834920819a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CompareAndSwapAtomicPointer(System.Void**,System.Void*,System.Void*) 38a079d54ce6edbd1961ca2605114e28c5da35c434e36e2e5992f0792cfaca5a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.CompareAndSwapAtomicPointer(void** a, void* oldval, void* newval)
```

Set a pointer to a new value if it is currently an old value.
***Note: If you don't know what this function is for, you shouldn't use
it!***

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CompareAndSwapAtomicInt

**See also:** SDL_GetAtomicPointer

**See also:** SDL_SetAtomicPointer

**Parameter `a`:** a pointer to a pointer.

**Parameter `oldval`:** the old pointer value.

**Parameter `newval`:** the new pointer value.

**Returns:** true if the pointer was set, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19923).

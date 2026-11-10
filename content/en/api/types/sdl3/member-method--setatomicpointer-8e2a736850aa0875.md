---
title: "SDLContext.RawApi — Method: SetAtomicPointer"
description: "Exact Method: SetAtomicPointer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8e2a736850aa0875
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetAtomicPointer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetAtomicPointer`

<a id="api-eac8341309e301da"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetAtomicPointer(System.Void**,System.Void*) 25b2d8b7ec168e799b3bb50e020223a0a4e5ade9c5b22083b0f7ed6d3a827427 -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.SetAtomicPointer(void** a, void* v)
```

Set a pointer to a value atomically.
***Note: If you don't know what this function is for, you shouldn't use
it!***

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CompareAndSwapAtomicPointer

**See also:** SDL_GetAtomicPointer

**Parameter `a`:** a pointer to a pointer.

**Parameter `v`:** the desired pointer value.

**Returns:** the previous value of the pointer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36080).

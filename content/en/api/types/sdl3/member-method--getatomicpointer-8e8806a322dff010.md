---
title: "SDLContext.RawApi — Method: GetAtomicPointer"
description: "Exact Method: GetAtomicPointer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8e8806a322dff010
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAtomicPointer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAtomicPointer`

<a id="api-a5cb11a362fd0cbc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAtomicPointer(System.Void**) 6140be08bedf3295174d81cb4ee8f7134b1e6f4a99ef1c443c6160c4d2dbc237 -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.GetAtomicPointer(void** a)
```

Get the value of a pointer atomically.
***Note: If you don't know what this function is for, you shouldn't use
it!***

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CompareAndSwapAtomicPointer

**See also:** SDL_SetAtomicPointer

**Parameter `a`:** a pointer to a pointer.

**Returns:** the current value of a pointer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37384).

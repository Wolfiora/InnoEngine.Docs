---
title: "SDLContext.RawApi — Method: CreateThreadRuntime"
description: "Exact Method: CreateThreadRuntime contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.71414949ef396f6c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateThreadRuntime

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateThreadRuntime`

<a id="api-c6f0ea35bc6c67d6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateThreadRuntime(,System.SByte*,System.Void*,,) 78ae25b465e18a2e4909551f3696498ffd40457c5f5e3e953977e192003dd89b -->

```csharp
public Inno.Native.Sdl3.SDLThread* Inno.Native.Sdl3.SDLContext.RawApi.CreateThreadRuntime(delegate* unmanaged[Cdecl]<void*, int> fn, sbyte* name, void* data, delegate* unmanaged[Cdecl]<void> pfnBeginThread, delegate* unmanaged[Cdecl]<void> pfnEndThread)
```

These are the actual functions exported from SDL! Don't use them directly! Use the SDL_CreateThread and SDL_CreateThreadWithProperties macros!
The actual entry point for SDL_CreateThread.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `fn`:** the SDL_ThreadFunction function to call in the new thread

**Parameter `name`:** the name of the thread

**Parameter `data`:** a pointer that is passed to `fn`

**Parameter `pfnBeginThread`:** the C runtime's _beginthreadex (or whatnot). Can be NULL.

**Parameter `pfnEndThread`:** the C runtime's _endthreadex (or whatnot). Can be NULL.

**Returns:** an opaque pointer to the new thread object on success, NULL if the
new thread could not be created; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21650).

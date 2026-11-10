---
title: "SDLContext.RawApi — Method: LoadFunction"
description: "Exact Method: LoadFunction contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.39a6854aef30cd5d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LoadFunction

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LoadFunction`

<a id="api-c04c3ebf4088dd29"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LoadFunction(Inno.Native.Sdl3.SDLSharedObject*,System.SByte*) 9a7e365510f9827a1c692bd5e19ce4b80e0dcee46dc074e8eee4c74617f692ac -->

```csharp
public delegate* unmanaged[Cdecl]<void> Inno.Native.Sdl3.SDLContext.RawApi.LoadFunction(Inno.Native.Sdl3.SDLSharedObject* handle, sbyte* name)
```

Look up the address of the named function in a shared object.
This function pointer is no longer valid after calling SDL_UnloadObject().
This function can only look up C function names. Other languages may have
name mangling and intrinsic language support that varies from compiler to
compiler.
Make sure you declare your function pointers with the same calling
convention as the actual library function. Your code will crash
mysteriously if you do not do this.
If the requested function doesn't exist, NULL is returned.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LoadObject

**Parameter `handle`:** a valid shared object handle returned by SDL_LoadObject().

**Parameter `name`:** the name of the function to look up.

**Returns:** a pointer to the function or NULL on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24768).

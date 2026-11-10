---
title: "SDLContext.RawApi — Method: Strdup"
description: "Exact Method: Strdup contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ad10d07150fff986
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strdup

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strdup`

<a id="api-4f2407424282965f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strdup(System.SByte*) 808270cce186cdeb2ef3e02960b6f45d7c4fcb0128c977a569b8ef66b672c3f6 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Strdup(sbyte* str)
```

Allocate a copy of a string.
This allocates enough space for a null-terminated copy of `str`, using
SDL_malloc, and then makes a copy of the string into this space.
The returned string is owned by the caller, and should be passed to
SDL_free when no longer needed.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `str`:** the string to copy.

**Returns:** a pointer to the newly-allocated string.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39859).

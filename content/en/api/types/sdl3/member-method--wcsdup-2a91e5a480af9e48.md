---
title: "SDLContext.RawApi — Method: Wcsdup"
description: "Exact Method: Wcsdup contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2a91e5a480af9e48
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Wcsdup

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Wcsdup`

<a id="api-d0337f623ea95330"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Wcsdup(System.UInt16*) 0051d6e4be834b6e408f72ead46d22a7c280c1b94e826416b0d0dc36cd113ecb -->

```csharp
public ushort* Inno.Native.Sdl3.SDLContext.RawApi.Wcsdup(ushort* wstr)
```

Allocate a copy of a wide string.
This allocates enough space for a null-terminated copy of `wstr`, using
SDL_malloc, and then makes a copy of the string into this space.
The returned string is owned by the caller, and should be passed to
SDL_free when no longer needed.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `wstr`:** the string to copy.

**Returns:** a pointer to the newly-allocated wide string.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18465).

---
title: "SDLContext.RawApi — Method: AlignedFree"
description: "Exact Method: AlignedFree contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6cee44564d99242c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AlignedFree

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AlignedFree`

<a id="api-480b924c767bd95b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AlignedFree(System.Void*) ac507502cea538aadebaa84eebd3d396b06f7e33816cd0692100d1af677a1bd1 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.AlignedFree(void* mem)
```

Free memory allocated by SDL_aligned_alloc().
The pointer is no longer valid after this call and cannot be dereferenced
anymore.
If `mem` is NULL, this function does nothing.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_aligned_alloc

**Parameter `mem`:** a pointer previously returned by SDL_aligned_alloc(), or NULL.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31343).

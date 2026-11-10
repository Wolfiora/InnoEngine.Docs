---
title: "SDLContext.RawApi — Method: Memmove"
description: "Exact Method: Memmove contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6c66ac63175b612e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Memmove

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Memmove`

<a id="api-9f2cfbae199e909c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Memmove(System.Void*,System.Void*,System.UInt64) 2f86070d2394508086cdee9340264357e7478b46e5f8c9195f1a5978edd71720 -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.Memmove(void* dst, void* src, ulong len)
```

Copy memory ranges that might overlap.
It is okay for the memory regions to overlap. If you are confident that the
regions never overlap, using SDL_memcpy() may improve performance.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_memcpy

**Parameter `dst`:** The destination memory region. Must not be NULL.

**Parameter `src`:** The source memory region. Must not be NULL.

**Parameter `len`:** The length in bytes of both `dst` and `src`.

**Returns:** `dst`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42112).

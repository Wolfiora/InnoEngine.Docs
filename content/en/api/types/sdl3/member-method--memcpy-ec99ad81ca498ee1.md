---
title: "SDLContext.RawApi — Method: Memcpy"
description: "Exact Method: Memcpy contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ec99ad81ca498ee1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Memcpy

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Memcpy`

<a id="api-83a3a5927af64650"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Memcpy(System.Void*,System.Void*,System.UInt64) c38d3dd2da321001d7240299cdfc3d5e6691bfdee4270af6bf10b52c81c5754c -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.Memcpy(void* dst, void* src, ulong len)
```

Copy non-overlapping memory.
The memory regions must not overlap. If they do, use SDL_memmove() instead.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_memmove

**Parameter `dst`:** The destination memory region. Must not be NULL, and must not
overlap with `src`.

**Parameter `src`:** The source memory region. Must not be NULL, and must not overlap
with `dst`.

**Parameter `len`:** The length in bytes of both `dst` and `src`.

**Returns:** `dst`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22208).

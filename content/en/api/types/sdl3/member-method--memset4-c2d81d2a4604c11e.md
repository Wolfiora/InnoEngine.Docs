---
title: "SDLContext.RawApi — Method: Memset4"
description: "Exact Method: Memset4 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c2d81d2a4604c11e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Memset4

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Memset4`

<a id="api-012aeb72789e5d8f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Memset4(System.Void*,System.UInt32,System.UInt64) 1697a4774eedca6af52cef663cf1e8fc09f58d99e99983d50707ff3ae8537d85 -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.Memset4(void* dst, uint val, ulong dwords)
```

Initialize all 32-bit words of buffer of memory to a specific value.
This function will set a buffer of `dwords` Uint32 values, pointed to by
`dst`, to the value specified in `val`.
Unlike SDL_memset, this sets 32-bit values, not bytes, so it's not limited
to a range of 0-255.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dst`:** the destination memory region. Must not be NULL.

**Parameter `val`:** the Uint32 value to set.

**Parameter `dwords`:** the number of Uint32 values to set in `dst`.

**Returns:** `dst`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44151).

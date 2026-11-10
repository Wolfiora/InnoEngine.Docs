---
title: "SDLContext.RawApi — Method: Memcmp"
description: "Exact Method: Memcmp contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c75b2d8aef48f12e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Memcmp

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Memcmp`

<a id="api-5cfb91a2a2fc26e4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Memcmp(System.Void*,System.Void*,System.UInt64) a381f5e17f9a391f9a2f4ee461f386c1b03ae9328723c25f00f8d8ba7e6c171c -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Memcmp(void* s1, void* s2, ulong len)
```

Compare two buffers of memory.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `s1`:** the first buffer to compare. NULL is not permitted!

**Parameter `s2`:** the second buffer to compare. NULL is not permitted!

**Parameter `len`:** the number of bytes to compare between the buffers.

**Returns:** less than zero if s1 is "less than" s2, greater than zero if s1 is
"greater than" s2, and zero if the buffers match exactly for `len`
bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28019).

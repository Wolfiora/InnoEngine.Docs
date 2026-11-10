---
title: "SDLContext.RawApi — Method: Utf8strlcpy"
description: "Exact Method: Utf8strlcpy contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fa427bb317cbb2e1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Utf8strlcpy

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Utf8strlcpy`

<a id="api-6e23c0906bd1bf62"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Utf8strlcpy(System.SByte*,System.SByte*,System.UInt64) 58b614a8fc1781847b0e0bb989be1a010833929b7ff1840fd79811fa3bbe4415 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.Utf8strlcpy(sbyte* dst, sbyte* src, ulong dst_bytes)
```

Copy an UTF-8 string.
This function copies up to `dst_bytes` - 1 bytes from `src` to `dst` while
also ensuring that the string written to `dst` does not end in a truncated
multi-byte sequence. Finally, it appends a null terminator.
`src` and `dst` must not overlap.
Note that unlike SDL_strlcpy(), this function returns the number of bytes
written, not the length of `src`.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_strlcpy

**Parameter `dst`:** The destination buffer. Must not be NULL, and must not overlap
with `src`.

**Parameter `src`:** The null-terminated UTF-8 string to copy. Must not be NULL, and
must not overlap with `dst`.

**Parameter `dst_bytes`:** The length (in bytes) of the destination buffer. Must not
be 0.

**Returns:** the number of bytes written, excluding the null terminator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22100).

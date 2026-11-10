---
title: "SDLContext.RawApi — Method: Strlcpy"
description: "Exact Method: Strlcpy contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.130789afae443e4e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strlcpy

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strlcpy`

<a id="api-46a0ac76816c895c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strlcpy(System.SByte*,System.SByte*,System.UInt64) 339acef4f48b005eb0a52b824615ed3cf12604316624d398ac5e6250dfec547e -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.Strlcpy(sbyte* dst, sbyte* src, ulong maxlen)
```

Copy a string.
This function copies up to `maxlen` - 1 characters from `src` to `dst`,
then appends a null terminator.
If `maxlen` is 0, no characters are copied and no null terminator is
written.
If you want to copy an UTF-8 string but need to ensure that multi-byte
sequences are not truncated, consider using SDL_utf8strlcpy().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_strlcat

**See also:** SDL_utf8strlcpy

**Parameter `dst`:** The destination buffer. Must not be NULL, and must not overlap
with `src`.

**Parameter `src`:** The null-terminated string to copy. Must not be NULL, and must
not overlap with `dst`.

**Parameter `maxlen`:** The length (in characters) of the destination buffer.

**Returns:** the length (in characters, excluding the null terminator) of
`src`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42721).

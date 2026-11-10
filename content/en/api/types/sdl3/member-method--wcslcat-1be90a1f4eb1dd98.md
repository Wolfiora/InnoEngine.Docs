---
title: "SDLContext.RawApi — Method: Wcslcat"
description: "Exact Method: Wcslcat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1be90a1f4eb1dd98
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Wcslcat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Wcslcat`

<a id="api-549babc533406e9e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Wcslcat(System.UInt16*,System.UInt16*,System.UInt64) 4f95c981b37deca2219f9cf26377404a14b59de2a8d4d9eeaac0163dc97a1b5b -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.Wcslcat(ushort* dst, ushort* src, ulong maxlen)
```

Concatenate wide strings.
This function appends up to `maxlen` - SDL_wcslen(dst) - 1 wide characters
from `src` to the end of the wide string in `dst`, then appends a null
terminator.
`src` and `dst` must not overlap.
If `maxlen` - SDL_wcslen(dst) - 1 is less than or equal to 0, then `dst` is
unmodified.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_wcslcpy

**Parameter `dst`:** The destination buffer already containing the first
null-terminated wide string. Must not be NULL and must not
overlap with `src`.

**Parameter `src`:** The second null-terminated wide string. Must not be NULL, and
must not overlap with `dst`.

**Parameter `maxlen`:** The length (in wide characters) of the destination buffer.

**Returns:** the length (in wide characters, excluding the null terminator) of
the string in `dst` plus the length of `src`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32159).

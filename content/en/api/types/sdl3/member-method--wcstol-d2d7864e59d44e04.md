---
title: "SDLContext.RawApi — Method: Wcstol"
description: "Exact Method: Wcstol contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d2d7864e59d44e04
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Wcstol

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Wcstol`

<a id="api-d2075b457c86cdef"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Wcstol(System.UInt16*,System.UInt16**,System.Int32) 9a129b9f67d5409cce2d6c1373442afc6320c61a5b250d39cfa3e3961f86771c -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Wcstol(ushort* str, ushort** endp, int @base)
```

Parse a `long` from a wide string.
If `str` starts with whitespace, then those whitespace characters are
skipped before attempting to parse the number.
If the parsed number does not fit inside a `long`, the result is clamped to
the minimum and maximum representable `long` values.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_strtol

**Parameter `str`:** The null-terminated wide string to read. Must not be NULL.

**Parameter `endp`:** If not NULL, the address of the first invalid wide character
(i.e. the next character after the parsed number) will be
written to this pointer.

**Parameter `base`:** The base of the integer to read. Supported values are 0 and 2
to 36 inclusive. If 0, the base will be inferred from the
number's prefix (0x for hexadecimal, 0 for octal, decimal
otherwise).

**Returns:** the parsed `long`, or 0 if no number could be parsed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47501).

---
title: "SDLContext.RawApi — Method: Strtol"
description: "Exact Method: Strtol contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5410c3f87fcfd008
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strtol

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strtol`

<a id="api-f2474f32f2ee238a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strtol(System.SByte*,System.SByte**,System.Int32) d6e820dba89fe4d40123440f203a54b4da6ecbcb1fedbd73884cc79f96620d92 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Strtol(sbyte* str, sbyte** endp, int @base)
```

Parse a `long` from a string.
If `str` starts with whitespace, then those whitespace characters are
skipped before attempting to parse the number.
If the parsed number does not fit inside a `long`, the result is clamped to
the minimum and maximum representable `long` values.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_atoi

**See also:** SDL_atof

**See also:** SDL_strtoul

**See also:** SDL_strtoll

**See also:** SDL_strtoull

**See also:** SDL_strtod

**See also:** SDL_ltoa

**See also:** SDL_wcstol

**Parameter `str`:** The null-terminated string to read. Must not be NULL.

**Parameter `endp`:** If not NULL, the address of the first invalid character (i.e.
the next character after the parsed number) will be written to
this pointer.

**Parameter `base`:** The base of the integer to read. Supported values are 0 and 2
to 36 inclusive. If 0, the base will be inferred from the
number's prefix (0x for hexadecimal, 0 for octal, decimal
otherwise).

**Returns:** the parsed `long`, or 0 if no number could be parsed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25298).

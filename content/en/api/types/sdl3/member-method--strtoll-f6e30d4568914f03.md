---
title: "SDLContext.RawApi — Method: Strtoll"
description: "Exact Method: Strtoll contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f6e30d4568914f03
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strtoll

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strtoll`

<a id="api-307c33b574e3a3f2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strtoll(System.SByte*,System.SByte**,System.Int32) 859bc46b84fa47482e69e2885c32b18129e3f7f62527cd175fdc669f2570876e -->

```csharp
public long Inno.Native.Sdl3.SDLContext.RawApi.Strtoll(sbyte* str, sbyte** endp, int @base)
```

Parse a `long long` from a string.
If `str` starts with whitespace, then those whitespace characters are
skipped before attempting to parse the number.
If the parsed number does not fit inside a `long long`, the result is
clamped to the minimum and maximum representable `long long` values.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_atoi

**See also:** SDL_atof

**See also:** SDL_strtol

**See also:** SDL_strtoul

**See also:** SDL_strtoull

**See also:** SDL_strtod

**See also:** SDL_lltoa

**Parameter `str`:** The null-terminated string to read. Must not be NULL.

**Parameter `endp`:** If not NULL, the address of the first invalid character (i.e.
the next character after the parsed number) will be written to
this pointer.

**Parameter `base`:** The base of the integer to read. Supported values are 0 and 2
to 36 inclusive. If 0, the base will be inferred from the
number's prefix (0x for hexadecimal, 0 for octal, decimal
otherwise).

**Returns:** the parsed `long long`, or 0 if no number could be parsed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25125).

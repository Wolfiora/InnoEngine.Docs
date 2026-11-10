---
title: "SDLContext.RawApi — Method: Strtoul"
description: "Exact Method: Strtoul contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2a82b1520be56b43
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strtoul

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strtoul`

<a id="api-33e0304a1692b968"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strtoul(System.SByte*,System.SByte**,System.Int32) fb1926d7c1cfbee2b3387a816348e6dced7a43d3534f236156247503d946e0c0 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.Strtoul(sbyte* str, sbyte** endp, int @base)
```

Parse an `unsigned long` from a string.
If `str` starts with whitespace, then those whitespace characters are
skipped before attempting to parse the number.
If the parsed number does not fit inside an `unsigned long`, the result is
clamped to the maximum representable `unsigned long` value.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_atoi

**See also:** SDL_atof

**See also:** SDL_strtol

**See also:** SDL_strtoll

**See also:** SDL_strtoull

**See also:** SDL_strtod

**See also:** SDL_ultoa

**Parameter `str`:** The null-terminated string to read. Must not be NULL.

**Parameter `endp`:** If not NULL, the address of the first invalid character (i.e.
the next character after the parsed number) will be written to
this pointer.

**Parameter `base`:** The base of the integer to read. Supported values are 0 and 2
to 36 inclusive. If 0, the base will be inferred from the
number's prefix (0x for hexadecimal, 0 for octal, decimal
otherwise).

**Returns:** the parsed `unsigned long`, or 0 if no number could be parsed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48654).

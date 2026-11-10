---
title: "SDLContext.RawApi — Method: Ltoa"
description: "Exact Method: Ltoa contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d1247ea1806d25a8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Ltoa

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Ltoa`

<a id="api-95b5a5d96a01447d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Ltoa(System.Int32,System.SByte*,System.Int32) c60f2b32b25ca65b8d18ececad96a0b97a8770d9dbb6885dd248e798430d776c -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Ltoa(int value, sbyte* str, int radix)
```

Convert a long integer into a string.
This requires a radix to specified for string format. Specifying 10
produces a decimal number, 16 hexadecimal, etc. Must be in the range of 2
to 36.
Note that this function will overflow a buffer if `str` is not large enough
to hold the output! It may be safer to use SDL_snprintf to clamp output, or
SDL_asprintf to allocate a buffer. Otherwise, it doesn't hurt to allocate
much more space than you expect to use (and don't forget possible negative
signs, null terminator bytes, etc).

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ultoa

**See also:** SDL_itoa

**See also:** SDL_lltoa

**Parameter `value`:** the long integer to convert.

**Parameter `str`:** the buffer to write the string into.

**Parameter `radix`:** the radix to use for string generation.

**Returns:** `str`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34729).

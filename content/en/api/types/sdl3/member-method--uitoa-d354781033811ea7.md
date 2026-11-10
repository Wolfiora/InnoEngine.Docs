---
title: "SDLContext.RawApi — Method: Uitoa"
description: "Exact Method: Uitoa contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d354781033811ea7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Uitoa

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Uitoa`

<a id="api-ae3201376585d5d6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Uitoa(System.UInt32,System.SByte*,System.Int32) c72702a33ceb9d44cda18aaf1050027409467d27acf13c4ff1fda2e318bde86e -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Uitoa(uint value, sbyte* str, int radix)
```

Convert an unsigned integer into a string.
This requires a radix to specified for string format. Specifying 10
produces a decimal number, 16 hexadecimal, etc. Must be in the range of 2
to 36.
Note that this function will overflow a buffer if `str` is not large enough
to hold the output! It may be safer to use SDL_snprintf to clamp output, or
SDL_asprintf to allocate a buffer. Otherwise, it doesn't hurt to allocate
much more space than you expect to use (and don't forget null terminator
bytes, etc).

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_itoa

**See also:** SDL_ultoa

**See also:** SDL_ulltoa

**Parameter `value`:** the unsigned integer to convert.

**Parameter `str`:** the buffer to write the string into.

**Parameter `radix`:** the radix to use for string generation.

**Returns:** `str`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43836).

---
title: "SDLContext.RawApi — Method: Itoa"
description: "Exact Method: Itoa contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.66a8958d952d0ccc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Itoa

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Itoa`

<a id="api-dfae2c8caacdda41"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Itoa(System.Int32,System.SByte*,System.Int32) 4a9bf788a52b285038bc5b2bdd228d7e45c406e4852eefdc3296b1bf589b083b -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Itoa(int value, sbyte* str, int radix)
```

Convert an integer into a string.
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

**See also:** SDL_uitoa

**See also:** SDL_ltoa

**See also:** SDL_lltoa

**Parameter `value`:** the integer to convert.

**Parameter `str`:** the buffer to write the string into.

**Parameter `radix`:** the radix to use for string generation.

**Returns:** `str`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24250).

---
title: "SDLContext.RawApi — Method: Ulltoa"
description: "Exact Method: Ulltoa contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.36076ac1604c2334
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Ulltoa

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Ulltoa`

<a id="api-b5fa1525e4a7b689"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Ulltoa(System.UInt64,System.SByte*,System.Int32) 322c098f2b578ee528b538417ae76250839b32711a980dd87648f6dc7b9d1b04 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Ulltoa(ulong value, sbyte* str, int radix)
```

Convert an unsigned long long integer into a string.
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

**See also:** SDL_lltoa

**See also:** SDL_uitoa

**See also:** SDL_ultoa

**Parameter `value`:** the unsigned long long integer to convert.

**Parameter `str`:** the buffer to write the string into.

**Parameter `radix`:** the radix to use for string generation.

**Returns:** `str`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46191).

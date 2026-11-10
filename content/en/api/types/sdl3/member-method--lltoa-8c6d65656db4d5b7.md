---
title: "SDLContext.RawApi — Method: Lltoa"
description: "Exact Method: Lltoa contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8c6d65656db4d5b7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Lltoa

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Lltoa`

<a id="api-c03f7e51cb0b3873"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Lltoa(System.Int64,System.SByte*,System.Int32) 9f6685933a961e59a58108fd69c927815545c08003b64e9c01f5a6d775cc661b -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Lltoa(long value, sbyte* str, int radix)
```

Convert a long long integer into a string.
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

**See also:** SDL_ulltoa

**See also:** SDL_itoa

**See also:** SDL_ltoa

**Parameter `value`:** the long long integer to convert.

**Parameter `str`:** the buffer to write the string into.

**Parameter `radix`:** the radix to use for string generation.

**Returns:** `str`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18791).

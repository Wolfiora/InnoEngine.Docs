---
title: "SDLContext.RawApi — Method: Ucs4ToUtf8"
description: "Exact Method: Ucs4ToUtf8 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.94a3d653cab74d8c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Ucs4ToUtf8

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Ucs4ToUtf8`

<a id="api-6ed99e094f91533e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Ucs4ToUtf8(System.UInt32,System.SByte*) 9bdf45698a8d47e28e8d14d01829f52205fbfec29bd301ba8819cc82a6ed4bc9 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Ucs4ToUtf8(uint codepoint, sbyte* dst)
```

Convert a single Unicode codepoint to UTF-8.
The buffer pointed to by `dst` must be at least 4 bytes long, as this
function may generate between 1 and 4 bytes of output.
This function returns the first byte _after_ the newly-written UTF-8
sequence, which is useful for encoding multiple codepoints in a loop, or
knowing where to write a NULL-terminator character to end the string (in
either case, plan to have a buffer of _more_ than 4 bytes!).
If `codepoint` is an invalid value (outside the Unicode range, or a UTF-16
surrogate value, etc), this will use U+FFFD (REPLACEMENT CHARACTER) for the
codepoint instead, and not set an error.
If `dst` is NULL, this returns NULL immediately without writing to the
pointer and without setting an error.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `codepoint`:** a Unicode codepoint to convert to UTF-8.

**Parameter `dst`:** the location to write the encoded UTF-8. Must point to at least
4 bytes!

**Returns:** the first byte past the newly-written UTF-8 sequence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26993).

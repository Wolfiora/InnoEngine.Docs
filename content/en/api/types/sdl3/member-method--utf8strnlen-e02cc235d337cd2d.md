---
title: "SDLContext.RawApi — Method: Utf8strnlen"
description: "Exact Method: Utf8strnlen contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e02cc235d337cd2d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Utf8strnlen

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Utf8strnlen`

<a id="api-61129141c7bcb3c0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Utf8strnlen(System.SByte*,System.UInt64) 2038f0be66f680f7e73eee8353497075d95285bcca3880f654301932dc02dddf -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.Utf8strnlen(sbyte* str, ulong bytes)
```

Count the number of codepoints in a UTF-8 string, up to n bytes.
Counts the _codepoints_, not _bytes_, in `str`, excluding the null
terminator.
If you need to count the bytes in a string instead, consider using
SDL_strnlen().
The counting stops at `bytes` bytes (not codepoints!). This seems
counterintuitive, but makes it easy to express the total size of the
string's buffer.
Since this handles Unicode, it expects the strings to be well-formed UTF-8
and not a null-terminated string of arbitrary bytes. Bytes that are not
valid UTF-8 are treated as Unicode character U+FFFD (REPLACEMENT
CHARACTER), so a malformed or incomplete UTF-8 sequence might increase the
count by several replacement characters.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_utf8strlen

**See also:** SDL_strnlen

**Parameter `str`:** The null-terminated UTF-8 string to read. Must not be NULL.

**Parameter `bytes`:** The maximum amount of bytes to count.

**Returns:** The length (in codepoints, excluding the null terminator) of `src`
but never more than `maxlen`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49731).

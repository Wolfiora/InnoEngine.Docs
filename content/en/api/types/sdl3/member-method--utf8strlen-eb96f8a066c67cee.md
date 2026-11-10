---
title: "SDLContext.RawApi — Method: Utf8strlen"
description: "Exact Method: Utf8strlen contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.eb96f8a066c67cee
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Utf8strlen

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Utf8strlen`

<a id="api-60e24b5fac74c151"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Utf8strlen(System.SByte*) d6f313046c07f67d4621fab9b4424d1f38aad253d1b565ff88093b038654d217 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.Utf8strlen(sbyte* str)
```

Count the number of codepoints in a UTF-8 string.
Counts the _codepoints_, not _bytes_, in `str`, excluding the null
terminator.
If you need to count the bytes in a string instead, consider using
SDL_strlen().
Since this handles Unicode, it expects the strings to be well-formed UTF-8
and not a null-terminated string of arbitrary bytes. Bytes that are not
valid UTF-8 are treated as Unicode character U+FFFD (REPLACEMENT
CHARACTER), so a malformed or incomplete UTF-8 sequence might increase the
count by several replacement characters.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_utf8strnlen

**See also:** SDL_strlen

**Parameter `str`:** The null-terminated UTF-8 string to read. Must not be NULL.

**Returns:** The length (in codepoints, excluding the null terminator) of
`src`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45579).

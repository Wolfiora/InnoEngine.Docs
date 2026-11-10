---
title: "SDLContext.RawApi — Method: Strncasecmp"
description: "Exact Method: Strncasecmp contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5d283a1dcff8b395
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strncasecmp

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strncasecmp`

<a id="api-fd8a23fb2533ea71"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strncasecmp(System.SByte*,System.SByte*,System.UInt64) 68e0f204dc421604c5616ae4aef5981235b1b0c51da5e9c0f730b7745535ce2a -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Strncasecmp(sbyte* str1, sbyte* str2, ulong maxlen)
```

Compare two UTF-8 strings, case-insensitively, up to a number of bytes.
This will work with Unicode strings, using a technique called
"case-folding" to handle the vast majority of case-sensitive human
languages regardless of system locale. It can deal with expanding values: a
German Eszett character can compare against two ASCII 's' chars and be
considered a match, for example. A notable exception: it does not handle
the Turkish 'i' character; human language is complicated!
Since this handles Unicode, it expects the string to be well-formed UTF-8
and not a null-terminated string of arbitrary bytes. Bytes that are not
valid UTF-8 are treated as Unicode character U+FFFD (REPLACEMENT
CHARACTER), which is to say two strings of random bits may turn out to
match if they convert to the same amount of replacement characters.
Note that while this function is intended to be used with UTF-8, `maxlen`
specifies a _byte_ limit! If the limit lands in the middle of a multi-byte
UTF-8 sequence, it may convert a portion of the final character to one or
more Unicode character U+FFFD (REPLACEMENT CHARACTER) so as not to overflow
a buffer.
`maxlen` specifies a maximum number of bytes to compare; if the strings
match to this number of bytes (or both have matched to a null-terminator
character before this number of bytes), they will be considered equal.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `str1`:** the first string to compare. NULL is not permitted!

**Parameter `str2`:** the second string to compare. NULL is not permitted!

**Parameter `maxlen`:** the maximum number of bytes to compare.

**Returns:** less than zero if str1 is "less than" str2, greater than zero if
str1 is "greater than" str2, and zero if the strings match
exactly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44998).

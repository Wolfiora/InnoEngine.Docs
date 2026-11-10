---
title: "SDLContext.RawApi — Method: Wcsncasecmp"
description: "Exact Method: Wcsncasecmp contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f58f4bba61a11ee8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Wcsncasecmp

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Wcsncasecmp`

<a id="api-6e5cff440636d437"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Wcsncasecmp(System.UInt16*,System.UInt16*,System.UInt64) 86ab3e2ca2ac1a2cf95f840fcfedb12e407b68c2f624961ea3ff5601b3a8b939 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Wcsncasecmp(ushort* str1, ushort* str2, ulong maxlen)
```

Compare two wide strings, case-insensitively, up to a number of wchar_t.
This will work with Unicode strings, using a technique called
"case-folding" to handle the vast majority of case-sensitive human
languages regardless of system locale. It can deal with expanding values: a
German Eszett character can compare against two ASCII 's' chars and be
considered a match, for example. A notable exception: it does not handle
the Turkish 'i' character; human language is complicated!
Depending on your platform, "wchar_t" might be 2 bytes, and expected to be
UTF-16 encoded (like Windows), or 4 bytes in UTF-32 format. Since this
handles Unicode, it expects the string to be well-formed and not a
null-terminated string of arbitrary bytes. Characters that are not valid
UTF-16 (or UTF-32) are treated as Unicode character U+FFFD (REPLACEMENT
CHARACTER), which is to say two strings of random bits may turn out to
match if they convert to the same amount of replacement characters.
Note that while this function might deal with variable-sized characters,
`maxlen` specifies a _wchar_ limit! If the limit lands in the middle of a
multi-byte UTF-16 sequence, it may convert a portion of the final character
to one or more Unicode character U+FFFD (REPLACEMENT CHARACTER) so as not
to overflow a buffer.
`maxlen` specifies a maximum number of wchar_t values to compare; if the
strings match to this number of wchar_t (or both have matched to a
null-terminator character before this number of bytes), they will be
considered equal.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `str1`:** the first string to compare. NULL is not permitted!

**Parameter `str2`:** the second string to compare. NULL is not permitted!

**Parameter `maxlen`:** the maximum number of wchar_t values to compare.

**Returns:** less than zero if str1 is "less than" str2, greater than zero if
str1 is "greater than" str2, and zero if the strings match
exactly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35582).

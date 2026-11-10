---
title: "SDLContext.RawApi — Method: Wcscasecmp"
description: "Exact Method: Wcscasecmp contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fa6b971c56292fba
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Wcscasecmp

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Wcscasecmp`

<a id="api-576ca78ba6b5e91c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Wcscasecmp(System.UInt16*,System.UInt16*) eb33655b7a4491b5fc66cb19e57a23b02287faedc9baea636e193dbc1752a8ad -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Wcscasecmp(ushort* str1, ushort* str2)
```

Compare two null-terminated wide strings, case-insensitively.
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

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `str1`:** the first string to compare. NULL is not permitted!

**Parameter `str2`:** the second string to compare. NULL is not permitted!

**Returns:** less than zero if str1 is "less than" str2, greater than zero if
str1 is "greater than" str2, and zero if the strings match
exactly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44317).

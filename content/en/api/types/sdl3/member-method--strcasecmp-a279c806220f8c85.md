---
title: "SDLContext.RawApi — Method: Strcasecmp"
description: "Exact Method: Strcasecmp contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a279c806220f8c85
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strcasecmp

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strcasecmp`

<a id="api-06dea99b607fae69"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strcasecmp(System.SByte*,System.SByte*) 524a5eae16306c26f622ba4f0203bec6a2088b7afb9c049f9a36154e66e2542d -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Strcasecmp(sbyte* str1, sbyte* str2)
```

Compare two null-terminated UTF-8 strings, case-insensitively.
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

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `str1`:** the first string to compare. NULL is not permitted!

**Parameter `str2`:** the second string to compare. NULL is not permitted!

**Returns:** less than zero if str1 is "less than" str2, greater than zero if
str1 is "greater than" str2, and zero if the strings match
exactly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43503).

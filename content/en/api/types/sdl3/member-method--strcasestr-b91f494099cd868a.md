---
title: "SDLContext.RawApi — Method: Strcasestr"
description: "Exact Method: Strcasestr contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b91f494099cd868a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strcasestr

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strcasestr`

<a id="api-814bcc334b72b384"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strcasestr(System.SByte*,System.SByte*) 07b98f31c92f70e90c9a7be2544d146be776d6f9869c71b45671383989576f07 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Strcasestr(sbyte* haystack, sbyte* needle)
```

Search a UTF-8 string for the first instance of a specific substring,
case-insensitively.
This will work with Unicode strings, using a technique called
"case-folding" to handle the vast majority of case-sensitive human
languages regardless of system locale. It can deal with expanding values: a
German Eszett character can compare against two ASCII 's' chars and be
considered a match, for example. A notable exception: it does not handle
the Turkish 'i' character; human language is complicated!
Since this handles Unicode, it expects the strings to be well-formed UTF-8
and not a null-terminated string of arbitrary bytes. Bytes that are not
valid UTF-8 are treated as Unicode character U+FFFD (REPLACEMENT
CHARACTER), which is to say two strings of random bits may turn out to
match if they convert to the same amount of replacement characters.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `haystack`:** the string to search. Must not be NULL.

**Parameter `needle`:** the string to search for. Must not be NULL.

**Returns:** a pointer to the first instance of `needle` in the string, or NULL
if not found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41593).

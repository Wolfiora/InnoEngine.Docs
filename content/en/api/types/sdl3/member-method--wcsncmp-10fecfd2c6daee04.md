---
title: "SDLContext.RawApi — Method: Wcsncmp"
description: "Exact Method: Wcsncmp contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.10fecfd2c6daee04
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Wcsncmp

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Wcsncmp`

<a id="api-b517dc47e6f48170"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Wcsncmp(System.UInt16*,System.UInt16*,System.UInt64) 2cdf297e696cc363a9088e75545bb31a11625387f38ab021f37407142e6f274c -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Wcsncmp(ushort* str1, ushort* str2, ulong maxlen)
```

Compare two wide strings up to a number of wchar_t values.
This only compares wchar_t values; it does not care if the string is
well-formed UTF-16 (or UTF-32, depending on your platform's wchar_t size),
or uses valid Unicode values.
Note that while this function is intended to be used with UTF-16 (or
UTF-32, depending on your platform's definition of wchar_t), it is
comparing raw wchar_t values and not Unicode codepoints: `maxlen` specifies
a wchar_t limit! If the limit lands in the middle of a multi-wchar UTF-16
sequence, it will only compare a portion of the final character.
`maxlen` specifies a maximum number of wchar_t to compare; if the strings
match to this number of wide chars (or both have matched to a
null-terminator character before this count), they will be considered
equal.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `str1`:** the first string to compare. NULL is not permitted!

**Parameter `str2`:** the second string to compare. NULL is not permitted!

**Parameter `maxlen`:** the maximum number of wchar_t to compare.

**Returns:** less than zero if str1 is "less than" str2, greater than zero if
str1 is "greater than" str2, and zero if the strings match
exactly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22720).

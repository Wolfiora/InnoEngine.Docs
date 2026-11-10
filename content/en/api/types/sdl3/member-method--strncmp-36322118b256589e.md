---
title: "SDLContext.RawApi — Method: Strncmp"
description: "Exact Method: Strncmp contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.36322118b256589e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strncmp

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strncmp`

<a id="api-7420446a55858cb6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strncmp(System.SByte*,System.SByte*,System.UInt64) c2f8e552243966c4fe90e8d0a45ab79e05b3ac8b46766d897c705c11ae0ecca8 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Strncmp(sbyte* str1, sbyte* str2, ulong maxlen)
```

Compare two UTF-8 strings up to a number of bytes.
Due to the nature of UTF-8 encoding, this will work with Unicode strings,
since effectively this function just compares bytes until it hits a
null-terminating character. Also due to the nature of UTF-8, this can be
used with SDL_qsort() to put strings in (roughly) alphabetical order.
Note that while this function is intended to be used with UTF-8, it is
doing a bytewise comparison, and `maxlen` specifies a _byte_ limit! If the
limit lands in the middle of a multi-byte UTF-8 sequence, it will only
compare a portion of the final character.
`maxlen` specifies a maximum number of bytes to compare; if the strings
match to this number of bytes (or both have matched to a null-terminator
character before this number of bytes), they will be considered equal.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `str1`:** the first string to compare. NULL is not permitted!

**Parameter `str2`:** the second string to compare. NULL is not permitted!

**Parameter `maxlen`:** the maximum number of _bytes_ to compare.

**Returns:** less than zero if str1 is "less than" str2, greater than zero if
str1 is "greater than" str2, and zero if the strings match
exactly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17916).

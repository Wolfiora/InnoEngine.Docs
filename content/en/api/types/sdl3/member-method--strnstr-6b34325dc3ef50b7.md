---
title: "SDLContext.RawApi — Method: Strnstr"
description: "Exact Method: Strnstr contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6b34325dc3ef50b7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strnstr

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strnstr`

<a id="api-ce7015caaaea5926"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strnstr(System.SByte*,System.SByte*,System.UInt64) 2be29b774dff59b06a98ee564daa287561eefc72e85b95c834c2d36fee3f888d -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Strnstr(sbyte* haystack, sbyte* needle, ulong maxlen)
```

Search a string, up to n bytes, for the first instance of a specific
substring.
The search ends once it finds the requested substring, or a null terminator
byte to end the string, or `maxlen` bytes have been examined. It is
possible to use this function on a string without a null terminator.
Note that this looks for strings of _bytes_, not _characters_, so it's
legal to search for malformed and incomplete UTF-8 sequences.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `haystack`:** the string to search. Must not be NULL.

**Parameter `needle`:** the string to search for. Must not be NULL.

**Parameter `maxlen`:** the maximum number of bytes to search in `haystack`.

**Returns:** a pointer to the first instance of `needle` in the string, or NULL
if not found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31305).

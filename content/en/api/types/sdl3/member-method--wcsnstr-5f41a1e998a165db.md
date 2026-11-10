---
title: "SDLContext.RawApi — Method: Wcsnstr"
description: "Exact Method: Wcsnstr contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5f41a1e998a165db
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Wcsnstr

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Wcsnstr`

<a id="api-3b754d4a69a1dcc2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Wcsnstr(System.UInt16*,System.UInt16*,System.UInt64) d56e490976c6ef4ea3f9f8aaff0f7619f17d4deea6d4251a6b686b1cfad7ce4c -->

```csharp
public ushort* Inno.Native.Sdl3.SDLContext.RawApi.Wcsnstr(ushort* haystack, ushort* needle, ulong maxlen)
```

Search a wide string, up to n wide chars, for the first instance of a
specific substring.
The search ends once it finds the requested substring, or a null terminator
value to end the string, or `maxlen` wide character have been examined. It
is possible to use this function on a wide string without a null
terminator.
Note that this looks for strings of _wide characters_, not _codepoints_, so
it's legal to search for malformed and incomplete UTF-16 sequences.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `haystack`:** the wide string to search. Must not be NULL.

**Parameter `needle`:** the wide string to search for. Must not be NULL.

**Parameter `maxlen`:** the maximum number of wide characters to search in
`haystack`.

**Returns:** a pointer to the first instance of `needle` in the string, or NULL
if not found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40450).

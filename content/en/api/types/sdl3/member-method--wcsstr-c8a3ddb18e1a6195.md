---
title: "SDLContext.RawApi — Method: Wcsstr"
description: "Exact Method: Wcsstr contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c8a3ddb18e1a6195
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Wcsstr

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Wcsstr`

<a id="api-ff3b6b03fd332bd7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Wcsstr(System.UInt16*,System.UInt16*) 3aa3ac01465be411e841cbe76ef73f4423421ce1edd2f9487f68e1f4521424eb -->

```csharp
public ushort* Inno.Native.Sdl3.SDLContext.RawApi.Wcsstr(ushort* haystack, ushort* needle)
```

Search a wide string for the first instance of a specific substring.
The search ends once it finds the requested substring, or a null terminator
byte to end the string.
Note that this looks for strings of _wide characters_, not _codepoints_, so
it's legal to search for malformed and incomplete UTF-16 sequences.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `haystack`:** the wide string to search. Must not be NULL.

**Parameter `needle`:** the wide string to search for. Must not be NULL.

**Returns:** a pointer to the first instance of `needle` in the string, or NULL
if not found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47625).

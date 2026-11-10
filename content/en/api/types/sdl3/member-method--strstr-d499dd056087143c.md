---
title: "SDLContext.RawApi — Method: Strstr"
description: "Exact Method: Strstr contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d499dd056087143c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strstr

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strstr`

<a id="api-b5dd778b27d28a40"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strstr(System.SByte*,System.SByte*) 7a43c5cd475536d535081d0ad1f25dff3b681db5443da56287fa1157cd6e8ec8 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Strstr(sbyte* haystack, sbyte* needle)
```

Search a string for the first instance of a specific substring.
The search ends once it finds the requested substring, or a null terminator
byte to end the string.
Note that this looks for strings of _bytes_, not _characters_, so it's
legal to search for malformed and incomplete UTF-8 sequences.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `haystack`:** the string to search. Must not be NULL.

**Parameter `needle`:** the string to search for. Must not be NULL.

**Returns:** a pointer to the first instance of `needle` in the string, or NULL
if not found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50023).

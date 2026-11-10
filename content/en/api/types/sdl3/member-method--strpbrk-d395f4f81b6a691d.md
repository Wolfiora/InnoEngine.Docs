---
title: "SDLContext.RawApi — Method: Strpbrk"
description: "Exact Method: Strpbrk contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d395f4f81b6a691d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strpbrk

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strpbrk`

<a id="api-d1085f0eba7b7ac3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strpbrk(System.SByte*,System.SByte*) 1401352785c4ed05825adbf8ce35ab60a17a4592ddb7903ec3b43aed7c89795d -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Strpbrk(sbyte* str, sbyte* breakset)
```

Searches a string for the first occurrence of any character contained in a
breakset, and returns a pointer from the string to that character.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `str`:** The null-terminated string to be searched. Must not be NULL, and
must not overlap with `breakset`.

**Parameter `breakset`:** A null-terminated string containing the list of characters
to look for. Must not be NULL, and must not overlap with
`str`.

**Returns:** A pointer to the location, in str, of the first occurrence of a
character present in the breakset, or NULL if none is found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17192).

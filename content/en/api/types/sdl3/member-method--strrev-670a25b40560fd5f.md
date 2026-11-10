---
title: "SDLContext.RawApi — Method: Strrev"
description: "Exact Method: Strrev contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.670a25b40560fd5f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strrev

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strrev`

<a id="api-cd973a6da578b7ff"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strrev(System.SByte*) 4d054c289179c2b48fff67ba7b09de7c3d962554f49940b3b227bdd52ccf6a4c -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Strrev(sbyte* str)
```

Reverse a string's contents.
This reverses a null-terminated string in-place. Only the content of the
string is reversed; the null-terminator character remains at the end of the
reversed string.
**WARNING**: This function reverses the _bytes_ of the string, not the
codepoints. If `str` is a UTF-8 string with Unicode codepoints > 127, this
will ruin the string data. You should only use this function on strings
that are completely comprised of low ASCII characters.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `str`:** the string to reverse.

**Returns:** `str`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41235).

---
title: "SDLContext.RawApi — Method: Strrchr"
description: "Exact Method: Strrchr contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d328e564962c6fac
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strrchr

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strrchr`

<a id="api-11b28db497319e26"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strrchr(System.SByte*,System.Int32) 453dfad3b3b8b53352d455796b541d1795bcf27a01c5790714a11876246a0162 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Strrchr(sbyte* str, int c)
```

Search a string for the last instance of a specific byte.
The search must go until it finds a null terminator byte to end the string.
Note that this looks for _bytes_, not _characters_, so you cannot match
against a Unicode codepoint > 255, regardless of character encoding.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `str`:** the string to search. Must not be NULL.

**Parameter `c`:** the byte value to search for.

**Returns:** a pointer to the last instance of `c` in the string, or NULL if
not found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32424).

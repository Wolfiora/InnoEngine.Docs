---
title: "SDLContext.RawApi — Method: Strchr"
description: "Exact Method: Strchr contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1dd8006160b65448
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strchr

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strchr`

<a id="api-592492bf2f2e6f02"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strchr(System.SByte*,System.Int32) be74fa48170ce11a2f207c0a44c13457005c27329fdc73e47050328f366351aa -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Strchr(sbyte* str, int c)
```

Search a string for the first instance of a specific byte.
The search ends once it finds the requested byte value, or a null
terminator byte to end the string.
Note that this looks for _bytes_, not _characters_, so you cannot match
against a Unicode codepoint > 255, regardless of character encoding.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `str`:** the string to search. Must not be NULL.

**Parameter `c`:** the byte value to search for.

**Returns:** a pointer to the first instance of `c` in the string, or NULL if
not found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43914).

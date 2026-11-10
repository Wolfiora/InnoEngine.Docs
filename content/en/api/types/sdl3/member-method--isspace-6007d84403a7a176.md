---
title: "SDLContext.RawApi — Method: Isspace"
description: "Exact Method: Isspace contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6007d84403a7a176
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Isspace

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isspace`

<a id="api-238805babe7270bc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Isspace(System.Int32) 14a8ab2e0bbc79c40301c8b29e435d49cefc772a7697d14efbeadf484f594c69 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Isspace(int x)
```

Report if a character is whitespace.
**WARNING**: Regardless of system locale, this will only treat the
following ASCII values as true:
- space (0x20)
- tab (0x09)
- newline (0x0A)
- vertical tab (0x0B)
- form feed (0x0C)
- return (0x0D)

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42850).

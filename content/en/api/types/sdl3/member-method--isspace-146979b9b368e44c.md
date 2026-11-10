---
title: "SDL — Method: Isspace"
description: "Exact Method: Isspace contracts in SDL."
uid: api.inno.native.sdl3.146979b9b368e44c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Isspace

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isspace`

<a id="api-df962edc0296f872"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Isspace(System.Int32) 40c4d3ec70049fa116e02552b084a8ebfe2215493a0723f567b2a3924f03e92c -->

```csharp
public static int Inno.Native.Sdl3.SDL.Isspace(int x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3217).

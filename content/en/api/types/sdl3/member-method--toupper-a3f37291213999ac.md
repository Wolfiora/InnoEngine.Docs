---
title: "SDL — Method: Toupper"
description: "Exact Method: Toupper contracts in SDL."
uid: api.inno.native.sdl3.a3f37291213999ac
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Toupper

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Toupper`

<a id="api-17374aed4afcf4ee"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Toupper(System.Int32) d1adc2372c0efd83f801e3c9ca1bcdd1f8f5ad26fbd987f0ce8215648216a609 -->

```csharp
public static int Inno.Native.Sdl3.SDL.Toupper(int x)
```

Convert low-ASCII English letters to uppercase.
**WARNING**: Regardless of system locale, this will only convert ASCII
values 'a' through 'z' to uppercase.
This function returns the uppercase equivalent of `x`. If a character
cannot be converted, or is already uppercase, this function returns `x`.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** capitalized version of x, or x if no conversion available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3349).

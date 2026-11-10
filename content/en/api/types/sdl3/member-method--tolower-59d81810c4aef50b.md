---
title: "SDL — Method: Tolower"
description: "Exact Method: Tolower contracts in SDL."
uid: api.inno.native.sdl3.59d81810c4aef50b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Tolower

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Tolower`

<a id="api-6954dfa5e8ad549b"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Tolower(System.Int32) c7cbe873ee050ac8f1bd06366187eb30f6c2f682cf68252dbb4032e7647082a9 -->

```csharp
public static int Inno.Native.Sdl3.SDL.Tolower(int x)
```

Convert low-ASCII English letters to lowercase.
**WARNING**: Regardless of system locale, this will only convert ASCII
values 'A' through 'Z' to lowercase.
This function returns the lowercase equivalent of `x`. If a character
cannot be converted, or is already lowercase, this function returns `x`.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** lowercase version of x, or x if no conversion available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3775).

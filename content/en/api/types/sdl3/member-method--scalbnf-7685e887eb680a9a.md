---
title: "SDL — Method: Scalbnf"
description: "Exact Method: Scalbnf contracts in SDL."
uid: api.inno.native.sdl3.7685e887eb680a9a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Scalbnf

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Scalbnf`

<a id="api-ae276a58fc8fcf07"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Scalbnf(System.Single,System.Int32) af6fb09a4c58ae2ce5bd8eea343878786c60a7201c8c880d9db542845f2937ae -->

```csharp
public static float Inno.Native.Sdl3.SDL.Scalbnf(float x, int n)
```

Scale `x` by an integer power of two.
Multiplies `x` by the `n`th power of the floating point radix (always 2).
Domain: `-INF
<
= x
<
= INF`, `n` integer
Range: `-INF
<
= y
<
= INF`
This function operates on single-precision floating point values, use
SDL_scalbn for double-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_scalbn

**See also:** SDL_powf

**Parameter `x`:** floating point value to be scaled.

**Parameter `n`:** integer exponent.

**Returns:** `x * 2^n`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2563).

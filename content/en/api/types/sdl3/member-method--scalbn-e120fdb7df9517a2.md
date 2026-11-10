---
title: "SDL — Method: Scalbn"
description: "Exact Method: Scalbn contracts in SDL."
uid: api.inno.native.sdl3.e120fdb7df9517a2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Scalbn

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Scalbn`

<a id="api-5d7ac40b0ba7bacb"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Scalbn(System.Double,System.Int32) 20b1edc0fd129998a95f0fa509562778b093d01a6f13dd59008dc38aef9de1b6 -->

```csharp
public static double Inno.Native.Sdl3.SDL.Scalbn(double x, int n)
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
This function operates on double-precision floating point values, use
SDL_scalbnf for single-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_scalbnf

**See also:** SDL_pow

**Parameter `x`:** floating point value to be scaled.

**Parameter `n`:** integer exponent.

**Returns:** `x * 2^n`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3641).

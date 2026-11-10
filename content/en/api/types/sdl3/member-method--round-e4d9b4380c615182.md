---
title: "SDL — Method: Round"
description: "Exact Method: Round contracts in SDL."
uid: api.inno.native.sdl3.e4d9b4380c615182
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Round

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Round`

<a id="api-12dbcfe01954d86b"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Round(System.Double) 8e748821d5841cf2a38e85a35261b8472ecc5345b84099dcd4ff43b6999e4f8f -->

```csharp
public static double Inno.Native.Sdl3.SDL.Round(double x)
```

Round `x` to the nearest integer.
Rounds `x` to the nearest integer. Values halfway between integers will be
rounded away from zero.
Domain: `-INF
<
= x
<
= INF`
Range: `-INF
<
= y
<
= INF`, y integer
This function operates on double-precision floating point values, use
SDL_roundf for single-precision floats. To get the result as an integer
type, use SDL_lround.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_roundf

**See also:** SDL_lround

**See also:** SDL_floor

**See also:** SDL_ceil

**See also:** SDL_trunc

**Parameter `x`:** floating point value.

**Returns:** the nearest integer to `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2147).

---
title: "SDL — Method: Fabsf"
description: "Exact Method: Fabsf contracts in SDL."
uid: api.inno.native.sdl3.7f98fac97d87de91
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Fabsf

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Fabsf`

<a id="api-ae9e7cc5a966d66b"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Fabsf(System.Single) 2a825a5fed7137b1efaf2c790018dabbde19387ee7a7b74626ad0a377a53116e -->

```csharp
public static float Inno.Native.Sdl3.SDL.Fabsf(float x)
```

Compute the absolute value of `x`
Domain: `-INF
<
= x
<
= INF`
Range: `0
<
= y
<
= INF`
This function operates on single-precision floating point values, use
SDL_fabs for double-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_fabs

**Parameter `x`:** floating point value to use as the magnitude.

**Returns:** the absolute value of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L354).

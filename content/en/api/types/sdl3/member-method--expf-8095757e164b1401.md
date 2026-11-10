---
title: "SDL — Method: Expf"
description: "Exact Method: Expf contracts in SDL."
uid: api.inno.native.sdl3.8095757e164b1401
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Expf

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Expf`

<a id="api-e02aea49f7649903"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Expf(System.Single) 5b4b056e3d2014e98ad6085fceb07ea6c3c84fe8f30e35e954da163526eef50a -->

```csharp
public static float Inno.Native.Sdl3.SDL.Expf(float x)
```

Compute the exponential of `x`.
The definition of `y = exp(x)` is `y = e^x`, where `e` is the base of the
natural logarithm. The inverse is the natural logarithm, SDL_logf.
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
The output will overflow if `exp(x)` is too large to be represented.
This function operates on single-precision floating point values, use
SDL_exp for double-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_exp

**See also:** SDL_logf

**Parameter `x`:** floating point value.

**Returns:** value of `e^x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2777).

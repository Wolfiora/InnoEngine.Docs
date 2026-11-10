---
title: "SDL — Method: Log10"
description: "Exact Method: Log10 contracts in SDL."
uid: api.inno.native.sdl3.e6854adca8fc726c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Log10

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Log10`

<a id="api-24fca12ec5d8e890"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Log10(System.Double) e4881eedd9eec75260bc4fc49faefb3b5007112fa1efadf2a01e41d01ab51157 -->

```csharp
public static double Inno.Native.Sdl3.SDL.Log10(double x)
```

Compute the base-10 logarithm of `x`.
Domain: `0
<
x
<
= INF`
Range: `-INF
<
= y
<
= INF`
It is an error for `x` to be less than or equal to 0.
This function operates on double-precision floating point values, use
SDL_log10f for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_log10f

**See also:** SDL_log

**See also:** SDL_pow

**Parameter `x`:** floating point value. Must be greater than 0.

**Returns:** the logarithm of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3611).

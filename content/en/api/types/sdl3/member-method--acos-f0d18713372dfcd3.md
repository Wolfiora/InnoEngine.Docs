---
title: "SDL — Method: Acos"
description: "Exact Method: Acos contracts in SDL."
uid: api.inno.native.sdl3.f0d18713372dfcd3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Acos

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Acos`

<a id="api-2b45627ec50e2931"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Acos(System.Double) 4ba077f96147b7910c905cd895fe542ac91bd005ed38d91989ef54fef2e94d71 -->

```csharp
public static double Inno.Native.Sdl3.SDL.Acos(double x)
```

Compute the arc cosine of `x`.
The definition of `y = acos(x)` is `x = cos(y)`.
Domain: `-1
<
= x
<
= 1`
Range: `0
<
= y
<
= Pi`
This function operates on double-precision floating point values, use
SDL_acosf for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_acosf

**See also:** SDL_asin

**See also:** SDL_cos

**Parameter `x`:** floating point value.

**Returns:** arc cosine of `x`, in radians.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1313).

---
title: "SDLContext.RawApi — Method: Atan"
description: "Exact Method: Atan contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2fe7764a8c9293e4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Atan

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Atan`

<a id="api-a034b230a39f2523"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Atan(System.Double) 741797ac12257dde2aea24471f8fdf0180576716fdd8779734c8f81570bc6df8 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.RawApi.Atan(double x)
```

Compute the arc tangent of `x`.
The definition of `y = atan(x)` is `x = tan(y)`.
Domain: `-INF
<
= x
<
= INF`
Range: `-Pi/2
<
= y
<
= Pi/2`
This function operates on double-precision floating point values, use
SDL_atanf for single-precision floats.
To calculate the arc tangent of y / x, use SDL_atan2.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_atanf

**See also:** SDL_atan2

**See also:** SDL_tan

**Parameter `x`:** floating point value.

**Returns:** arc tangent of of `x` in radians, or 0 if `x = 0`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38028).

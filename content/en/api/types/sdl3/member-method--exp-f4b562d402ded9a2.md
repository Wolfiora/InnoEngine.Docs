---
title: "SDLContext.RawApi — Method: Exp"
description: "Exact Method: Exp contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f4b562d402ded9a2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Exp

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Exp`

<a id="api-71d9da4240125bf1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Exp(System.Double) cfe092763634750fac9a06ac16c904b0e091dda8cfffaa17b2db7a549cced3a8 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.RawApi.Exp(double x)
```

Compute the exponential of `x`.
The definition of `y = exp(x)` is `y = e^x`, where `e` is the base of the
natural logarithm. The inverse is the natural logarithm, SDL_log.
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
This function operates on double-precision floating point values, use
SDL_expf for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_expf

**See also:** SDL_log

**Parameter `x`:** floating point value.

**Returns:** value of `e^x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16701).

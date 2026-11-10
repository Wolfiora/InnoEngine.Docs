---
title: "SDLContext — Method: Asin"
description: "Exact Method: Asin contracts in SDLContext."
uid: api.inno.native.sdl3.79c5a7ebaa06e2bb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Asin

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Asin`

<a id="api-2d25c98c01cf0a20"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Asin(System.Double) 2016dc52f27a463bd097fb681115b82b95e9b78dbfc11e5d5097aafb5965e446 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Asin(double x)
```

Compute the arc sine of `x`.
The definition of `y = asin(x)` is `x = sin(y)`.
Domain: `-1
<
= x
<
= 1`
Range: `-Pi/2
<
= y
<
= Pi/2`
This function operates on double-precision floating point values, use
SDL_asinf for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_asinf

**See also:** SDL_acos

**See also:** SDL_sin

**Parameter `x`:** floating point value.

**Returns:** arc sine of `x`, in radians.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13787).

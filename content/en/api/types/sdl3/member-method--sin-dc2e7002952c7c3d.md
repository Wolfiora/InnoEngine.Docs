---
title: "SDLContext — Method: Sin"
description: "Exact Method: Sin contracts in SDLContext."
uid: api.inno.native.sdl3.dc2e7002952c7c3d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Sin

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Sin`

<a id="api-68dd50e4aacf4e55"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Sin(System.Double) 5fc26448c9cb3619303bbd3aa3e3060cb5b2cc76d6a293a47521f30842afdedb -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Sin(double x)
```

Compute the sine of `x`.
Domain: `-INF
<
= x
<
= INF`
Range: `-1
<
= y
<
= 1`
This function operates on double-precision floating point values, use
SDL_sinf for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_sinf

**See also:** SDL_asin

**See also:** SDL_cos

**Parameter `x`:** floating point value, in radians.

**Returns:** sine of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16256).

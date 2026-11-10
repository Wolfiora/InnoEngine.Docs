---
title: "SDLContext — Method: Tan"
description: "Exact Method: Tan contracts in SDLContext."
uid: api.inno.native.sdl3.27b1cffd2272bb78
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Tan

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Tan`

<a id="api-047f9dcfb9ec94f8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Tan(System.Double) b2b9de2627f3765ebbf5f5771d0cfff487442bb2f966da08f057c62273ace316 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Tan(double x)
```

Compute the tangent of `x`.
Domain: `-INF
<
= x
<
= INF`
Range: `-INF
<
= y
<
= INF`
This function operates on double-precision floating point values, use
SDL_tanf for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_tanf

**See also:** SDL_sin

**See also:** SDL_cos

**See also:** SDL_atan

**See also:** SDL_atan2

**Parameter `x`:** floating point value, in radians.

**Returns:** tangent of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11467).

---
title: "SDLContext — Method: Sqrt"
description: "Exact Method: Sqrt contracts in SDLContext."
uid: api.inno.native.sdl3.a7bed66398c9dff4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Sqrt

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Sqrt`

<a id="api-dd23e92467495acc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Sqrt(System.Double) 2ca5c508618bee5360d20db6d298abb8c67c2b0b5a78ea5bf684ccfb78a5cfca -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Sqrt(double x)
```

Compute the square root of `x`.
Domain: `0
<
= x
<
= INF`
Range: `0
<
= y
<
= INF`
This function operates on double-precision floating point values, use
SDL_sqrtf for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_sqrtf

**Parameter `x`:** floating point value. Must be greater than or equal to 0.

**Returns:** square root of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15545).

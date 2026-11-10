---
title: "SDLContext.RawApi — Method: Sin"
description: "Exact Method: Sin contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1e0b4ea5cf79490e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Sin

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Sin`

<a id="api-aa1b0ba0a4f53660"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Sin(System.Double) 6565ceb9742ccdb21176c39f137c3981c8003e9a752e1c33bc3e730260da9a99 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.RawApi.Sin(double x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50677).

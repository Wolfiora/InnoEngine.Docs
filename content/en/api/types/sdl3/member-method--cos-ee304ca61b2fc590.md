---
title: "SDLContext — Method: Cos"
description: "Exact Method: Cos contracts in SDLContext."
uid: api.inno.native.sdl3.ee304ca61b2fc590
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Cos

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Cos`

<a id="api-928f166ba244bff6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Cos(System.Double) 3524a4502b149a29d30469b80544a830c5cd4f95c33687025c74d9a1ccf825d9 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Cos(double x)
```

Compute the cosine of `x`.
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
SDL_cosf for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_cosf

**See also:** SDL_acos

**See also:** SDL_sin

**Parameter `x`:** floating point value, in radians.

**Returns:** cosine of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13532).

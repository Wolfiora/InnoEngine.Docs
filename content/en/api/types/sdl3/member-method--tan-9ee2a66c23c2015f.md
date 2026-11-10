---
title: "SDLContext.RawApi — Method: Tan"
description: "Exact Method: Tan contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9ee2a66c23c2015f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Tan

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Tan`

<a id="api-eff1ace08fca19f3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Tan(System.Double) faf9e5ed3ee2f2b2fd9321ba9eabad3142ffc575931a86318b1a8fb841a614be -->

```csharp
public double Inno.Native.Sdl3.SDLContext.RawApi.Tan(double x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16830).

---
title: "SDLContext.RawApi — Method: Copysign"
description: "Exact Method: Copysign contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.65753a545d0ef906
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Copysign

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Copysign`

<a id="api-78ededd791ebe53c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Copysign(System.Double,System.Double) 6feb26187fc371a1e019e0d0bb13ea9fd3e52d11e8cde56c5f3e7fc6f801fcc7 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.RawApi.Copysign(double x, double y)
```

Copy the sign of one floating-point value to another.
The definition of copysign is that ``copysign(x, y) = abs(x) * sign(y)``.
Domain: `-INF
<
= x
<
= INF`, ``-INF
<
= y
<
= f``
Range: `-INF
<
= z
<
= INF`
This function operates on double-precision floating point values, use
SDL_copysignf for single-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_copysignf

**See also:** SDL_fabs

**Parameter `x`:** floating point value to use as the magnitude.

**Parameter `y`:** floating point value to use as the sign.

**Returns:** the floating point value with the sign of y and the magnitude of
x.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24571).

---
title: "SDLContext — Method: Fabs"
description: "Exact Method: Fabs contracts in SDLContext."
uid: api.inno.native.sdl3.a2c0d1d71ae36d8d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Fabs

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Fabs`

<a id="api-518297d781f52193"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Fabs(System.Double) 966894a14c30198055c611322a0384a27099b3895af47d2bfc2bdc3b14450fad -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Fabs(double x)
```

Compute the absolute value of `x`
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
This function operates on double-precision floating point values, use
SDL_fabsf for single-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_fabsf

**Parameter `x`:** floating point value to use as the magnitude.

**Returns:** the absolute value of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12083).

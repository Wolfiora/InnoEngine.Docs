---
title: "SDLContext — Method: Copysign"
description: "Exact Method: Copysign contracts in SDLContext."
uid: api.inno.native.sdl3.c3a6a06dd843a2db
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Copysign

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Copysign`

<a id="api-d758ec662c0ed828"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Copysign(System.Double,System.Double) 86a20682c4ae063f426bb593c76e9316ebae9d159c708163144d422a1a8d0342 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Copysign(double x, double y)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12617).

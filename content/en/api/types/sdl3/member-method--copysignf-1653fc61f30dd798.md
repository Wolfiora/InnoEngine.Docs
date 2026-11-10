---
title: "SDLContext — Method: Copysignf"
description: "Exact Method: Copysignf contracts in SDLContext."
uid: api.inno.native.sdl3.1653fc61f30dd798
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Copysignf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Copysignf`

<a id="api-7d7eb14158cd91d3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Copysignf(System.Single,System.Single) 971b525c2f0aadd97bd7892950faa08651b94752c82050b2482861340b3f4c00 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.Copysignf(float x, float y)
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
This function operates on single-precision floating point values, use
SDL_copysign for double-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_copysign

**See also:** SDL_fabsf

**Parameter `x`:** floating point value to use as the magnitude.

**Parameter `y`:** floating point value to use as the sign.

**Returns:** the floating point value with the sign of y and the magnitude of
x.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13881).

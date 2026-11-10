---
title: "SDLContext — Method: Exp"
description: "Exact Method: Exp contracts in SDLContext."
uid: api.inno.native.sdl3.e52c5d840dd21a84
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Exp

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Exp`

<a id="api-3426d33330cd4822"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Exp(System.Double) 3d1a4ef21569e5a3357c4275af010978978116fc816f2be0260e4c99fde5e5ff -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Exp(double x)
```

Compute the exponential of `x`.
The definition of `y = exp(x)` is `y = e^x`, where `e` is the base of the
natural logarithm. The inverse is the natural logarithm, SDL_log.
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
The output will overflow if `exp(x)` is too large to be represented.
This function operates on double-precision floating point values, use
SDL_expf for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_expf

**See also:** SDL_log

**Parameter `x`:** floating point value.

**Returns:** value of `e^x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11414).

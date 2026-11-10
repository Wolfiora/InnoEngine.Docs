---
title: "SDLContext — Method: Pow"
description: "Exact Method: Pow contracts in SDLContext."
uid: api.inno.native.sdl3.3f54927733920749
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Pow

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Pow`

<a id="api-4a701bbd4baffc3c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Pow(System.Double,System.Double) 050d87fb948bd064cfe0b4f45e3c2874216b7afea2101065be7d6c8aa886bc76 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Pow(double x, double y)
```

Raise `x` to the power `y`
Domain: `-INF
<
= x
<
= INF`, `-INF
<
= y
<
= INF`
Range: `-INF
<
= z
<
= INF`
If `y` is the base of the natural logarithm (e), consider using SDL_exp
instead.
This function operates on double-precision floating point values, use
SDL_powf for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_powf

**See also:** SDL_exp

**See also:** SDL_log

**Parameter `x`:** the base.

**Parameter `y`:** the exponent.

**Returns:** `x` raised to the power `y`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14815).

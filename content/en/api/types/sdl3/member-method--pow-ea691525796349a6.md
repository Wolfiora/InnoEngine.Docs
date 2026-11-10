---
title: "SDLContext.RawApi — Method: Pow"
description: "Exact Method: Pow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ea691525796349a6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Pow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Pow`

<a id="api-a35e701d8a4cc3e9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Pow(System.Double,System.Double) cbec5a946f867ea034bf80f88fc86ec661665fe30e9ce9864873f4ad2863b4b2 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.RawApi.Pow(double x, double y)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39214).

---
title: "SDLContext.RawApi — Method: Floor"
description: "Exact Method: Floor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.cb119032602e8b4c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Floor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Floor`

<a id="api-8a6ad455975ecb5a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Floor(System.Double) a68f88069d3dcd9320cca1abea5b945a28f1abc58e286cf2025bfc38d60f4e94 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.RawApi.Floor(double x)
```

Compute the floor of `x`.
The floor of `x` is the largest integer `y` such that `y
<
= x`, i.e `x`
rounded down to the nearest integer.
Domain: `-INF
<
= x
<
= INF`
Range: `-INF
<
= y
<
= INF`, y integer
This function operates on double-precision floating point values, use
SDL_floorf for single-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_floorf

**See also:** SDL_ceil

**See also:** SDL_trunc

**See also:** SDL_round

**See also:** SDL_lround

**Parameter `x`:** floating point value.

**Returns:** the floor of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39487).

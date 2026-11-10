---
title: "SDLContext — Method: Floor"
description: "Exact Method: Floor contracts in SDLContext."
uid: api.inno.native.sdl3.9433106d49fd1239
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Floor

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Floor`

<a id="api-c58fdb6665b9704d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Floor(System.Double) 864ec0c45930f8e927b537c31296d2866c49b3857428c7481e42d619f7387b34 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Floor(double x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14866).

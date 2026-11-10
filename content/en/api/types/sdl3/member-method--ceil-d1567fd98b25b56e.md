---
title: "SDLContext — Method: Ceil"
description: "Exact Method: Ceil contracts in SDLContext."
uid: api.inno.native.sdl3.d1567fd98b25b56e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Ceil

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Ceil`

<a id="api-715b8474bd955639"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Ceil(System.Double) bc4ad4c39c1d3ae89471471add18f6c55f0f5de734c1f5ebabf72c094742e9ca -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Ceil(double x)
```

Compute the ceiling of `x`.
The ceiling of `x` is the smallest integer `y` such that `y >= x`, i.e `x`
rounded up to the nearest integer.
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
SDL_ceilf for single-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ceilf

**See also:** SDL_floor

**See also:** SDL_trunc

**See also:** SDL_round

**See also:** SDL_lround

**Parameter `x`:** floating point value.

**Returns:** the ceiling of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14666).

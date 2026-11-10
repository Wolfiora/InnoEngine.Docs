---
title: "SDLContext.RawApi — Method: Ceilf"
description: "Exact Method: Ceilf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7f2a19e54f9ef338
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Ceilf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Ceilf`

<a id="api-f9dd572bac5c0432"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Ceilf(System.Single) 05cc60b24ecc702750190b9e841260677a3187b9493b20cf776085825cad77b0 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.Ceilf(float x)
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
This function operates on single-precision floating point values, use
SDL_ceil for double-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ceil

**See also:** SDL_floorf

**See also:** SDL_truncf

**See also:** SDL_roundf

**See also:** SDL_lroundf

**Parameter `x`:** floating point value.

**Returns:** the ceiling of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44429).

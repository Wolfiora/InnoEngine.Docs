---
title: "SDLContext.RawApi — Method: Floorf"
description: "Exact Method: Floorf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.33b569be1e62061e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Floorf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Floorf`

<a id="api-ef48cf9492cdf3ef"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Floorf(System.Single) 7fd845093f38fc4e12982af1deb325edb49b27e59b10d3f8782e4831d0cab2b1 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.Floorf(float x)
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
This function operates on single-precision floating point values, use
SDL_floor for double-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_floor

**See also:** SDL_ceilf

**See also:** SDL_truncf

**See also:** SDL_roundf

**See also:** SDL_lroundf

**Parameter `x`:** floating point value.

**Returns:** the floor of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47163).

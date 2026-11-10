---
title: "SDLContext — Method: Ceilf"
description: "Exact Method: Ceilf contracts in SDLContext."
uid: api.inno.native.sdl3.79ce4d16e7a4f26c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Ceilf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Ceilf`

<a id="api-b1eb60949f6c3f2f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Ceilf(System.Single) 63f714d5612cc8e14f829b031a016b656eeb7e0d877646d097d35e3063397bfe -->

```csharp
public float Inno.Native.Sdl3.SDLContext.Ceilf(float x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15493).

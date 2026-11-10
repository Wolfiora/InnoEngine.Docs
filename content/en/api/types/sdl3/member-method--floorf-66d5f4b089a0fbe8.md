---
title: "SDLContext — Method: Floorf"
description: "Exact Method: Floorf contracts in SDLContext."
uid: api.inno.native.sdl3.66d5f4b089a0fbe8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Floorf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Floorf`

<a id="api-966d9a83cde596ab"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Floorf(System.Single) a28a3dba7645943c03b577d3371d7d6a90632dec2f577e0fe2a351068e876c51 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.Floorf(float x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15810).

---
title: "SDLContext.RawApi — Method: Tanf"
description: "Exact Method: Tanf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c4ba21776949e86b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Tanf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Tanf`

<a id="api-be465e4ffb7f3ad1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Tanf(System.Single) e6a5110edeb79b5a15072a649dc670cdcbaec580fd3cf9d64f4ae278d8018690 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.Tanf(float x)
```

Compute the tangent of `x`.
Domain: `-INF
<
= x
<
= INF`
Range: `-INF
<
= y
<
= INF`
This function operates on single-precision floating point values, use
SDL_tan for double-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_tan

**See also:** SDL_sinf

**See also:** SDL_cosf

**See also:** SDL_atanf

**See also:** SDL_atan2f

**Parameter `x`:** floating point value, in radians.

**Returns:** tangent of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30725).

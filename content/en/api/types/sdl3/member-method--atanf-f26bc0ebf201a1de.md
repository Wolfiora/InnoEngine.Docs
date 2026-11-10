---
title: "SDLContext.RawApi — Method: Atanf"
description: "Exact Method: Atanf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f26bc0ebf201a1de
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Atanf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Atanf`

<a id="api-b1bd62346dd22705"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Atanf(System.Single) d99e4589d5fc87408b2f9f14240534a765e627756c15d4d625a5366d86936ffb -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.Atanf(float x)
```

Compute the arc tangent of `x`.
The definition of `y = atan(x)` is `x = tan(y)`.
Domain: `-INF
<
= x
<
= INF`
Range: `-Pi/2
<
= y
<
= Pi/2`
This function operates on single-precision floating point values, use
SDL_atan for dboule-precision floats.
To calculate the arc tangent of y / x, use SDL_atan2f.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_atan

**See also:** SDL_atan2f

**See also:** SDL_tanf

**Parameter `x`:** floating point value.

**Returns:** arc tangent of of `x` in radians, or 0 if `x = 0`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52431).

---
title: "SDLContext — Method: Asinf"
description: "Exact Method: Asinf contracts in SDLContext."
uid: api.inno.native.sdl3.263d4015190cd4e0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Asinf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Asinf`

<a id="api-05b75b944aa42990"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Asinf(System.Single) 58884a09d3e2f60160ecb33cf78fc5d519b10a01d4f821e0be238fdbdf32491c -->

```csharp
public float Inno.Native.Sdl3.SDLContext.Asinf(float x)
```

Compute the arc sine of `x`.
The definition of `y = asin(x)` is `x = sin(y)`.
Domain: `-1
<
= x
<
= 1`
Range: `-Pi/2
<
= y
<
= Pi/2`
This function operates on single-precision floating point values, use
SDL_asin for double-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_asin

**See also:** SDL_acosf

**See also:** SDL_sinf

**Parameter `x`:** floating point value.

**Returns:** arc sine of `x`, in radians.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12804).

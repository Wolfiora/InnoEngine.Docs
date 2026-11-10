---
title: "SDLContext — Method: Acos"
description: "Exact Method: Acos contracts in SDLContext."
uid: api.inno.native.sdl3.32e819b7c16196d0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Acos

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Acos`

<a id="api-c31aa81a2d01cd10"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Acos(System.Double) 841a70fa902f345484249775cf1f92e5f0ab48127ae5b6107e106789ca1a1fb6 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Acos(double x)
```

Compute the arc cosine of `x`.
The definition of `y = acos(x)` is `x = cos(y)`.
Domain: `-1
<
= x
<
= 1`
Range: `0
<
= y
<
= Pi`
This function operates on double-precision floating point values, use
SDL_acosf for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_acosf

**See also:** SDL_asin

**See also:** SDL_cos

**Parameter `x`:** floating point value.

**Returns:** arc cosine of `x`, in radians.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12946).

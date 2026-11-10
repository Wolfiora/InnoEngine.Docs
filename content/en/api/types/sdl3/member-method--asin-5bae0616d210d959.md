---
title: "SDLContext.RawApi — Method: Asin"
description: "Exact Method: Asin contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5bae0616d210d959
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Asin

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Asin`

<a id="api-089c115fae0e41d1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Asin(System.Double) 1ed57c0127dfb7f54dafce7776d6e00f4e319fc43eb532712df8eef571c70366 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.RawApi.Asin(double x)
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
This function operates on double-precision floating point values, use
SDL_asinf for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_asinf

**See also:** SDL_acos

**See also:** SDL_sin

**Parameter `x`:** floating point value.

**Returns:** arc sine of `x`, in radians.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33519).

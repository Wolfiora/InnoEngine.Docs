---
title: "SDLContext.RawApi — Method: Cos"
description: "Exact Method: Cos contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4f63e2966d1c0173
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Cos

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Cos`

<a id="api-1c07984495cba159"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Cos(System.Double) c38f50595a85460094ec308b4fb7cb55cb19fd63e4a0a04d8247745fc35b1585 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.RawApi.Cos(double x)
```

Compute the cosine of `x`.
Domain: `-INF
<
= x
<
= INF`
Range: `-1
<
= y
<
= 1`
This function operates on double-precision floating point values, use
SDL_cosf for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_cosf

**See also:** SDL_acos

**See also:** SDL_sin

**Parameter `x`:** floating point value, in radians.

**Returns:** cosine of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31527).

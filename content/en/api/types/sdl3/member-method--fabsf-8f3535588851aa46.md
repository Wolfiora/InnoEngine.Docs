---
title: "SDLContext.RawApi — Method: Fabsf"
description: "Exact Method: Fabsf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8f3535588851aa46
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Fabsf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Fabsf`

<a id="api-2db7fd4ae171411a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Fabsf(System.Single) db34029bd07c7fd908a1493735be6f2f077e2e3ab7163cf9e1a13da47e3823d1 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.Fabsf(float x)
```

Compute the absolute value of `x`
Domain: `-INF
<
= x
<
= INF`
Range: `0
<
= y
<
= INF`
This function operates on single-precision floating point values, use
SDL_fabs for double-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_fabs

**Parameter `x`:** floating point value to use as the magnitude.

**Returns:** the absolute value of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18557).

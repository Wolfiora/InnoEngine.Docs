---
title: "SDLContext.RawApi — Method: Logf"
description: "Exact Method: Logf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.24d5bc431da101a8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Logf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Logf`

<a id="api-8dbaefafd3fa556d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Logf(System.Single) 69ee74440724693ecad517313555d7a24a80ad84ad487b11afeea54262129ae3 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.Logf(float x)
```

Compute the natural logarithm of `x`.
Domain: `0
<
x
<
= INF`
Range: `-INF
<
= y
<
= INF`
It is an error for `x` to be less than or equal to 0.
This function operates on single-precision floating point values, use
SDL_log for double-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_log

**See also:** SDL_expf

**Parameter `x`:** floating point value. Must be greater than 0.

**Returns:** the natural logarithm of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18503).

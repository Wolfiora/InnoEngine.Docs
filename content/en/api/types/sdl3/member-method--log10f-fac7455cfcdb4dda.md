---
title: "SDLContext.RawApi — Method: Log10f"
description: "Exact Method: Log10f contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fac7455cfcdb4dda
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Log10f

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Log10f`

<a id="api-513b0bffe0611355"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Log10f(System.Single) 0c17aa376f6b19bf7c82e7f9217167f13251628b4989d901bcff29c825d93920 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.Log10f(float x)
```

Compute the base-10 logarithm of `x`.
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
SDL_log10 for double-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_log10

**See also:** SDL_logf

**See also:** SDL_powf

**Parameter `x`:** floating point value. Must be greater than 0.

**Returns:** the logarithm of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35000).

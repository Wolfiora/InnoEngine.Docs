---
title: "SDLContext.RawApi — Method: Sqrtf"
description: "Exact Method: Sqrtf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a28323612d3b68f5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Sqrtf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Sqrtf`

<a id="api-7452624cb87e6198"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Sqrtf(System.Single) 19b6289989b2a4bde8b0179ee31c821fd10d5cad04a3fb38aaa6f1c3693e5ddb -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.Sqrtf(float x)
```

Compute the square root of `x`.
Domain: `0
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
SDL_sqrt for double-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_sqrt

**Parameter `x`:** floating point value. Must be greater than or equal to 0.

**Returns:** square root of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36283).

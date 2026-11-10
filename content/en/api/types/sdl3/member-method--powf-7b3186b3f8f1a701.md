---
title: "SDLContext.RawApi — Method: Powf"
description: "Exact Method: Powf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7b3186b3f8f1a701
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Powf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Powf`

<a id="api-3fece54030a35a51"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Powf(System.Single,System.Single) fd1ea3f82d7b191f743c232e39baea674e753b44626d60d4a42d2ce4269faed8 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.Powf(float x, float y)
```

Raise `x` to the power `y`
Domain: `-INF
<
= x
<
= INF`, `-INF
<
= y
<
= INF`
Range: `-INF
<
= z
<
= INF`
If `y` is the base of the natural logarithm (e), consider using SDL_exp
instead.
This function operates on single-precision floating point values, use
SDL_pow for double-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_pow

**See also:** SDL_expf

**See also:** SDL_logf

**Parameter `x`:** the base.

**Parameter `y`:** the exponent.

**Returns:** `x` raised to the power `y`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28245).

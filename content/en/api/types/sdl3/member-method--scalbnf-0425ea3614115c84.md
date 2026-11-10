---
title: "SDLContext.RawApi — Method: Scalbnf"
description: "Exact Method: Scalbnf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0425ea3614115c84
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Scalbnf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Scalbnf`

<a id="api-bc7f891996290e2d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Scalbnf(System.Single,System.Int32) 55da1d44b12f0e195e411490b072483021afeb245fd735ba30c8e5af8c83d304 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.Scalbnf(float x, int n)
```

Scale `x` by an integer power of two.
Multiplies `x` by the `n`th power of the floating point radix (always 2).
Domain: `-INF
<
= x
<
= INF`, `n` integer
Range: `-INF
<
= y
<
= INF`
This function operates on single-precision floating point values, use
SDL_scalbn for double-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_scalbn

**See also:** SDL_powf

**Parameter `x`:** floating point value to be scaled.

**Parameter `n`:** integer exponent.

**Returns:** `x * 2^n`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36949).

---
title: "SDLContext — Method: Expf"
description: "Exact Method: Expf contracts in SDLContext."
uid: api.inno.native.sdl3.c2ce4ca1044be74d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Expf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Expf`

<a id="api-d70d8b31d6d484b6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Expf(System.Single) b19c7c02705049f54d5e996684c676baeba98b6089338facbe414df688b80664 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.Expf(float x)
```

Compute the exponential of `x`.
The definition of `y = exp(x)` is `y = e^x`, where `e` is the base of the
natural logarithm. The inverse is the natural logarithm, SDL_logf.
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
The output will overflow if `exp(x)` is too large to be represented.
This function operates on single-precision floating point values, use
SDL_exp for double-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_exp

**See also:** SDL_logf

**Parameter `x`:** floating point value.

**Returns:** value of `e^x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14717).

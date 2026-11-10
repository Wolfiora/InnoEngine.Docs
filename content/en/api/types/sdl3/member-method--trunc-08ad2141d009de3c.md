---
title: "SDLContext.RawApi — Method: Trunc"
description: "Exact Method: Trunc contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.08ad2141d009de3c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Trunc

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Trunc`

<a id="api-3e564d4a1057f04d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Trunc(System.Double) 95230c43caf9f338871ae411b77e489e80fd2ed517dadccefccd482dd03020b8 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.RawApi.Trunc(double x)
```

Truncate `x` to an integer.
Rounds `x` to the next closest integer to 0. This is equivalent to removing
the fractional part of `x`, leaving only the integer part.
Domain: `-INF
<
= x
<
= INF`
Range: `-INF
<
= y
<
= INF`, y integer
This function operates on double-precision floating point values, use
SDL_truncf for single-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_truncf

**See also:** SDL_fmod

**See also:** SDL_ceil

**See also:** SDL_floor

**See also:** SDL_round

**See also:** SDL_lround

**Parameter `x`:** floating point value.

**Returns:** `x` truncated to an integer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19804).

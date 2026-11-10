---
title: "SDLContext — Method: Trunc"
description: "Exact Method: Trunc contracts in SDLContext."
uid: api.inno.native.sdl3.f2d90b62693a1a97
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Trunc

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Trunc`

<a id="api-65485df660ac0dce"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Trunc(System.Double) 6e7e5f91ae6eecd69a8ed9ffdb4074bb106c120f7aa3418b3448c910bcd042a7 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Trunc(double x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11978).

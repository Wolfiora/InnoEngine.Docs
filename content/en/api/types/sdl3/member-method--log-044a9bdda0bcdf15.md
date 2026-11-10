---
title: "SDLContext — Method: Log"
description: "Exact Method: Log contracts in SDLContext."
uid: api.inno.native.sdl3.044a9bdda0bcdf15
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Log

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Log`

<a id="api-6b738f3e852ae6d0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Log(System.Double) 2c51adcd653629a4656fe676108b731e14df8a71dbaba879818eac12343f40b4 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Log(double x)
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
This function operates on double-precision floating point values, use
SDL_logf for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_logf

**See also:** SDL_log10

**See also:** SDL_exp

**Parameter `x`:** floating point value. Must be greater than 0.

**Returns:** the natural logarithm of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11553).

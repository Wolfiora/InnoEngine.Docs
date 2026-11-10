---
title: "SDLContext — Method: Log10"
description: "Exact Method: Log10 contracts in SDLContext."
uid: api.inno.native.sdl3.ebc120c41c57b861
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Log10

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Log10`

<a id="api-b9109ad5aa2fef17"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Log10(System.Double) f515f1a4a62c831a2f384f0d252f5cc4f41d0d9d43e8f27f7460ac308dcfd397 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Log10(double x)
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
This function operates on double-precision floating point values, use
SDL_log10f for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_log10f

**See also:** SDL_log

**See also:** SDL_pow

**Parameter `x`:** floating point value. Must be greater than 0.

**Returns:** the logarithm of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15739).

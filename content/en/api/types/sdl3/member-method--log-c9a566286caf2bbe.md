---
title: "SDL — Method: Log"
description: "Exact Method: Log contracts in SDL."
uid: api.inno.native.sdl3.c9a566286caf2bbe
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Log

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Log`

<a id="api-ca12455728ec1635"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Log(System.Double) 59bebb11e39710ea925bdd9be56aa91ff721d790b742f4dd1902cbd252db98a4 -->

```csharp
public static double Inno.Native.Sdl3.SDL.Log(double x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L181).

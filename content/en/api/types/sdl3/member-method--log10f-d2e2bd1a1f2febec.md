---
title: "SDL — Method: Log10f"
description: "Exact Method: Log10f contracts in SDL."
uid: api.inno.native.sdl3.d2e2bd1a1f2febec
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Log10f

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Log10f`

<a id="api-ca27152ad5ef17f9"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Log10f(System.Single) 7cf82428bb7384599446bd226c303211e74ca61fcf0f54a85ddfd7d63711efca -->

```csharp
public static float Inno.Native.Sdl3.SDL.Log10f(float x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2222).

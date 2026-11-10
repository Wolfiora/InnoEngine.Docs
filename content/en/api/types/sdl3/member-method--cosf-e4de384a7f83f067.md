---
title: "SDL — Method: Cosf"
description: "Exact Method: Cosf contracts in SDL."
uid: api.inno.native.sdl3.e4de384a7f83f067
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Cosf

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Cosf`

<a id="api-1548bb2fc08e5ae4"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Cosf(System.Single) 6634443240204375e826f79d8c62d6faa488bd87344b18d9a57fe3ffd780cc5e -->

```csharp
public static float Inno.Native.Sdl3.SDL.Cosf(float x)
```

Compute the cosine of `x`.
Domain: `-INF
<
= x
<
= INF`
Range: `-1
<
= y
<
= 1`
This function operates on single-precision floating point values, use
SDL_cos for double-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_cos

**See also:** SDL_acosf

**See also:** SDL_sinf

**Parameter `x`:** floating point value, in radians.

**Returns:** cosine of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3827).

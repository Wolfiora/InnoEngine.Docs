---
title: "SDLContext — Method: Atan"
description: "Exact Method: Atan contracts in SDLContext."
uid: api.inno.native.sdl3.c25cc1f2f98a67ba
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Atan

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Atan`

<a id="api-3c5a98153d27946f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Atan(System.Double) 420780f0983d08d0a6abc97388de9c4ea71bb9d86d9fdc30bcf6b484d42a3d73 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Atan(double x)
```

Compute the arc tangent of `x`.
The definition of `y = atan(x)` is `x = tan(y)`.
Domain: `-INF
<
= x
<
= INF`
Range: `-Pi/2
<
= y
<
= Pi/2`
This function operates on double-precision floating point values, use
SDL_atanf for single-precision floats.
To calculate the arc tangent of y / x, use SDL_atan2.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_atanf

**See also:** SDL_atan2

**See also:** SDL_tan

**Parameter `x`:** floating point value.

**Returns:** arc tangent of of `x` in radians, or 0 if `x = 0`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14592).

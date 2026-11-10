---
title: "SDLContext.RawApi — Method: Asinf"
description: "Exact Method: Asinf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9f6d7a3ea64edff7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Asinf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Asinf`

<a id="api-caa98e5791544c1b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Asinf(System.Single) 96a82810f9d3c60d67dc33604edaf8fcbbcd209c85bea6ce061dfa63797fa38c -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.Asinf(float x)
```

Compute the arc sine of `x`.
The definition of `y = asin(x)` is `x = sin(y)`.
Domain: `-1
<
= x
<
= 1`
Range: `-Pi/2
<
= y
<
= Pi/2`
This function operates on single-precision floating point values, use
SDL_asin for double-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_asin

**See also:** SDL_acosf

**See also:** SDL_sinf

**Parameter `x`:** floating point value.

**Returns:** arc sine of `x`, in radians.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26115).

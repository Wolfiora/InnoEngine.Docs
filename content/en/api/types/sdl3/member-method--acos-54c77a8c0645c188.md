---
title: "SDLContext.RawApi — Method: Acos"
description: "Exact Method: Acos contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.54c77a8c0645c188
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Acos

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Acos`

<a id="api-c1ade6adcbf0064e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Acos(System.Double) 919495a21193caf5c627f1ab323af6b6d2f34fedc00c3c544bec6acee6a956fa -->

```csharp
public double Inno.Native.Sdl3.SDLContext.RawApi.Acos(double x)
```

Compute the arc cosine of `x`.
The definition of `y = acos(x)` is `x = cos(y)`.
Domain: `-1
<
= x
<
= 1`
Range: `0
<
= y
<
= Pi`
This function operates on double-precision floating point values, use
SDL_acosf for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_acosf

**See also:** SDL_asin

**See also:** SDL_cos

**Parameter `x`:** floating point value.

**Returns:** arc cosine of `x`, in radians.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27163).

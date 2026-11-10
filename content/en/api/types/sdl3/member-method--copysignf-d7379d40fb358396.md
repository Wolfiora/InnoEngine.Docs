---
title: "SDLContext.RawApi — Method: Copysignf"
description: "Exact Method: Copysignf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d7379d40fb358396
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Copysignf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Copysignf`

<a id="api-fbd4bd768b8212b6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Copysignf(System.Single,System.Single) 19cee18776e7facfac9c2a7f3cf865f1fcc14e787a0bd3a70b37a9e8e6e69046 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.Copysignf(float x, float y)
```

Copy the sign of one floating-point value to another.
The definition of copysign is that ``copysign(x, y) = abs(x) * sign(y)``.
Domain: `-INF
<
= x
<
= INF`, ``-INF
<
= y
<
= f``
Range: `-INF
<
= z
<
= INF`
This function operates on single-precision floating point values, use
SDL_copysign for double-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_copysign

**See also:** SDL_fabsf

**Parameter `x`:** floating point value to use as the magnitude.

**Parameter `y`:** floating point value to use as the sign.

**Returns:** the floating point value with the sign of y and the magnitude of
x.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34130).

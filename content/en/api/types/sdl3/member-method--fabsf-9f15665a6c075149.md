---
title: "SDLContext — Method: Fabsf"
description: "Exact Method: Fabsf contracts in SDLContext."
uid: api.inno.native.sdl3.9f15665a6c075149
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Fabsf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Fabsf`

<a id="api-1818f4d337fcf7af"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Fabsf(System.Single) 30ec0d6d39e9909c3573d96ba136d9116f913f21991cd97481f269f5d73905dc -->

```csharp
public float Inno.Native.Sdl3.SDLContext.Fabsf(float x)
```

Compute the absolute value of `x`
Domain: `-INF
<
= x
<
= INF`
Range: `0
<
= y
<
= INF`
This function operates on single-precision floating point values, use
SDL_fabs for double-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_fabs

**Parameter `x`:** floating point value to use as the magnitude.

**Returns:** the absolute value of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11758).

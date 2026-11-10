---
title: "SDLContext — Method: Sqrtf"
description: "Exact Method: Sqrtf contracts in SDLContext."
uid: api.inno.native.sdl3.947d4ed1d0e4fe49
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Sqrtf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Sqrtf`

<a id="api-253ed45d0dae42c1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Sqrtf(System.Single) 0c087eb2d4cb695ea2d202e481448dda5f6ea9da1a8d6839b0936f6ed0e81e3c -->

```csharp
public float Inno.Native.Sdl3.SDLContext.Sqrtf(float x)
```

Compute the square root of `x`.
Domain: `0
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
SDL_sqrt for double-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_sqrt

**Parameter `x`:** floating point value. Must be greater than or equal to 0.

**Returns:** square root of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14313).

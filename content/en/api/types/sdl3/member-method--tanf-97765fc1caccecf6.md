---
title: "SDLContext — Method: Tanf"
description: "Exact Method: Tanf contracts in SDLContext."
uid: api.inno.native.sdl3.97765fc1caccecf6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Tanf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Tanf`

<a id="api-44606b71dff158ab"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Tanf(System.Single) ff4185e5ffbc87c759cab59ca3fa42f7f4edb2a8d5361c0d75698769192d5dfd -->

```csharp
public float Inno.Native.Sdl3.SDLContext.Tanf(float x)
```

Compute the tangent of `x`.
Domain: `-INF
<
= x
<
= INF`
Range: `-INF
<
= y
<
= INF`
This function operates on single-precision floating point values, use
SDL_tan for double-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_tan

**See also:** SDL_sinf

**See also:** SDL_cosf

**See also:** SDL_atanf

**See also:** SDL_atan2f

**Parameter `x`:** floating point value, in radians.

**Returns:** tangent of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13376).

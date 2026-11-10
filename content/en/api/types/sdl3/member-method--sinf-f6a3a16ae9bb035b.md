---
title: "SDLContext — Method: Sinf"
description: "Exact Method: Sinf contracts in SDLContext."
uid: api.inno.native.sdl3.f6a3a16ae9bb035b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Sinf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Sinf`

<a id="api-8ecdd4efcb58077b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Sinf(System.Single) fcd75f6b9f84e3e94cd14bbf3d2339f0ded931f905f531198757f535929007e3 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.Sinf(float x)
```

Compute the sine of `x`.
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
SDL_sin for double-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_sin

**See also:** SDL_asinf

**See also:** SDL_cosf

**Parameter `x`:** floating point value, in radians.

**Returns:** sine of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14508).

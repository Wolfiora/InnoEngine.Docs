---
title: "SDLContext — Method: Cosf"
description: "Exact Method: Cosf contracts in SDLContext."
uid: api.inno.native.sdl3.b0ff7df59fe82f70
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Cosf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Cosf`

<a id="api-bdd7a6f725c1a8ce"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Cosf(System.Single) dba55bc0ca4c24a4509b5faecd64429edcda865f49a84c6f7e1d01e6761c72ba -->

```csharp
public float Inno.Native.Sdl3.SDLContext.Cosf(float x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15995).

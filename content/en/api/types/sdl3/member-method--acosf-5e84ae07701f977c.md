---
title: "SDLContext — Method: Acosf"
description: "Exact Method: Acosf contracts in SDLContext."
uid: api.inno.native.sdl3.5e84ae07701f977c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Acosf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Acosf`

<a id="api-46817e4bf5e53324"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Acosf(System.Single) 68d031efe4f001db9c085b58cce1ddbd807dbf54e92219df2c6585affdf7ce28 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.Acosf(float x)
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
This function operates on single-precision floating point values, use
SDL_acos for double-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_acos

**See also:** SDL_asinf

**See also:** SDL_cosf

**Parameter `x`:** floating point value.

**Returns:** arc cosine of `x`, in radians.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15324).

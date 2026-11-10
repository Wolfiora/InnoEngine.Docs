---
title: "SDL — Method: Sqrtf"
description: "Exact Method: Sqrtf contracts in SDL."
uid: api.inno.native.sdl3.a34313630b9cfefa
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Sqrtf

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Sqrtf`

<a id="api-c8bdc407e7b66708"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Sqrtf(System.Single) 1675470375aaf7895d9a184162de721aeffb62e9bb9267f7fbd060aa9aef0add -->

```csharp
public static float Inno.Native.Sdl3.SDL.Sqrtf(float x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2447).

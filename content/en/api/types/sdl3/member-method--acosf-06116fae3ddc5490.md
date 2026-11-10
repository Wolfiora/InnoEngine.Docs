---
title: "SDL — Method: Acosf"
description: "Exact Method: Acosf contracts in SDL."
uid: api.inno.native.sdl3.06116fae3ddc5490
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Acosf

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Acosf`

<a id="api-a06441d5deca7d61"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Acosf(System.Single) d23b5a98bf0cacf62ef839d4940104f39ce7d6839dd288f880f45c8ea6710dcf -->

```csharp
public static float Inno.Native.Sdl3.SDL.Acosf(float x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3268).

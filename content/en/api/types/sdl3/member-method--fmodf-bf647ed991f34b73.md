---
title: "SDLContext.RawApi — Method: Fmodf"
description: "Exact Method: Fmodf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bf647ed991f34b73
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Fmodf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Fmodf`

<a id="api-7028b294b0cc645f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Fmodf(System.Single,System.Single) 1c42defa1c0cd37d620a6559adbac50d2e905bffe27048d6ed7d7b7e10efb5fd -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.Fmodf(float x, float y)
```

Return the floating-point remainder of `x / y`
Divides `x` by `y`, and returns the remainder.
Domain: `-INF
<
= x
<
= INF`, `-INF
<
= y
<
= INF`, `y != 0`
Range: `-y
<
= z
<
= y`
This function operates on single-precision floating point values, use
SDL_fmod for double-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_fmod

**See also:** SDL_truncf

**See also:** SDL_modff

**See also:** SDL_ceilf

**See also:** SDL_floorf

**See also:** SDL_roundf

**See also:** SDL_lroundf

**Parameter `x`:** the numerator.

**Parameter `y`:** the denominator. Must not be 0.

**Returns:** the remainder of `x / y`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26426).

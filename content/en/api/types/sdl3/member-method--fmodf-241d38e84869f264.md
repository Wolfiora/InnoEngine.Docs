---
title: "SDLContext — Method: Fmodf"
description: "Exact Method: Fmodf contracts in SDLContext."
uid: api.inno.native.sdl3.241d38e84869f264
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Fmodf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Fmodf`

<a id="api-906c36f803ad7866"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Fmodf(System.Single,System.Single) 91ca7d92d95e8eb16fd37cf1341136ea8bde9077607504426aae3b51c65ae194 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.Fmodf(float x, float y)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12865).

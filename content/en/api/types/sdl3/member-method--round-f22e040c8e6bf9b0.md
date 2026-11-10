---
title: "SDLContext.RawApi — Method: Round"
description: "Exact Method: Round contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f22e040c8e6bf9b0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Round

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Round`

<a id="api-3ee03c8d943ce7c7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Round(System.Double) ee03d6e6607d2d49e11d23bba2c702fe905f720cdea8137fb4c28fc1f8454335 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.RawApi.Round(double x)
```

Round `x` to the nearest integer.
Rounds `x` to the nearest integer. Values halfway between integers will be
rounded away from zero.
Domain: `-INF
<
= x
<
= INF`
Range: `-INF
<
= y
<
= INF`, y integer
This function operates on double-precision floating point values, use
SDL_roundf for single-precision floats. To get the result as an integer
type, use SDL_lround.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_roundf

**See also:** SDL_lround

**See also:** SDL_floor

**See also:** SDL_ceil

**See also:** SDL_trunc

**Parameter `x`:** floating point value.

**Returns:** the nearest integer to `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34508).

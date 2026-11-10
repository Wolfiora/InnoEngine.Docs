---
title: "SDLContext — Method: Round"
description: "Exact Method: Round contracts in SDLContext."
uid: api.inno.native.sdl3.991f587cd24d0aa5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Round

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Round`

<a id="api-7ecbff1779200dce"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Round(System.Double) 867138ee5c10059c41c24df1f3cf9eb8cd51361307f2320bb57562e7bc9f24cf -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Round(double x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13965).

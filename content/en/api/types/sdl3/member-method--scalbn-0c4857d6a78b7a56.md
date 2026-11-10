---
title: "SDLContext — Method: Scalbn"
description: "Exact Method: Scalbn contracts in SDLContext."
uid: api.inno.native.sdl3.0c4857d6a78b7a56
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Scalbn

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Scalbn`

<a id="api-729a58616aaaa229"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Scalbn(System.Double,System.Int32) 7afe780ea6db410c9666e437b4e32fdb7fd9324fac18df028a6a9b3e4f078fbe -->

```csharp
public double Inno.Native.Sdl3.SDLContext.Scalbn(double x, int n)
```

Scale `x` by an integer power of two.
Multiplies `x` by the `n`th power of the floating point radix (always 2).
Domain: `-INF
<
= x
<
= INF`, `n` integer
Range: `-INF
<
= y
<
= INF`
This function operates on double-precision floating point values, use
SDL_scalbnf for single-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_scalbnf

**See also:** SDL_pow

**Parameter `x`:** floating point value to be scaled.

**Parameter `n`:** integer exponent.

**Returns:** `x * 2^n`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15773).

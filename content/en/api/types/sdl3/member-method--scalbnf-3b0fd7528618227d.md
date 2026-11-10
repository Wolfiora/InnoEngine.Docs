---
title: "SDLContext — Method: Scalbnf"
description: "Exact Method: Scalbnf contracts in SDLContext."
uid: api.inno.native.sdl3.3b0fd7528618227d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Scalbnf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Scalbnf`

<a id="api-ec3dc1b3f1a5bf9a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Scalbnf(System.Single,System.Int32) 4b544fdb688404a5c64ce01b1ac1502557109b0be5b360de20a67d0a41bb01d4 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.Scalbnf(float x, int n)
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
This function operates on single-precision floating point values, use
SDL_scalbn for double-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_scalbn

**See also:** SDL_powf

**Parameter `x`:** floating point value to be scaled.

**Parameter `n`:** integer exponent.

**Returns:** `x * 2^n`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14459).

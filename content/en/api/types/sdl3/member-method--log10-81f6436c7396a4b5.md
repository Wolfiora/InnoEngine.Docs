---
title: "SDLContext.RawApi — Method: Log10"
description: "Exact Method: Log10 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.81f6436c7396a4b5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Log10

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Log10`

<a id="api-297a4c7e4fe89692"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Log10(System.Double) 55fca8d8ddb339e4e85783096e3ccbfb9234026333b6d35af1ead088a6a712f0 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.RawApi.Log10(double x)
```

Compute the base-10 logarithm of `x`.
Domain: `0
<
x
<
= INF`
Range: `-INF
<
= y
<
= INF`
It is an error for `x` to be less than or equal to 0.
This function operates on double-precision floating point values, use
SDL_log10f for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_log10f

**See also:** SDL_log

**See also:** SDL_pow

**Parameter `x`:** floating point value. Must be greater than 0.

**Returns:** the logarithm of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46825).

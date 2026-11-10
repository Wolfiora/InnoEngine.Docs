---
title: "SDLContext.RawApi — Method: Modf"
description: "Exact Method: Modf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4b2e968758937026
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Modf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Modf`

<a id="api-5cf6168c2d3bf400"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Modf(System.Double,System.Double*) 05acc19052f02dc7564a4c4b42941ac46ee455642bc37a3a91663944488723e8 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.RawApi.Modf(double x, double* y)
```

Split `x` into integer and fractional parts
This function operates on double-precision floating point values, use
SDL_modff for single-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_modff

**See also:** SDL_trunc

**See also:** SDL_fmod

**Parameter `x`:** floating point value.

**Parameter `y`:** output pointer to store the integer part of `x`.

**Returns:** the fractional part of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27068).

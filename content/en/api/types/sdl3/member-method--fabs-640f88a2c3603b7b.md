---
title: "SDLContext.RawApi — Method: Fabs"
description: "Exact Method: Fabs contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.640f88a2c3603b7b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Fabs

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Fabs`

<a id="api-83b9e81225c72267"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Fabs(System.Double) bc2cbb48f14ce8b5c2fd79d7ce1366bc98c0ccdf8e952301742eded8844974f5 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.RawApi.Fabs(double x)
```

Compute the absolute value of `x`
Domain: `-INF
<
= x
<
= INF`
Range: `0
<
= y
<
= INF`
This function operates on double-precision floating point values, use
SDL_fabsf for single-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_fabsf

**Parameter `x`:** floating point value to use as the magnitude.

**Returns:** the absolute value of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20208).

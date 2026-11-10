---
title: "SDLContext.RawApi — Method: Isnan"
description: "Exact Method: Isnan contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.82ba30d28538522a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Isnan

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isnan`

<a id="api-9e4b7128a6131a0f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Isnan(System.Double) 8e67e9b0d98ecc0b75bed742b7f85928b59da0a31eef543e15bedd0620c2c5a3 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Isnan(double x)
```

Return whether the value is NaN.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_isnanf

**Parameter `x`:** double-precision floating point value.

**Returns:** non-zero if the value is NaN, 0 otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45797).

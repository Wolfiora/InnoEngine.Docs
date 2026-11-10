---
title: "SDL — Method: Isinf"
description: "Exact Method: Isinf contracts in SDL."
uid: api.inno.native.sdl3.a2c8feb1dee708cf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Isinf

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isinf`

<a id="api-11d2d6454f89cc4a"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Isinf(System.Double) bdd65ea5cb60fd831180bf6a9ea1e5deab7d1a31a63fc9afbc3a15cd6a974c74 -->

```csharp
public static int Inno.Native.Sdl3.SDL.Isinf(double x)
```

Return whether the value is infinity.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_isinff

**Parameter `x`:** double-precision floating point value.

**Returns:** non-zero if the value is infinity, 0 otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3170).

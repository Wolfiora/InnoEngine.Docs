---
title: "SDL — Method: Isnan"
description: "Exact Method: Isnan contracts in SDL."
uid: api.inno.native.sdl3.edf7a6bcfb6e41bc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Isnan

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isnan`

<a id="api-ac31e79d126a4163"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Isnan(System.Double) 4fad776f4d83ecee2e24cec8ff1165d5ff2b8e3d7f61a51ef3fb8e113af08a29 -->

```csharp
public static int Inno.Native.Sdl3.SDL.Isnan(double x)
```

Return whether the value is NaN.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_isnanf

**Parameter `x`:** double-precision floating point value.

**Returns:** non-zero if the value is NaN, 0 otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3541).

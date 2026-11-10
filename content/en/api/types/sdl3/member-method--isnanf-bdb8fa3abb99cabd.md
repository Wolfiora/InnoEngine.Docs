---
title: "SDL — Method: Isnanf"
description: "Exact Method: Isnanf contracts in SDL."
uid: api.inno.native.sdl3.bdb8fa3abb99cabd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Isnanf

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isnanf`

<a id="api-c9ef449ae0434a77"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Isnanf(System.Single) e87a988effbc0b93f92fd390adf307ba389e41c578b78d7579f1735536481647 -->

```csharp
public static int Inno.Native.Sdl3.SDL.Isnanf(float x)
```

Return whether the value is NaN.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_isnan

**Parameter `x`:** floating point value.

**Returns:** non-zero if the value is NaN, 0 otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1939).

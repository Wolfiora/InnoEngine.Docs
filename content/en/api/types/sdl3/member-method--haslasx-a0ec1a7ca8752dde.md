---
title: "SDL — Method: HasLasx"
description: "Exact Method: HasLasx contracts in SDL."
uid: api.inno.native.sdl3.a0ec1a7ca8752dde
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasLasx

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasLasx`

<a id="api-fa3b33e28ca07ec1"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasLasx 0c4f87da7b92d0708334afc14ad1cafb4fde541f2358e906ac3f343453b69c17 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasLasx()
```

Determine whether the CPU has LASX (LOONGARCH SIMD) features.
This always returns false on CPUs that aren't using LOONGARCH instruction
sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the CPU has LOONGARCH LASX features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1159).

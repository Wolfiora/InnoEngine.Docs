---
title: "SDL — Method: HasArmsimd"
description: "Exact Method: HasArmsimd contracts in SDL."
uid: api.inno.native.sdl3.e9c891b52d1e9c3c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasArmsimd

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasArmsimd`

<a id="api-1ff6d0fd424fccf2"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasArmsimd 69c6aab94772ec29176fb19d2db1890c95384c4998e12847dd0b7af4dc0b65fe -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasArmsimd()
```

Determine whether the CPU has ARM SIMD (ARMv6) features.
This is different from ARM NEON, which is a different instruction set.
This always returns false on CPUs that aren't using ARM instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasNEON

**Returns:** true if the CPU has ARM SIMD features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3954).

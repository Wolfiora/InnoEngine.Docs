---
title: "SDL — Method: HasAvx2"
description: "Exact Method: HasAvx2 contracts in SDL."
uid: api.inno.native.sdl3.f5be4d5ecc2a6bc2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasAvx2

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasAvx2`

<a id="api-f3fe7a3d8b3aeeb9"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasAvx2 d4b85b7f351118a8f7f957b6de2179827dbda7e3819d8b38743d9cf7f188504f -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasAvx2()
```

Determine whether the CPU has AVX2 features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasAVX

**See also:** SDL_HasAVX512F

**Returns:** true if the CPU has AVX2 features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3734).

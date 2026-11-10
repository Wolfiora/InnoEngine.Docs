---
title: "SDL — Method: HasLsx"
description: "Exact Method: HasLsx contracts in SDL."
uid: api.inno.native.sdl3.763c9de73b435f3a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasLsx

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasLsx`

<a id="api-1d74be6dc45ef14f"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasLsx 88c446cc465d245e5dd584f007d5e186a61cdc642276fc986106a8672070eec2 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasLsx()
```

Determine whether the CPU has LSX (LOONGARCH SIMD) features.
This always returns false on CPUs that aren't using LOONGARCH instruction
sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the CPU has LOONGARCH LSX features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3236).

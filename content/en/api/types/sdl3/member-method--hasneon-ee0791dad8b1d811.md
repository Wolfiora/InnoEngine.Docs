---
title: "SDL — Method: HasNeon"
description: "Exact Method: HasNeon contracts in SDL."
uid: api.inno.native.sdl3.ee0791dad8b1d811
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasNeon

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasNeon`

<a id="api-bfd5e56c6dcf676e"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasNeon e08fe766f66287729dd87cebb827e57d6aa7c5abad26b698aa631c7141fa6eb7 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasNeon()
```

Determine whether the CPU has NEON (ARM SIMD) features.
This always returns false on CPUs that aren't using ARM instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the CPU has ARM NEON features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L641).

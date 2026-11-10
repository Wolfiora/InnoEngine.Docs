---
title: "SDL — Method: HasAltiVec"
description: "Exact Method: HasAltiVec contracts in SDL."
uid: api.inno.native.sdl3.108a7534369c31c0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasAltiVec

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasAltiVec`

<a id="api-4852ca61fa1f317c"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasAltiVec b83b03a0bf0bd02a4170f9bf57442ed6ef6daa410a1b5a6da6d791d4112af6db -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasAltiVec()
```

Determine whether the CPU has AltiVec features.
This always returns false on CPUs that aren't using PowerPC instruction
sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the CPU has AltiVec features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L4315).

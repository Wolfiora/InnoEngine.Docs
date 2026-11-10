---
title: "SDL — Method: HasMmx"
description: "Exact Method: HasMmx contracts in SDL."
uid: api.inno.native.sdl3.eeb34547dad7da4e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasMmx

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasMmx`

<a id="api-7930d7b02a3f3e27"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasMmx d802f925ed407f822c701e395d30d2179683d98bfca75e087ca63a8d579cd6e6 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasMmx()
```

Determine whether the CPU has MMX features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the CPU has MMX features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L4339).

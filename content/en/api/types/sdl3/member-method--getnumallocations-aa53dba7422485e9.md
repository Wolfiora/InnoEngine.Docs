---
title: "SDL — Method: GetNumAllocations"
description: "Exact Method: GetNumAllocations contracts in SDL."
uid: api.inno.native.sdl3.aa53dba7422485e9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetNumAllocations

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumAllocations`

<a id="api-721c9c0d180b5bd4"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetNumAllocations 08c1cbcfe660eeb5ab0f0ff1da37cb35199b238fa9fae8dbe1cf557d43acbaa5 -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetNumAllocations()
```

Get the number of outstanding (unfreed) allocations.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the number of allocations or -1 if allocation counting is
disabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L858).

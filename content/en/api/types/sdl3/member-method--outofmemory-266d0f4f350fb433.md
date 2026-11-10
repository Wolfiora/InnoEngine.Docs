---
title: "SDL — Method: OutOfMemory"
description: "Exact Method: OutOfMemory contracts in SDL."
uid: api.inno.native.sdl3.266d0f4f350fb433
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: OutOfMemory

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OutOfMemory`

<a id="api-75d002bc156242aa"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.OutOfMemory 3c87ec3bcae5be86e5a4275e4dd630cc46fa4909c9a044391be35645c5d4b6b9 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.OutOfMemory()
```

Set an error indicating that memory allocation failed.
This function does not do any memory allocation.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3180).

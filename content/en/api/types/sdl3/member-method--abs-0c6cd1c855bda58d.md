---
title: "SDL — Method: Abs"
description: "Exact Method: Abs contracts in SDL."
uid: api.inno.native.sdl3.0c6cd1c855bda58d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Abs

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Abs`

<a id="api-f2027237ce086cbd"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Abs(System.Int32) f62194e1f9fbf74841c901fe4477527e7bd19268ad401763f5d5e8635d208d46 -->

```csharp
public static int Inno.Native.Sdl3.SDL.Abs(int x)
```

Compute the absolute value of `x`.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** an integer value.

**Returns:** the absolute value of x.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1084).

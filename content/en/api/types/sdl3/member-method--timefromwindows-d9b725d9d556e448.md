---
title: "SDL — Method: TimeFromWindows"
description: "Exact Method: TimeFromWindows contracts in SDL."
uid: api.inno.native.sdl3.d9b725d9d556e448
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: TimeFromWindows

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TimeFromWindows`

<a id="api-24651176033a059e"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.TimeFromWindows(System.UInt32,System.UInt32) 2cfb526413d53f7039f63b4bda32853e04e70342f8b9154d514f2c328b9024b0 -->

```csharp
public static long Inno.Native.Sdl3.SDL.TimeFromWindows(uint dwLowDateTime, uint dwHighDateTime)
```

Converts a Windows FILETIME (100-nanosecond intervals since January 1,
1601) to an SDL time.
This function takes the two 32-bit values of the FILETIME structure as
parameters.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dwLowDateTime`:** the low portion of the Windows FILETIME value.

**Parameter `dwHighDateTime`:** the high portion of the Windows FILETIME value.

**Returns:** the converted SDL time.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L812).

---
title: "SDL — Method: GpuSupportsProperties"
description: "Exact Method: GpuSupportsProperties contracts in SDL."
uid: api.inno.native.sdl3.cfbaa61b283579ac
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GpuSupportsProperties

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GpuSupportsProperties`

<a id="api-856c105491e7dcbf"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GpuSupportsProperties(System.UInt32) 5f46717a566ddbf77a25391c7bd203fefe688b96bfdc810e0ff767e61cd81c07 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.GpuSupportsProperties(uint props)
```

Checks for GPU runtime support.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUDeviceWithProperties

**Parameter `props`:** the properties to use.

**Returns:** true if supported, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3118).

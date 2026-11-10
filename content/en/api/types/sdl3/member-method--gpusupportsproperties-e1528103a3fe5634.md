---
title: "SDLContext — Method: GpuSupportsProperties"
description: "Exact Method: GpuSupportsProperties contracts in SDLContext."
uid: api.inno.native.sdl3.e1528103a3fe5634
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GpuSupportsProperties

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GpuSupportsProperties`

<a id="api-d2e71a5e4f1af829"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GpuSupportsProperties(System.UInt32) b0f48e8f5b685330d67bbb6c431347dc4e2ed4fa0d80f0d085ad1893342aee78 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.GpuSupportsProperties(uint props)
```

Checks for GPU runtime support.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUDeviceWithProperties

**Parameter `props`:** the properties to use.

**Returns:** true if supported, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15134).

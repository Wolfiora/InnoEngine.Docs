---
title: "SDLContext.RawApi — Method: GpuSupportsProperties"
description: "Exact Method: GpuSupportsProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.02c9a98316ead663
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GpuSupportsProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GpuSupportsProperties`

<a id="api-a85832ba871f683e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GpuSupportsProperties(System.UInt32) 89362cdd7546fbd068aa669823ed73f4664cc4919225212a5a7e080d48e93df8 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GpuSupportsProperties(uint props)
```

Checks for GPU runtime support.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUDeviceWithProperties

**Parameter `props`:** the properties to use.

**Returns:** true if supported, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42041).

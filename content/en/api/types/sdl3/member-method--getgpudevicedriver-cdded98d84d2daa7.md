---
title: "SDLContext.RawApi — Method: GetGpuDeviceDriver"
description: "Exact Method: GetGpuDeviceDriver contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.cdded98d84d2daa7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGpuDeviceDriver

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGpuDeviceDriver`

<a id="api-64cb13d7f265b9e6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGpuDeviceDriver(Inno.Native.Sdl3.SDLGPUDevice*) c71d37a2c7643237e0cd30d7150bfa4e0bb2ea6f4dcda4bc9bd126776424a3f2 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetGpuDeviceDriver(Inno.Native.Sdl3.SDLGPUDevice* device)
```

Returns the name of the backend used to create this GPU context.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `device`:** a GPU context to query.

**Returns:** the name of the device's driver, or NULL on error.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28654).

---
title: "SDLContext.RawApi — Method: GetGpuShaderFormats"
description: "Exact Method: GetGpuShaderFormats contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.945737428bdbe120
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGpuShaderFormats

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGpuShaderFormats`

<a id="api-41a2c8bf1371de13"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGpuShaderFormats(Inno.Native.Sdl3.SDLGPUDevice*) 65e3319d7f9940ce9cfccf8cf6441f08eb739c6fb9f16a0960d97e0f228e5aa4 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetGpuShaderFormats(Inno.Native.Sdl3.SDLGPUDevice* device)
```

Returns the supported shader formats for this GPU context.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `device`:** a GPU context to query.

**Returns:** a bitflag indicating which shader formats the driver is able to
consume.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18952).

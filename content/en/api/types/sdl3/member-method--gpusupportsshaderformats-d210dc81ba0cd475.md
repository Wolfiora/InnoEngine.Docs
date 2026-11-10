---
title: "SDLContext.RawApi — Method: GpuSupportsShaderFormats"
description: "Exact Method: GpuSupportsShaderFormats contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d210dc81ba0cd475
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GpuSupportsShaderFormats

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GpuSupportsShaderFormats`

<a id="api-59789982f5117a09"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GpuSupportsShaderFormats(System.UInt32,System.SByte*) 8760fb56365ff885f8773ca9ab86b38914d7be994741c40fe57bf70d8aeb644a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GpuSupportsShaderFormats(uint format_flags, sbyte* name)
```

Checks for GPU runtime support.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUDevice

**Parameter `format_flags`:** a bitflag indicating which shader formats the app is
able to provide.

**Parameter `name`:** the preferred GPU driver, or NULL to let SDL pick the optimal
driver.

**Returns:** true if supported, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46615).

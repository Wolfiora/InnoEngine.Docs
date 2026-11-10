---
title: "SDLContext.RawApi — Method: EndGpuCopyPass"
description: "Exact Method: EndGpuCopyPass contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5813cb47a43db801
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: EndGpuCopyPass

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EndGpuCopyPass`

<a id="api-9ee361f12752cf80"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.EndGpuCopyPass(Inno.Native.Sdl3.SDLGPUCopyPass*) 2401ec180c27f4cf647dcb19aefab6f390bf1cd45764be04cad52d1060b5ab73 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.EndGpuCopyPass(Inno.Native.Sdl3.SDLGPUCopyPass* copy_pass)
```

Ends the current copy pass.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `copy_pass`:** a copy pass handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18837).

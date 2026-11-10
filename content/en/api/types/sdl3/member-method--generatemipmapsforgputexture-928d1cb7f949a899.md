---
title: "SDLContext.RawApi — Method: GenerateMipmapsForGpuTexture"
description: "Exact Method: GenerateMipmapsForGpuTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.928d1cb7f949a899
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GenerateMipmapsForGpuTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GenerateMipmapsForGpuTexture`

<a id="api-1e8492b6ce067da6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GenerateMipmapsForGpuTexture(Inno.Native.Sdl3.SDLGPUCommandBuffer*,Inno.Native.Sdl3.SDLGPUTexture*) 46f160d1172d2ea95bf90c4ece3ac217093e3ddaca83ef15100bdf8a618e4869 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.GenerateMipmapsForGpuTexture(Inno.Native.Sdl3.SDLGPUCommandBuffer* command_buffer, Inno.Native.Sdl3.SDLGPUTexture* texture)
```

Generates mipmaps for the given texture.
This function must not be called inside of any pass.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `command_buffer`:** a command_buffer.

**Parameter `texture`:** a texture with more than 1 mip level.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26332).

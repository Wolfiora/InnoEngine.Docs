---
title: "SDLContext.RawApi — Method: SetGpuTextureName"
description: "Exact Method: SetGpuTextureName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.91181648420bae52
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGpuTextureName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGpuTextureName`

<a id="api-119225bc46587340"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGpuTextureName(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUTexture*,System.SByte*) d32e6385196c2fed4b826ab61e5265330ccf55a03c7a874defbace49af51dcf9 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetGpuTextureName(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUTexture* texture, sbyte* text)
```

Sets an arbitrary string constant to label a texture.
You should use SDL_PROP_GPU_TEXTURE_CREATE_NAME_STRING with
SDL_CreateGPUTexture instead of this function to avoid thread safety
issues.

**Thread safety:** This function is not thread safe, you must make sure the
texture is not simultaneously used by any other thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUTexture

**Parameter `device`:** a GPU Context.

**Parameter `texture`:** a texture to attach the name to.

**Parameter `text`:** a UTF-8 string constant to mark as the name of the texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22290).

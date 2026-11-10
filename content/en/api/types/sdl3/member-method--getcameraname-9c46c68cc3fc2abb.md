---
title: "SDLContext.RawApi — Method: GetCameraName"
description: "Exact Method: GetCameraName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9c46c68cc3fc2abb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCameraName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCameraName`

<a id="api-8e8a25bd9b8201cc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCameraName(System.UInt32) 0f6c947ad200094746e50e53a82bec1eb7cd798adf52b0ecff209985fa9cfed0 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetCameraName(uint instance_id)
```

Get the human-readable device name for a camera.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetCameras

**Parameter `instance_id`:** the camera device instance ID.

**Returns:** a human-readable device name or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40548).

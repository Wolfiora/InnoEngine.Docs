---
title: "SDLContext.RawApi — Method: GetCameraProperties"
description: "Exact Method: GetCameraProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.48cab00502fc1f79
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCameraProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCameraProperties`

<a id="api-d5643fb6b5e7a708"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCameraProperties(Inno.Native.Sdl3.SDLCamera*) 5b65b20c04daefd9a576c0bfc1d9c6389bd199c197dc9bd3c3e617095f18e1cd -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetCameraProperties(Inno.Native.Sdl3.SDLCamera* camera)
```

Get the properties associated with an opened camera.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `camera`:** the SDL_Camera obtained from SDL_OpenCamera().

**Returns:** a valid property ID on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28751).

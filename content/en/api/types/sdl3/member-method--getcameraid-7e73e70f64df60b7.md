---
title: "SDLContext.RawApi — Method: GetCameraId"
description: "Exact Method: GetCameraId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7e73e70f64df60b7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCameraId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCameraId`

<a id="api-05b6983dddde978f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCameraId(Inno.Native.Sdl3.SDLCamera*) 6568dde2f561f51ed2e1e9d67bb86982521df3e152380ec7c34fb6db733b65cc -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetCameraId(Inno.Native.Sdl3.SDLCamera* camera)
```

Get the instance ID of an opened camera.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenCamera

**Parameter `camera`:** an SDL_Camera to query.

**Returns:** the instance ID of the specified camera on success or 0 on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37405).

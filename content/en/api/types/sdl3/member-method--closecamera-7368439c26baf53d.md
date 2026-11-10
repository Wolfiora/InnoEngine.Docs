---
title: "SDLContext.RawApi — Method: CloseCamera"
description: "Exact Method: CloseCamera contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7368439c26baf53d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CloseCamera

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CloseCamera`

<a id="api-67672dda8d9059d7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CloseCamera(Inno.Native.Sdl3.SDLCamera*) 0237be35a3fc095df8d0825ccef4de01fd4ae01a1aac2fc1cc2dd67fa62c5656 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.CloseCamera(Inno.Native.Sdl3.SDLCamera* camera)
```

Use this function to shut down camera processing and close the camera
device.

**Thread safety:** It is safe to call this function from any thread, but no
thread may reference `device` once this function is called.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenCamera

**Parameter `camera`:** opened camera device.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46908).

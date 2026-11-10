---
title: "SDLContext.RawApi — Method: CloseSensor"
description: "Exact Method: CloseSensor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a3e05482624d9ae8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CloseSensor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CloseSensor`

<a id="api-583690578ab7230c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CloseSensor(Inno.Native.Sdl3.SDLSensor*) 87668afc5cd8def882d45cbbe4be9c0618307c2093071e6185c62b494dd48275 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.CloseSensor(Inno.Native.Sdl3.SDLSensor* sensor)
```

Close a sensor previously opened with SDL_OpenSensor().

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `sensor`:** the SDL_Sensor object to close.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23543).

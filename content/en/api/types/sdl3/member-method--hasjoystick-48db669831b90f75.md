---
title: "SDLContext.RawApi — Method: HasJoystick"
description: "Exact Method: HasJoystick contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.48db669831b90f75
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasJoystick

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasJoystick`

<a id="api-0a6ef121029d8911"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasJoystick 1f54f38ac2ebb4b104d248e29525b0f9120c9074cbdf5c418062e1f877ca5d69 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasJoystick()
```

Return whether a joystick is currently connected.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoysticks

**Returns:** true if a joystick is connected, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37812).

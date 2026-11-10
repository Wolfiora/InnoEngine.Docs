---
title: "SDLContext — Method: UpdateJoysticks"
description: "Exact Method: UpdateJoysticks contracts in SDLContext."
uid: api.inno.native.sdl3.7d93b47683cec40c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: UpdateJoysticks

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UpdateJoysticks`

<a id="api-71aee80d329bc325"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.UpdateJoysticks bf650ff656bc2d66e292308905c40ce6c1278b5f0eb3768b180821f6afc5be19 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.UpdateJoysticks()
```

Update the current state of the open joysticks.
This is called automatically by the event loop if any joystick events are
enabled and SDL_HINT_AUTO_UPDATE_JOYSTICKS hasn't been set to "0".

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16337).

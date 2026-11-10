---
title: "SDLContext — Method: HasJoystick"
description: "Exact Method: HasJoystick contracts in SDLContext."
uid: api.inno.native.sdl3.7a6e801e501db195
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasJoystick

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasJoystick`

<a id="api-26123cabe9f3f2b2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasJoystick 62463c5e574a92da913ca56257772cc2ea97cfeee932defbb3af267a959d824b -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasJoystick()
```

Return whether a joystick is currently connected.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoysticks

**Returns:** true if a joystick is connected, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14555).

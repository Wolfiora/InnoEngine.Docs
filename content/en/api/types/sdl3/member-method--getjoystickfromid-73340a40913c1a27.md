---
title: "SDLContext.RawApi — Method: GetJoystickFromId"
description: "Exact Method: GetJoystickFromId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.73340a40913c1a27
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickFromId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickFromId`

<a id="api-afee3b4bc0c74a94"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickFromId(System.UInt32) 9929d765430a53da0f3d5f3edf7534b60aaa882424be22ff539a8cd26335b257 -->

```csharp
public Inno.Native.Sdl3.SDLJoystick* Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickFromId(uint instance_id)
```

Get the SDL_Joystick associated with an instance ID, if it has been opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `instance_id`:** the instance ID to get the SDL_Joystick for.

**Returns:** an SDL_Joystick on success or NULL on failure or if it hasn't been
opened yet; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34961).

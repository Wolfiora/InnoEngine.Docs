---
title: "SDLContext.RawApi — Method: GetJoystickButton"
description: "Exact Method: GetJoystickButton contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bbfeb748cffd8c87
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickButton

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickButton`

<a id="api-ee95eb866bf8c4da"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickButton(Inno.Native.Sdl3.SDLJoystick*,System.Int32) 6fd91f0445b64ff6133359c7a77fd04025ec26815eb307fa5dddd727610cff91 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickButton(Inno.Native.Sdl3.SDLJoystick* joystick, int button)
```

Get the current state of a button on a joystick.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetNumJoystickButtons

**Parameter `joystick`:** an SDL_Joystick structure containing joystick information.

**Parameter `button`:** the button index to get the state from; indices start at
index 0.

**Returns:** true if the button is pressed, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18354).

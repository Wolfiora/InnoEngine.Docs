---
title: "SDLContext.RawApi — Method: AddGamepadMapping"
description: "Exact Method: AddGamepadMapping contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2adcf01ac7c7396f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AddGamepadMapping

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AddGamepadMapping`

<a id="api-eb3f3cf344229648"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AddGamepadMapping(System.SByte*) 6a531f4d62c6c5b53928ef7cc0fc329d7ce1042347b0377a5ac7f628b732a229 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.AddGamepadMapping(sbyte* mapping)
```

Add support for gamepads that SDL is unaware of or change the binding of an
existing gamepad.
The mapping string has the format "GUID,name,mapping", where GUID is the
string value from SDL_GUIDToString(), name is the human readable string for
the device and mappings are gamepad mappings to joystick ones. Under
Windows there is a reserved GUID of "xinput" that covers all XInput
devices. The mapping format for joystick is:
- `bX`: a joystick button, index X
- `hX.Y`: hat X with value Y
- `aX`: axis X of the joystick
Buttons can be used as a gamepad axes and vice versa.
If a device with this GUID is already plugged in, SDL will generate an
SDL_EVENT_GAMEPAD_ADDED event.
This string shows an example of a valid mapping for a gamepad:
```c
"341a3608000000000000504944564944,Afterglow PS3 Controller,a:b1,b:b2,y:b3,x:b0,start:b9,guide:b12,back:b8,dpup:h0.1,dpleft:h0.8,dpdown:h0.4,dpright:h0.2,leftshoulder:b4,rightshoulder:b5,leftstick:b10,rightstick:b11,leftx:a0,lefty:a1,rightx:a2,righty:a3,lefttrigger:b6,righttrigger:b7"
```

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AddGamepadMappingsFromFile

**See also:** SDL_AddGamepadMappingsFromIO

**See also:** SDL_GetGamepadMapping

**See also:** SDL_GetGamepadMappingForGUID

**See also:** SDL_HINT_GAMECONTROLLERCONFIG

**See also:** SDL_HINT_GAMECONTROLLERCONFIG_FILE

**See also:** SDL_EVENT_GAMEPAD_ADDED

**Parameter `mapping`:** the mapping string.

**Returns:** 1 if a new mapping is added, 0 if an existing mapping is updated,
-1 on failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16894).

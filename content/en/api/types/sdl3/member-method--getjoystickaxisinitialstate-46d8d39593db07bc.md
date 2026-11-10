---
title: "SDLContext.RawApi — Method: GetJoystickAxisInitialState"
description: "Exact Method: GetJoystickAxisInitialState contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.46d8d39593db07bc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickAxisInitialState

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickAxisInitialState`

<a id="api-954fbeda9f94e698"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickAxisInitialState(Inno.Native.Sdl3.SDLJoystick*,System.Int32,System.Int16*) affb65ae521cb22c7017d4895ee7acbf11cdbaff31cfc3c45f09edfbc07bc8c4 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickAxisInitialState(Inno.Native.Sdl3.SDLJoystick* joystick, int axis, short* state)
```

Get the initial state of an axis control on a joystick.
The state is a value ranging from -32768 to 32767.
The axis indices start at index 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `joystick`:** an SDL_Joystick structure containing joystick information.

**Parameter `axis`:** the axis to query; the axis indices start at index 0.

**Parameter `state`:** upon return, the initial value is supplied here.

**Returns:** true if this axis has any initial value, or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26006).

---
title: "SDLContext.RawApi — Method: GamepadHasAxis"
description: "Exact Method: GamepadHasAxis contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b9c4292529264a93
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GamepadHasAxis

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GamepadHasAxis`

<a id="api-ddbcf48eb06b5a31"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GamepadHasAxis(Inno.Native.Sdl3.SDLGamepad*,Inno.Native.Sdl3.SDLGamepadAxis) 354f2445f2fbd584301c63b273983e3e55e854ed2faa101b04fa18e7d34f0c09 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GamepadHasAxis(Inno.Native.Sdl3.SDLGamepad* gamepad, Inno.Native.Sdl3.SDLGamepadAxis axis)
```

Query whether a gamepad has a given axis.
This merely reports whether the gamepad's mapping defined this axis, as
that is all the information SDL has about the physical device.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GamepadHasButton

**See also:** SDL_GetGamepadAxis

**Parameter `gamepad`:** a gamepad.

**Parameter `axis`:** an axis enum value (an SDL_GamepadAxis value).

**Returns:** true if the gamepad has this axis, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52666).

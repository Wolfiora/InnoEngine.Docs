---
title: "SDLContext.RawApi — Method: GamepadHasButton"
description: "Exact Method: GamepadHasButton contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6f2382b0c1976d9f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GamepadHasButton

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GamepadHasButton`

<a id="api-aca8c7515b8cd967"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GamepadHasButton(Inno.Native.Sdl3.SDLGamepad*,Inno.Native.Sdl3.SDLGamepadButton) c4aefa8d59eb273238574ee820b27e0a4f9bd8708014cee3b5e5cbc99e47136a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GamepadHasButton(Inno.Native.Sdl3.SDLGamepad* gamepad, Inno.Native.Sdl3.SDLGamepadButton button)
```

Query whether a gamepad has a given button.
This merely reports whether the gamepad's mapping defined this button, as
that is all the information SDL has about the physical device.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GamepadHasAxis

**Parameter `gamepad`:** a gamepad.

**Parameter `button`:** a button enum value (an SDL_GamepadButton value).

**Returns:** true if the gamepad has this button, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31412).

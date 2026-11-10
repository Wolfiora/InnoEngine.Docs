---
title: "SDL — Method: GetGamepadButtonLabelForType"
description: "Exact Method: GetGamepadButtonLabelForType contracts in SDL."
uid: api.inno.native.sdl3.42211375089036de
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetGamepadButtonLabelForType

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadButtonLabelForType`

<a id="api-8d82cfa52da6392d"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetGamepadButtonLabelForType(Inno.Native.Sdl3.SDLGamepadType,Inno.Native.Sdl3.SDLGamepadButton) d8c388c183444b685188f5e519f5969b3ca71cb26c4e9f3b75b0712c18f0261a -->

```csharp
public static Inno.Native.Sdl3.SDLGamepadButtonLabel Inno.Native.Sdl3.SDL.GetGamepadButtonLabelForType(Inno.Native.Sdl3.SDLGamepadType type, Inno.Native.Sdl3.SDLGamepadButton button)
```

Get the label of a button on a gamepad.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadButtonLabel

**Parameter `type`:** the type of gamepad to check.

**Parameter `button`:** a button index (one of the SDL_GamepadButton values).

**Returns:** the SDL_GamepadButtonLabel enum corresponding to the button label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1915).

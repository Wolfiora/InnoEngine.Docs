---
title: "SDLContext.RawApi — Method: GetGamepadButtonLabel"
description: "Exact Method: GetGamepadButtonLabel contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e297e8c9ff1bfdd1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadButtonLabel

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadButtonLabel`

<a id="api-0e47bd0e6e48ed48"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadButtonLabel(Inno.Native.Sdl3.SDLGamepad*,Inno.Native.Sdl3.SDLGamepadButton) 817e72d5962a9e425d5652bf113ca8a67285bd11b589bad65ff0f9bfc87e2fa5 -->

```csharp
public Inno.Native.Sdl3.SDLGamepadButtonLabel Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadButtonLabel(Inno.Native.Sdl3.SDLGamepad* gamepad, Inno.Native.Sdl3.SDLGamepadButton button)
```

Get the label of a button on a gamepad.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadButtonLabelForType

**Parameter `gamepad`:** a gamepad.

**Parameter `button`:** a button index (one of the SDL_GamepadButton values).

**Returns:** the SDL_GamepadButtonLabel enum corresponding to the button label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24529).

---
title: "SDLContext.RawApi — Method: GetGamepadButtonLabelForType"
description: "Exact Method: GetGamepadButtonLabelForType contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.cbff1390cac9c2ad
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadButtonLabelForType

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadButtonLabelForType`

<a id="api-f3e259960ecf9e43"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadButtonLabelForType(Inno.Native.Sdl3.SDLGamepadType,Inno.Native.Sdl3.SDLGamepadButton) c5786bb2dc2dad317a01e11af895674ae958f8519cc18731121f030cc68d3152 -->

```csharp
public Inno.Native.Sdl3.SDLGamepadButtonLabel Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadButtonLabelForType(Inno.Native.Sdl3.SDLGamepadType type, Inno.Native.Sdl3.SDLGamepadButton button)
```

Get the label of a button on a gamepad.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadButtonLabel

**Parameter `type`:** the type of gamepad to check.

**Parameter `button`:** a button index (one of the SDL_GamepadButton values).

**Returns:** the SDL_GamepadButtonLabel enum corresponding to the button label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32559).

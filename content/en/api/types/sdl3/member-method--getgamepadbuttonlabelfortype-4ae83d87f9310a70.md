---
title: "SDLContext — Method: GetGamepadButtonLabelForType"
description: "Exact Method: GetGamepadButtonLabelForType contracts in SDLContext."
uid: api.inno.native.sdl3.4ae83d87f9310a70
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetGamepadButtonLabelForType

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadButtonLabelForType`

<a id="api-6df8d7c593617aa4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetGamepadButtonLabelForType(Inno.Native.Sdl3.SDLGamepadType,Inno.Native.Sdl3.SDLGamepadButton) 4c438888adea2f1ef18d5e7ee5f78e50d53d7c16493cf69fe122bbccc26322e4 -->

```csharp
public Inno.Native.Sdl3.SDLGamepadButtonLabel Inno.Native.Sdl3.SDLContext.GetGamepadButtonLabelForType(Inno.Native.Sdl3.SDLGamepadType type, Inno.Native.Sdl3.SDLGamepadButton button)
```

Get the label of a button on a gamepad.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadButtonLabel

**Parameter `type`:** the type of gamepad to check.

**Parameter `button`:** a button index (one of the SDL_GamepadButton values).

**Returns:** the SDL_GamepadButtonLabel enum corresponding to the button label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13681).

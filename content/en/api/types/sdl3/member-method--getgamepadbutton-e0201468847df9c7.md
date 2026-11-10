---
title: "SDLContext.RawApi — Method: GetGamepadButton"
description: "Exact Method: GetGamepadButton contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e0201468847df9c7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadButton

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadButton`

<a id="api-37164e1f361d189d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadButton(Inno.Native.Sdl3.SDLGamepad*,Inno.Native.Sdl3.SDLGamepadButton) a0905d009c655aa23b95cb86fcf170e4a1a421e65287e29a9b971cabcb56d22f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadButton(Inno.Native.Sdl3.SDLGamepad* gamepad, Inno.Native.Sdl3.SDLGamepadButton button)
```

Get the current state of a button on a gamepad.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GamepadHasButton

**See also:** SDL_GetGamepadAxis

**Parameter `gamepad`:** a gamepad.

**Parameter `button`:** a button index (one of the SDL_GamepadButton values).

**Returns:** true if the button is pressed, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40474).

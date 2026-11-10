---
title: "SDLContext — Method: GetJoystickTypeForId"
description: "Exact Method: GetJoystickTypeForId contracts in SDLContext."
uid: api.inno.native.sdl3.a3b5541677bc6e7a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetJoystickTypeForId

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickTypeForId`

<a id="api-c29fb62830b68a8a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetJoystickTypeForId(System.UInt32) 7d2941fd67fb217cc3247e5c069686a136ad384d0ca4e0e81a6b468a65ed2de4 -->

```csharp
public Inno.Native.Sdl3.SDLJoystickType Inno.Native.Sdl3.SDLContext.GetJoystickTypeForId(uint instance_id)
```

Get the type of a joystick, if available.
This can be called before any joysticks are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickType

**See also:** SDL_GetJoysticks

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the SDL_JoystickType of the selected joystick. If called with an
invalid instance_id, this function returns
`SDL_JOYSTICK_TYPE_UNKNOWN`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15566).

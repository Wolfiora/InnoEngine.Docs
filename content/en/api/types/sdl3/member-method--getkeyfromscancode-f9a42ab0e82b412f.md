---
title: "SDL — Method: GetKeyFromScancode"
description: "Exact Method: GetKeyFromScancode contracts in SDL."
uid: api.inno.native.sdl3.f9a42ab0e82b412f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetKeyFromScancode

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetKeyFromScancode`

<a id="api-36ed10c8aeed7c36"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetKeyFromScancode(Inno.Native.Sdl3.SDLScancode,Inno.Native.Sdl3.SDLKeymod,System.Boolean) 1a223cec4f073c133e7bee91ebd441d47f619fa0a57261739e611da97358805c -->

```csharp
public static uint Inno.Native.Sdl3.SDL.GetKeyFromScancode(Inno.Native.Sdl3.SDLScancode scancode, Inno.Native.Sdl3.SDLKeymod modstate, bool key_event)
```

Get the key code corresponding to the given scancode according to the
current keyboard layout.
If you want to get the keycode as it would be delivered in key events,
including options specified in SDL_HINT_KEYCODE_OPTIONS, then you should
pass `key_event` as true. Otherwise this function simply translates the
scancode based on the given modifier state.

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetKeyName

**See also:** SDL_GetScancodeFromKey

**Parameter `scancode`:** the desired SDL_Scancode to query.

**Parameter `modstate`:** the modifier state to use when translating the scancode to
a keycode.

**Parameter `key_event`:** true if the keycode will be used in key events.

**Returns:** the SDL_Keycode that corresponds to the given SDL_Scancode.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L884).

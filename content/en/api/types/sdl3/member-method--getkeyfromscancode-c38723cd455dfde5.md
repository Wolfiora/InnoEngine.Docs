---
title: "SDLContext — Method: GetKeyFromScancode"
description: "Exact Method: GetKeyFromScancode contracts in SDLContext."
uid: api.inno.native.sdl3.c38723cd455dfde5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetKeyFromScancode

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetKeyFromScancode`

<a id="api-7d1092cfab0d5a6a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetKeyFromScancode(Inno.Native.Sdl3.SDLScancode,Inno.Native.Sdl3.SDLKeymod,System.Boolean) d1489788b28efb57374f741c8817bcef301eed5983e1100e0e79c4c4a2015baf -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.GetKeyFromScancode(Inno.Native.Sdl3.SDLScancode scancode, Inno.Native.Sdl3.SDLKeymod modstate, bool key_event)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12425).

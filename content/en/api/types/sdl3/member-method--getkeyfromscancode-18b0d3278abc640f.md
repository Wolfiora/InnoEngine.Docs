---
title: "SDLContext.RawApi — Method: GetKeyFromScancode"
description: "Exact Method: GetKeyFromScancode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.18b0d3278abc640f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetKeyFromScancode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetKeyFromScancode`

<a id="api-cee17387f1b9d0fe"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetKeyFromScancode(Inno.Native.Sdl3.SDLScancode,System.UInt16,System.Byte) 1cc29e01ae565b558b9cdf284cdd797733774f39dda67c756302872ac0f936c2 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetKeyFromScancode(Inno.Native.Sdl3.SDLScancode scancode, ushort modstate, byte key_event)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23189).

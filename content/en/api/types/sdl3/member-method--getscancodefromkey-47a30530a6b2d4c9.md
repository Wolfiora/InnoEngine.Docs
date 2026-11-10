---
title: "SDLContext.RawApi — Method: GetScancodeFromKey"
description: "Exact Method: GetScancodeFromKey contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.47a30530a6b2d4c9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetScancodeFromKey

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetScancodeFromKey`

<a id="api-07047a2ffd2d6461"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetScancodeFromKey(System.UInt32,System.UInt16*) 3951644420c16ecdc566d7f396a526edf51e0588ba7adfccf19e346778e8eab5 -->

```csharp
public Inno.Native.Sdl3.SDLScancode Inno.Native.Sdl3.SDLContext.RawApi.GetScancodeFromKey(uint key, ushort* modstate)
```

Get the scancode corresponding to the given key code according to the
current keyboard layout.
Note that there may be multiple scancode+modifier states that can generate
this keycode, this will just return the first one found.

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetKeyFromScancode

**See also:** SDL_GetScancodeName

**Parameter `key`:** the desired SDL_Keycode to query.

**Parameter `modstate`:** a pointer to the modifier state that would be used when the
scancode generates this key, may be NULL.

**Returns:** the SDL_Scancode that corresponds to the given SDL_Keycode.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51582).

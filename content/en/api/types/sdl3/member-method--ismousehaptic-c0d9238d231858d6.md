---
title: "SDLContext — Method: IsMouseHaptic"
description: "Exact Method: IsMouseHaptic contracts in SDLContext."
uid: api.inno.native.sdl3.c0d9238d231858d6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: IsMouseHaptic

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsMouseHaptic`

<a id="api-af099ffe509ee124"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.IsMouseHaptic f8acfe8b032057c0aaf9d63005f94b7fd83c732fd5b4c79fcf23c8d795f36747 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.IsMouseHaptic()
```

Query whether or not the current mouse has haptic capabilities.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenHapticFromMouse

**Returns:** true if the mouse is haptic or false if it isn't.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12381).

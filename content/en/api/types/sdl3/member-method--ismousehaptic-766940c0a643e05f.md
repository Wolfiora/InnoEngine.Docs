---
title: "SDLContext.RawApi — Method: IsMouseHaptic"
description: "Exact Method: IsMouseHaptic contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.766940c0a643e05f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: IsMouseHaptic

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsMouseHaptic`

<a id="api-44acf00ce6bbe96f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.IsMouseHaptic 2acbde3f30cb4f901a6ac630f1f82862042c25f91afdd76886d212218a72294b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.IsMouseHaptic()
```

Query whether or not the current mouse has haptic capabilities.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenHapticFromMouse

**Returns:** true if the mouse is haptic or false if it isn't.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23001).

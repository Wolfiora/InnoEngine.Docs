---
title: "SDLContext.RawApi — Method: OpenHapticFromMouse"
description: "Exact Method: OpenHapticFromMouse contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.224ddccb892d0fe0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OpenHapticFromMouse

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OpenHapticFromMouse`

<a id="api-1b97ae2fc3098dea"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OpenHapticFromMouse 1702fc3bfc8ab64125d577728cae02ae022a917dd60529b7047c3620e321e3ff -->

```csharp
public Inno.Native.Sdl3.SDLHaptic* Inno.Native.Sdl3.SDLContext.RawApi.OpenHapticFromMouse()
```

Try to open a haptic device from the current mouse.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CloseHaptic

**See also:** SDL_IsMouseHaptic

**Returns:** the haptic device identifier or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24165).

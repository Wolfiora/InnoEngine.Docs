---
title: "SDLContext.RawApi — Method: GetNaturalDisplayOrientation"
description: "Exact Method: GetNaturalDisplayOrientation contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.469b4cb925f332a2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetNaturalDisplayOrientation

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNaturalDisplayOrientation`

<a id="api-a3a031aa2790e812"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetNaturalDisplayOrientation(System.UInt32) fffe5fdfc9448abae9508128325c5b77c81635f771af6d5531428913d42f6f32 -->

```csharp
public Inno.Native.Sdl3.SDLDisplayOrientation Inno.Native.Sdl3.SDLContext.RawApi.GetNaturalDisplayOrientation(uint displayID)
```

Get the orientation of a display when it is unrotated.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDisplays

**Parameter `displayID`:** the instance ID of the display to query.

**Returns:** the SDL_DisplayOrientation enum value of the display, or
`SDL_ORIENTATION_UNKNOWN` if it isn't available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36304).

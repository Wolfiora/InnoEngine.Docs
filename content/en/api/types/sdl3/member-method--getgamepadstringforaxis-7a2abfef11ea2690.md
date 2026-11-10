---
title: "SDLContext.RawApi — Method: GetGamepadStringForAxis"
description: "Exact Method: GetGamepadStringForAxis contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7a2abfef11ea2690
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadStringForAxis

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadStringForAxis`

<a id="api-cdc4c044bfa60360"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadStringForAxis(Inno.Native.Sdl3.SDLGamepadAxis) 0138a758d569d8528f140b55e7fd5b860ce3f8733b7388dc5d48c9b1705b8918 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadStringForAxis(Inno.Native.Sdl3.SDLGamepadAxis axis)
```

Convert from an SDL_GamepadAxis enum to a string.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadAxisFromString

**Parameter `axis`:** an enum value for a given SDL_GamepadAxis.

**Returns:** a string for the given axis, or NULL if an invalid axis is
specified. The string returned is of the format used by
SDL_Gamepad mapping strings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35932).

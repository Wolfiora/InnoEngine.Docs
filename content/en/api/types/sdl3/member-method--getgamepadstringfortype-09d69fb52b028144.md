---
title: "SDLContext.RawApi — Method: GetGamepadStringForType"
description: "Exact Method: GetGamepadStringForType contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.09d69fb52b028144
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadStringForType

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadStringForType`

<a id="api-ad2fa4c8da93eb2b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadStringForType(Inno.Native.Sdl3.SDLGamepadType) 7cb58c61bbe0d4d51ba597112eee77256d939b0ee23c81e22cb46b18d2c50590 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadStringForType(Inno.Native.Sdl3.SDLGamepadType type)
```

Convert from an SDL_GamepadType enum to a string.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadTypeFromString

**Parameter `type`:** an enum value for a given SDL_GamepadType.

**Returns:** a string for the given type, or NULL if an invalid type is
specified. The string returned is of the format used by
SDL_Gamepad mapping strings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44391).

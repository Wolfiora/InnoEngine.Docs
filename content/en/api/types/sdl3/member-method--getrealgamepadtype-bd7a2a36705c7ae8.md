---
title: "SDLContext.RawApi — Method: GetRealGamepadType"
description: "Exact Method: GetRealGamepadType contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bd7a2a36705c7ae8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRealGamepadType

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRealGamepadType`

<a id="api-eff6406513c8dc5c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRealGamepadType(Inno.Native.Sdl3.SDLGamepad*) a003efefa1e4dbb83c1dd563010ae35392faab89979ad8ceee3cf3bb21801812 -->

```csharp
public Inno.Native.Sdl3.SDLGamepadType Inno.Native.Sdl3.SDLContext.RawApi.GetRealGamepadType(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Get the type of an opened gamepad, ignoring any mapping override.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRealGamepadTypeForID

**Parameter `gamepad`:** the gamepad object to query.

**Returns:** the gamepad type, or SDL_GAMEPAD_TYPE_UNKNOWN if it's not
available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38649).

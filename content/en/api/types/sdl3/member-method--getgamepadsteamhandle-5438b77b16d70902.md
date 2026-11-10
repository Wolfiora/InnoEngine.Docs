---
title: "SDLContext.RawApi — Method: GetGamepadSteamHandle"
description: "Exact Method: GetGamepadSteamHandle contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5438b77b16d70902
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadSteamHandle

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadSteamHandle`

<a id="api-80edf2183df26fa4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadSteamHandle(Inno.Native.Sdl3.SDLGamepad*) fdd253971c755e01a4c37160fcc6d63d4d63ed7e7a330a7285af623e3d046ee9 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadSteamHandle(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Get the Steam Input handle of an opened gamepad, if available.
Returns an InputHandle_t for the gamepad that can be used with Steam Input
API: https://partner.steamgames.com/doc/api/ISteamInput

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `gamepad`:** the gamepad object to query.

**Returns:** the gamepad handle, or 0 if unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48956).

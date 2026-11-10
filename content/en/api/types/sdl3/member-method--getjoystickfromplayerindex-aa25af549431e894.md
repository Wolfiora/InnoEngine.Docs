---
title: "SDLContext.RawApi — Method: GetJoystickFromPlayerIndex"
description: "Exact Method: GetJoystickFromPlayerIndex contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.aa25af549431e894
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickFromPlayerIndex

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickFromPlayerIndex`

<a id="api-21ad24e570dcb2f7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickFromPlayerIndex(System.Int32) fa1b4de23c3fef78ccacb6f7710565dae022326e70ea524ff9ff1727b8a5e8f1 -->

```csharp
public Inno.Native.Sdl3.SDLJoystick* Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickFromPlayerIndex(int player_index)
```

Get the SDL_Joystick associated with a player index.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickPlayerIndex

**See also:** SDL_SetJoystickPlayerIndex

**Parameter `player_index`:** the player index to get the SDL_Joystick for.

**Returns:** an SDL_Joystick on success or NULL on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28589).

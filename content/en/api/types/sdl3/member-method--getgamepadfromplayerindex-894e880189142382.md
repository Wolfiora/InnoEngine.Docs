---
title: "SDLContext.RawApi — Method: GetGamepadFromPlayerIndex"
description: "Exact Method: GetGamepadFromPlayerIndex contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.894e880189142382
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadFromPlayerIndex

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadFromPlayerIndex`

<a id="api-3448d06a62c4c577"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadFromPlayerIndex(System.Int32) ae265a0a6e79d3f71455720c19376919007dea921912338a78ddff4334ff13c8 -->

```csharp
public Inno.Native.Sdl3.SDLGamepad* Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadFromPlayerIndex(int player_index)
```

Get the SDL_Gamepad associated with a player index.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadPlayerIndex

**See also:** SDL_SetGamepadPlayerIndex

**Parameter `player_index`:** the player index, which different from the instance ID.

**Returns:** the SDL_Gamepad associated with a player index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30079).

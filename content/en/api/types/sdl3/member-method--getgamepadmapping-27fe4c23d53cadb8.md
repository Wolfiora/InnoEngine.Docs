---
title: "SDLContext.RawApi — Method: GetGamepadMapping"
description: "Exact Method: GetGamepadMapping contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.27fe4c23d53cadb8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadMapping

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadMapping`

<a id="api-feae261bf2e2ac83"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadMapping(Inno.Native.Sdl3.SDLGamepad*) c545d38361d834a9c5956369bac24cd302fe1b47cf50860c8055bdd97960b9f6 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadMapping(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Get the current mapping of a gamepad.
Details about mappings are discussed with SDL_AddGamepadMapping().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AddGamepadMapping

**See also:** SDL_GetGamepadMappingForID

**See also:** SDL_GetGamepadMappingForGUID

**See also:** SDL_SetGamepadMapping

**Parameter `gamepad`:** the gamepad you want to get the current mapping for.

**Returns:** a string that has the gamepad's mapping or NULL if no mapping is
available; call SDL_GetError() for more information. This should
be freed with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34258).

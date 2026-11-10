---
title: "SDLContext.RawApi — Method: GetGamepadAppleSfSymbolsNameForButton"
description: "Exact Method: GetGamepadAppleSfSymbolsNameForButton contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.190d72efa6c09b12
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadAppleSfSymbolsNameForButton

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadAppleSfSymbolsNameForButton`

<a id="api-39b7efa4baa37e5f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadAppleSfSymbolsNameForButton(Inno.Native.Sdl3.SDLGamepad*,Inno.Native.Sdl3.SDLGamepadButton) 8fd5afe65948b6585fad87df7fe8e68d236ef1125376ae0f8530f011155c694c -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadAppleSfSymbolsNameForButton(Inno.Native.Sdl3.SDLGamepad* gamepad, Inno.Native.Sdl3.SDLGamepadButton button)
```

Return the sfSymbolsName for a given button on a gamepad on Apple
platforms.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadAppleSFSymbolsNameForAxis

**Parameter `gamepad`:** the gamepad to query.

**Parameter `button`:** a button on the gamepad.

**Returns:** the sfSymbolsName or NULL if the name can't be found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21578).

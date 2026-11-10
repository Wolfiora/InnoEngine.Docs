---
title: "SDLContext.RawApi — Method: GetGamepadType"
description: "Exact Method: GetGamepadType contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.19599f18acef946b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadType

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadType`

<a id="api-e0aa6bd5f60696c6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadType(Inno.Native.Sdl3.SDLGamepad*) b137e5143cd8440111cf0ef97efa9ca8ebfd2b4dfed211b96ed72867add2e820 -->

```csharp
public Inno.Native.Sdl3.SDLGamepadType Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadType(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Get the type of an opened gamepad.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadTypeForID

**Parameter `gamepad`:** the gamepad object to query.

**Returns:** the gamepad type, or SDL_GAMEPAD_TYPE_UNKNOWN if it's not
available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21429).

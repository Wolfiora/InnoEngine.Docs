---
title: "SDLContext.RawApi — Method: GetNumGamepadTouchpads"
description: "Exact Method: GetNumGamepadTouchpads contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.076ada4947a9d424
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetNumGamepadTouchpads

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumGamepadTouchpads`

<a id="api-2a16e6be1b7a9b9f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetNumGamepadTouchpads(Inno.Native.Sdl3.SDLGamepad*) 82455ebb524feb572caec14b49bfffaf5f3e34b532b227aef0cfa6d6d2c1efe2 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetNumGamepadTouchpads(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Get the number of touchpads on a gamepad.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetNumGamepadTouchpadFingers

**Parameter `gamepad`:** a gamepad.

**Returns:** number of touchpads.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51680).

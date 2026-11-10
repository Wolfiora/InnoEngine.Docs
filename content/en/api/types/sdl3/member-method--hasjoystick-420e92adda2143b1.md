---
title: "SDL — Method: HasJoystick"
description: "Exact Method: HasJoystick contracts in SDL."
uid: api.inno.native.sdl3.420e92adda2143b1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasJoystick

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasJoystick`

<a id="api-30f675af55331bf6"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasJoystick a124f5582670489c9670fc0d968058e13654059e8113d369b0488301b10aaa84 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasJoystick()
```

Return whether a joystick is currently connected.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoysticks

**Returns:** true if a joystick is connected, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2639).

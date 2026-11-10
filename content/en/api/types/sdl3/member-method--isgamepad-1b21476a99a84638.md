---
title: "SDL — Method: IsGamepad"
description: "Exact Method: IsGamepad contracts in SDL."
uid: api.inno.native.sdl3.1b21476a99a84638
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: IsGamepad

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsGamepad`

<a id="api-7c2f23659c00a42d"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.IsGamepad(System.UInt32) 73584fd5fbdcabe447e00d655aa33eae1655f502002014c9461c364ce2f1cfc1 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.IsGamepad(uint instance_id)
```

Check if the given joystick is supported by the gamepad interface.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoysticks

**See also:** SDL_OpenGamepad

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** true if the given joystick is supported by the gamepad interface,
false if it isn't or it's an invalid index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2703).

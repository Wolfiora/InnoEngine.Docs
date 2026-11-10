---
title: "SDL — Method: WarpMouseGlobal"
description: "Exact Method: WarpMouseGlobal contracts in SDL."
uid: api.inno.native.sdl3.5a2c4793ac4b2859
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: WarpMouseGlobal

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WarpMouseGlobal`

<a id="api-1cc490f187df6693"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.WarpMouseGlobal(System.Single,System.Single) 359d83a604921a6fb579b8a539cc07d455351be0ddacb0a64f7c41246d9410e9 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.WarpMouseGlobal(float x, float y)
```

Move the mouse to the given position in global screen space.
This function generates a mouse motion event.
A failure of this function usually means that it is unsupported by a
platform.
Note that this function will appear to succeed, but not actually move the
mouse when used over Microsoft Remote Desktop.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_WarpMouseInWindow

**Parameter `x`:** the x coordinate.

**Parameter `y`:** the y coordinate.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L577).

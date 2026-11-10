---
title: "SDL — Method: ShowCursor"
description: "Exact Method: ShowCursor contracts in SDL."
uid: api.inno.native.sdl3.b082f86d6d8dd444
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: ShowCursor

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ShowCursor`

<a id="api-fd2126d0ecd99501"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.ShowCursor c9db4214e418488c5e7dcb9e12eaaa827b45e3de2f64b739ed2920da802fc02b -->

```csharp
public static bool Inno.Native.Sdl3.SDL.ShowCursor()
```

Show the cursor.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CursorVisible

**See also:** SDL_HideCursor

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1136).

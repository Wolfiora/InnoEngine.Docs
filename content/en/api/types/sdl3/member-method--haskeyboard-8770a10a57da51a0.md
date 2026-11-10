---
title: "SDL — Method: HasKeyboard"
description: "Exact Method: HasKeyboard contracts in SDL."
uid: api.inno.native.sdl3.8770a10a57da51a0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasKeyboard

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasKeyboard`

<a id="api-247636534ce6a9ca"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasKeyboard c89ea255de21f4fb1ac55e598bffa65a75db9790419380d0b4ed12398a70d602 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasKeyboard()
```

Return whether a keyboard is currently connected.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetKeyboards

**Returns:** true if a keyboard is connected, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1478).

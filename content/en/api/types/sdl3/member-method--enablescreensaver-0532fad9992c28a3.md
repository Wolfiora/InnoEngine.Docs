---
title: "SDL — Method: EnableScreenSaver"
description: "Exact Method: EnableScreenSaver contracts in SDL."
uid: api.inno.native.sdl3.0532fad9992c28a3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: EnableScreenSaver

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EnableScreenSaver`

<a id="api-ee517fb349f56239"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.EnableScreenSaver ec478ffd72f73568eb06c51bb3d4210dbc27676a539a83169db6cdbedcae5153 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.EnableScreenSaver()
```

Allow the screen to be blanked by a screen saver.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DisableScreenSaver

**See also:** SDL_ScreenSaverEnabled

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3746).

---
title: "SDLContext — Method: HasGamepad"
description: "Exact Method: HasGamepad contracts in SDLContext."
uid: api.inno.native.sdl3.dfe59346da10fe02
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasGamepad

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasGamepad`

<a id="api-b94bacfb2f5cfc21"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasGamepad a47ca9671c243ea25aec1d441f177cce5676fd6476d48ca5d058110e41ccc9e7 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasGamepad()
```

Return whether a gamepad is currently connected.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepads

**Returns:** true if a gamepad is connected, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13390).

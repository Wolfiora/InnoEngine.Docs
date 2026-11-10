---
title: "SDLContext.RawApi — Method: CursorVisible"
description: "Exact Method: CursorVisible contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0db22338e8a18469
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CursorVisible

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CursorVisible`

<a id="api-1fd0e70d1953c26d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CursorVisible 503e91207efb64a19691d71add3d8922abb0b6b1f1ef01a23df555c9981e56b0 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.CursorVisible()
```

Return whether the cursor is currently being shown.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HideCursor

**See also:** SDL_ShowCursor

**Returns:** `true` if the cursor is being shown, or `false` if the cursor is
hidden.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31178).

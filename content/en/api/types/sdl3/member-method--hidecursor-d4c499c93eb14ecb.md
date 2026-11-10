---
title: "SDLContext.RawApi — Method: HideCursor"
description: "Exact Method: HideCursor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d4c499c93eb14ecb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HideCursor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HideCursor`

<a id="api-86e0225f13c1743e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HideCursor a63f1892fac5ed19f94c65f31462ad86b3fb1c0ba10714a634acda7118162ff1 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HideCursor()
```

Hide the cursor.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CursorVisible

**See also:** SDL_ShowCursor

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34063).

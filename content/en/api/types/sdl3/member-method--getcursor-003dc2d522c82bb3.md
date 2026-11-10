---
title: "SDLContext.RawApi — Method: GetCursor"
description: "Exact Method: GetCursor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.003dc2d522c82bb3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCursor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCursor`

<a id="api-11dfe261fbb2f777"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCursor b959f43713d21e36475c6ed3c23bb08417575e5b8b5f31a46273120cb9af10a0 -->

```csharp
public Inno.Native.Sdl3.SDLCursor* Inno.Native.Sdl3.SDLContext.RawApi.GetCursor()
```

Get the active cursor.
This function returns a pointer to the current cursor which is owned by the
library. It is not necessary to free the cursor with SDL_DestroyCursor().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetCursor

**Returns:** the active cursor or NULL if there is no mouse.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28264).

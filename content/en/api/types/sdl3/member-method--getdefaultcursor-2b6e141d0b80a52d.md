---
title: "SDLContext.RawApi — Method: GetDefaultCursor"
description: "Exact Method: GetDefaultCursor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2b6e141d0b80a52d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetDefaultCursor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDefaultCursor`

<a id="api-03b58b4a04c689a2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetDefaultCursor bea228438c2cf11230aa5efc7354833e882138357e132bcac23dd88bcc7e963a -->

```csharp
public Inno.Native.Sdl3.SDLCursor* Inno.Native.Sdl3.SDLContext.RawApi.GetDefaultCursor()
```

Get the default cursor.
You do not have to call SDL_DestroyCursor() on the return value, but it is
safe to do so.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the default cursor on success or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36985).

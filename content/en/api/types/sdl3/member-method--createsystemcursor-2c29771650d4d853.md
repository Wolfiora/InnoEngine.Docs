---
title: "SDLContext.RawApi — Method: CreateSystemCursor"
description: "Exact Method: CreateSystemCursor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2c29771650d4d853
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateSystemCursor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateSystemCursor`

<a id="api-0319507c4bb68fab"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateSystemCursor(Inno.Native.Sdl3.SDLSystemCursor) 0820adade66f37f4d65da2ecd184c3d10d147fe153241c743fcb4bb079385c69 -->

```csharp
public Inno.Native.Sdl3.SDLCursor* Inno.Native.Sdl3.SDLContext.RawApi.CreateSystemCursor(Inno.Native.Sdl3.SDLSystemCursor id)
```

Create a system cursor.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DestroyCursor

**Parameter `id`:** an SDL_SystemCursor enum value.

**Returns:** a cursor on success or NULL on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49089).

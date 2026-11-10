---
title: "SDLContext.RawApi — Method: DestroyCursor"
description: "Exact Method: DestroyCursor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a19a2c62f959fc16
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyCursor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyCursor`

<a id="api-72660ada785d03e0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyCursor(Inno.Native.Sdl3.SDLCursor*) f9f47c2db53e65a8fa8f7b2c0de6b75292342b2f0fc9fe91b8047c2ef22deb02 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroyCursor(Inno.Native.Sdl3.SDLCursor* cursor)
```

Free a previously-created cursor.
Use this function to free cursor resources created with SDL_CreateCursor(),
SDL_CreateColorCursor() or SDL_CreateSystemCursor().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateAnimatedCursor

**See also:** SDL_CreateColorCursor

**See also:** SDL_CreateCursor

**See also:** SDL_CreateSystemCursor

**Parameter `cursor`:** the cursor to free.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41615).

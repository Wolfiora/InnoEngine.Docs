---
title: "SDLContext.RawApi — Method: CloseGamepad"
description: "Exact Method: CloseGamepad contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e1201e65174db4f8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CloseGamepad

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CloseGamepad`

<a id="api-14928fe7f5a730a4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CloseGamepad(Inno.Native.Sdl3.SDLGamepad*) f5b6c3b61b8cdbf1f287e21b99305406442feb4a42810645b4bf3cd1c379c8ce -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.CloseGamepad(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Close a gamepad previously opened with SDL_OpenGamepad().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenGamepad

**Parameter `gamepad`:** a gamepad identifier previously returned by
SDL_OpenGamepad().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52084).

---
title: "SDLContext.RawApi — Method: ClearError"
description: "Exact Method: ClearError contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.715e34fdf4b7973c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ClearError

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ClearError`

<a id="api-18467f749926a5fe"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ClearError 73c97d1c2bec74f2f93ccf45ef7f7b997e51f8968e3c1cbf1274811a389e605f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ClearError()
```

Clear any previous error message for this thread.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetError

**See also:** SDL_SetError

**Returns:** true.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18575).

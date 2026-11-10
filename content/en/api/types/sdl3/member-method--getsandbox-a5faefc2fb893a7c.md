---
title: "SDLContext — Method: GetSandbox"
description: "Exact Method: GetSandbox contracts in SDLContext."
uid: api.inno.native.sdl3.a5faefc2fb893a7c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetSandbox

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSandbox`

<a id="api-8a44661438e955b8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetSandbox b290d1f6f662b02d393fcd9d3ec68b352272ffd7ce3ddaf8465a9b3a52020797 -->

```csharp
public Inno.Native.Sdl3.SDLSandbox Inno.Native.Sdl3.SDLContext.GetSandbox()
```

Get the application sandbox environment, if any.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the application sandbox environment or SDL_SANDBOX_NONE if the
application is not running in a sandbox environment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12653).

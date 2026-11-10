---
title: "SDLContext.RawApi — Method: GetSandbox"
description: "Exact Method: GetSandbox contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bb1ef1cec70fc726
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSandbox

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSandbox`

<a id="api-d8d1f9722c7dd324"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSandbox 73a23dc8d5d2588a522d9d6b6ba136c1dc7d66e760a5c54f838851645b9f27be -->

```csharp
public Inno.Native.Sdl3.SDLSandbox Inno.Native.Sdl3.SDLContext.RawApi.GetSandbox()
```

Get the application sandbox environment, if any.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the application sandbox environment or SDL_SANDBOX_NONE if the
application is not running in a sandbox environment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24828).

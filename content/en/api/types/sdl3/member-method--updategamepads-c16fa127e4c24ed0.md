---
title: "SDLContext.RawApi — Method: UpdateGamepads"
description: "Exact Method: UpdateGamepads contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c16fa127e4c24ed0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UpdateGamepads

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UpdateGamepads`

<a id="api-35b84764ddde2dd2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UpdateGamepads 94cfbcca3c89afb8dbd5ef2ea45d07fc4fea303076c13ac74af02acb61767f28 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.UpdateGamepads()
```

Manually pump gamepad updates if not using the loop.
This function is called automatically by the event loop if events are
enabled. Under such circumstances, it will not be necessary to call this
function.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21698).

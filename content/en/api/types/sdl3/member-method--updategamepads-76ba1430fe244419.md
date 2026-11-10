---
title: "SDLContext — Method: UpdateGamepads"
description: "Exact Method: UpdateGamepads contracts in SDLContext."
uid: api.inno.native.sdl3.76ba1430fe244419
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: UpdateGamepads

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UpdateGamepads`

<a id="api-7ed5c81da724b9d9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.UpdateGamepads c61bd7adacda65c0139cce32ab5edb3221d77e94916cbbd282f742e998f30a56 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.UpdateGamepads()
```

Manually pump gamepad updates if not using the loop.
This function is called automatically by the event loop if events are
enabled. Under such circumstances, it will not be necessary to call this
function.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12258).

---
title: "SDLContext.RawApi — Method: HasGamepad"
description: "Exact Method: HasGamepad contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7678c70654997556
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasGamepad

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasGamepad`

<a id="api-48a5d8eb2505561d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasGamepad 87297694aff0613f22941932e239629a0074b713b3fc11263914808e01a8b336 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasGamepad()
```

Return whether a gamepad is currently connected.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepads

**Returns:** true if a gamepad is connected, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30742).

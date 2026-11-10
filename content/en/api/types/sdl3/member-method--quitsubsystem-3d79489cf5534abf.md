---
title: "SDLContext.RawApi — Method: QuitSubSystem"
description: "Exact Method: QuitSubSystem contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3d79489cf5534abf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: QuitSubSystem

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `QuitSubSystem`

<a id="api-959d16a81e36030c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.QuitSubSystem(System.UInt32) f5469ca69aa30e5908c74b95607dba56de5b18a365073faa891ef9fbdcb4ea77 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.QuitSubSystem(uint flags)
```

Shut down specific SDL subsystems.
You still need to call SDL_Quit() even if you close all open subsystems
with SDL_QuitSubSystem().

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_InitSubSystem

**See also:** SDL_Quit

**Parameter `flags`:** any of the flags used by SDL_Init(); see SDL_Init for details.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26597).

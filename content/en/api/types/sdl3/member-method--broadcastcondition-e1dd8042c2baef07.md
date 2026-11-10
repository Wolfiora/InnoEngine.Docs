---
title: "SDLContext.RawApi — Method: BroadcastCondition"
description: "Exact Method: BroadcastCondition contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e1dd8042c2baef07
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BroadcastCondition

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BroadcastCondition`

<a id="api-b3d7754e498b2627"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BroadcastCondition(Inno.Native.Sdl3.SDLCondition*) 2f5cb681ccc41ef555369c6201c0f6d2d7dd9b04e3f93a10d51cc264e05d948c -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.BroadcastCondition(Inno.Native.Sdl3.SDLCondition* cond)
```

Restart all threads that are waiting on the condition variable.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SignalCondition

**See also:** SDL_WaitCondition

**See also:** SDL_WaitConditionTimeout

**Parameter `cond`:** the condition variable to signal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35808).

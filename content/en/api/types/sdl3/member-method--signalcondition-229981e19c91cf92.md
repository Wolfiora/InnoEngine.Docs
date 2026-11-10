---
title: "SDLContext.RawApi — Method: SignalCondition"
description: "Exact Method: SignalCondition contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.229981e19c91cf92
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SignalCondition

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SignalCondition`

<a id="api-a700373532d57039"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SignalCondition(Inno.Native.Sdl3.SDLCondition*) 29a54d4bef944c1651d04cf543b2b8911bac8b9ece4606459eaf5deb18a6b4ae -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SignalCondition(Inno.Native.Sdl3.SDLCondition* cond)
```

Restart one of the threads that are waiting on the condition variable.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BroadcastCondition

**See also:** SDL_WaitCondition

**See also:** SDL_WaitConditionTimeout

**Parameter `cond`:** the condition variable to signal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18755).

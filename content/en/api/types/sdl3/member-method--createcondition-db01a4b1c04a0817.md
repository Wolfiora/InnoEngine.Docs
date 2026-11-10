---
title: "SDLContext.RawApi — Method: CreateCondition"
description: "Exact Method: CreateCondition contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.db01a4b1c04a0817
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateCondition

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateCondition`

<a id="api-7f1a9cbe08c10a88"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateCondition 18dfc02cd27f79552b2da2faf7362f7b8553f910e4239b8032b6158e86559628 -->

```csharp
public Inno.Native.Sdl3.SDLCondition* Inno.Native.Sdl3.SDLContext.RawApi.CreateCondition()
```

Create a condition variable.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BroadcastCondition

**See also:** SDL_SignalCondition

**See also:** SDL_WaitCondition

**See also:** SDL_WaitConditionTimeout

**See also:** SDL_DestroyCondition

**Returns:** a new condition variable or NULL on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29328).

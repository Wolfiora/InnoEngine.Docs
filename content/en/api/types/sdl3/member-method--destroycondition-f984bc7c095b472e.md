---
title: "SDLContext.RawApi — Method: DestroyCondition"
description: "Exact Method: DestroyCondition contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f984bc7c095b472e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyCondition

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyCondition`

<a id="api-ade212ea5f919de0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyCondition(Inno.Native.Sdl3.SDLCondition*) 193cc5b54891a43f9b501b8680dcb896052520e1ed8ef29fde09d61aa46c8e87 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroyCondition(Inno.Native.Sdl3.SDLCondition* cond)
```

Destroy a condition variable.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateCondition

**Parameter `cond`:** the condition variable to destroy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50165).

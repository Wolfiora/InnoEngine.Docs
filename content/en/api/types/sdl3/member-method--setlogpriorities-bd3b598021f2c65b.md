---
title: "SDLContext.RawApi — Method: SetLogPriorities"
description: "Exact Method: SetLogPriorities contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bd3b598021f2c65b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetLogPriorities

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetLogPriorities`

<a id="api-cf8391c502f77e9e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetLogPriorities(Inno.Native.Sdl3.SDLLogPriority) dce0069563d27980784cf232df2a0f315aba3e86b9c9a796938abdb488fdcbf0 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetLogPriorities(Inno.Native.Sdl3.SDLLogPriority priority)
```

Set the priority of all log categories.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ResetLogPriorities

**See also:** SDL_SetLogPriority

**Parameter `priority`:** the SDL_LogPriority to assign.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21357).

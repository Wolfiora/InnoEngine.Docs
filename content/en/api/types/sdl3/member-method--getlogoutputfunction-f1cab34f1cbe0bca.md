---
title: "SDLContext.RawApi — Method: GetLogOutputFunction"
description: "Exact Method: GetLogOutputFunction contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f1cab34f1cbe0bca
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetLogOutputFunction

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetLogOutputFunction`

<a id="api-5e184a2467705c6e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetLogOutputFunction(*,System.Void**) 308194270513d00eee03d5afa3c0224c1cb442e6ab0a2ada5c3b86d80edd0b18 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.GetLogOutputFunction(delegate* unmanaged[Cdecl]<void*, int, Inno.Native.Sdl3.SDLLogPriority, sbyte*, void>* callback, void** userdata)
```

Get the current log output function.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDefaultLogOutputFunction

**See also:** SDL_SetLogOutputFunction

**Parameter `callback`:** an SDL_LogOutputFunction filled in with the current log
callback.

**Parameter `userdata`:** a pointer filled in with the pointer that is passed to
`callback`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39990).

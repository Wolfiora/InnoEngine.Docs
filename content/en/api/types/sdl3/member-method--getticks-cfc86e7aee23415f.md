---
title: "SDLContext — Method: GetTicks"
description: "Exact Method: GetTicks contracts in SDLContext."
uid: api.inno.native.sdl3.cfc86e7aee23415f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetTicks

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTicks`

<a id="api-e85b5e221f2af3cb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetTicks 4350b0484503466566949cf05db74db45597fcfcd8d05a2871074786b75f65a8 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.GetTicks()
```

Get the number of milliseconds that have elapsed since the SDL library
initialization.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTicksNS

**Returns:** an unsigned 64‑bit integer that represents the number of
milliseconds that have elapsed since the SDL library was
initialized (typically via a call to SDL_Init).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11916).

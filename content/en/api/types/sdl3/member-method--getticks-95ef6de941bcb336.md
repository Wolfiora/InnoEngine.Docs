---
title: "SDLContext.RawApi — Method: GetTicks"
description: "Exact Method: GetTicks contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.95ef6de941bcb336
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTicks

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTicks`

<a id="api-a07065bef14597c0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTicks 0efbb2adc230f8e662c5d58643920548b32f5258e480d85672c2695b1aadf03c -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.GetTicks()
```

Get the number of milliseconds that have elapsed since the SDL library
initialization.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTicksNS

**Returns:** an unsigned 64‑bit integer that represents the number of
milliseconds that have elapsed since the SDL library was
initialized (typically via a call to SDL_Init).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19476).

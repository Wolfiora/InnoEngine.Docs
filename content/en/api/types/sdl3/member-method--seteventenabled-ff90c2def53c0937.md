---
title: "SDLContext.RawApi — Method: SetEventEnabled"
description: "Exact Method: SetEventEnabled contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ff90c2def53c0937
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetEventEnabled

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetEventEnabled`

<a id="api-74850a187c502e7c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetEventEnabled(System.UInt32,System.Byte) 2a1a3b2c80f58f86c6fa469ef884d2ddbdfde6208d2e3ea679071ed1d416312a -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetEventEnabled(uint type, byte enabled)
```

Set the state of processing events by type.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_EventEnabled

**Parameter `type`:** the type of event; see SDL_EventType for details.

**Parameter `enabled`:** whether to process the event or not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46060).

---
title: "SDLContext.RawApi — Method: EventEnabled"
description: "Exact Method: EventEnabled contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fb4060b5deadc649
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: EventEnabled

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EventEnabled`

<a id="api-4487bd0361632db4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.EventEnabled(System.UInt32) 709ade3dd2987ca55db2b3a580b355724b6dbf02fc5a4a1011fa357f367cf2ef -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.EventEnabled(uint type)
```

Query the state of processing events by type.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetEventEnabled

**Parameter `type`:** the type of event; see SDL_EventType for details.

**Returns:** true if the event is being processed, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31251).

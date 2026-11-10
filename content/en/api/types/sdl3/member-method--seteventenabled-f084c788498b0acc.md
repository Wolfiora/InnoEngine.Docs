---
title: "SDLContext — Method: SetEventEnabled"
description: "Exact Method: SetEventEnabled contracts in SDLContext."
uid: api.inno.native.sdl3.f084c788498b0acc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: SetEventEnabled

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetEventEnabled`

<a id="api-887fec30c40fdbb5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.SetEventEnabled(System.UInt32,System.Boolean) 386cb29462e7f3099eba461b465a6cdd99253873da349ce232b52054f52f7cae -->

```csharp
public void Inno.Native.Sdl3.SDLContext.SetEventEnabled(uint type, bool enabled)
```

Set the state of processing events by type.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_EventEnabled

**Parameter `type`:** the type of event; see SDL_EventType for details.

**Parameter `enabled`:** whether to process the event or not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15670).

---
title: "SDLContext — Method: UpdateTrays"
description: "Exact Method: UpdateTrays contracts in SDLContext."
uid: api.inno.native.sdl3.0d3404f82603cba2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: UpdateTrays

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UpdateTrays`

<a id="api-ee2a41547fb4e0cf"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.UpdateTrays 8ea7630593524679591495b6833713c575201d58bfec1d313a50b61cefb9e3ae -->

```csharp
public void Inno.Native.Sdl3.SDLContext.UpdateTrays()
```

Update the trays.
This is called automatically by the event loop and is only needed if you're
using trays but aren't handling SDL events.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14425).

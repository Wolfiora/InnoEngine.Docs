---
title: "SDLContext — Method: GetPrimaryDisplay"
description: "Exact Method: GetPrimaryDisplay contracts in SDLContext."
uid: api.inno.native.sdl3.93c2737098b07e47
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetPrimaryDisplay

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPrimaryDisplay`

<a id="api-2e04e2b3919e5c53"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetPrimaryDisplay e6e2b5d65c3cde4ed93694c3f7170090201beff92b6a7b3937d14c05ae645198 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.GetPrimaryDisplay()
```

Return the primary display.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDisplays

**Returns:** the instance ID of the primary display on success or 0 on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14523).

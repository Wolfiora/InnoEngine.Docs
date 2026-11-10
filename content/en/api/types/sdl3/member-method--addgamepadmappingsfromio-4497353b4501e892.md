---
title: "SDLContext.RawApi — Method: AddGamepadMappingsFromIo"
description: "Exact Method: AddGamepadMappingsFromIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4497353b4501e892
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AddGamepadMappingsFromIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AddGamepadMappingsFromIo`

<a id="api-57dfb135d0656484"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AddGamepadMappingsFromIo(Inno.Native.Sdl3.SDLIOStream*,System.Byte) 639a7a525ced5b090ab58ed6311c85c173a23d4e771fd5836e9fcc66736d46c1 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.AddGamepadMappingsFromIo(Inno.Native.Sdl3.SDLIOStream* src, byte closeio)
```

Load a set of gamepad mappings from an SDL_IOStream.
You can call this function several times, if needed, to load different
database files.
If a new mapping is loaded for an already known gamepad GUID, the later
version will overwrite the one currently loaded.
Any new mappings for already plugged in controllers will generate
SDL_EVENT_GAMEPAD_ADDED events.
Mappings not belonging to the current platform or with no platform field
specified will be ignored (i.e. mappings for Linux will be ignored in
Windows, etc).
This function will load the text database entirely in memory before
processing it, so take this into consideration if you are in a memory
constrained environment.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AddGamepadMapping

**See also:** SDL_AddGamepadMappingsFromFile

**See also:** SDL_GetGamepadMapping

**See also:** SDL_GetGamepadMappingForGUID

**See also:** SDL_HINT_GAMECONTROLLERCONFIG

**See also:** SDL_HINT_GAMECONTROLLERCONFIG_FILE

**See also:** SDL_EVENT_GAMEPAD_ADDED

**Parameter `src`:** the data stream for the mappings to be added.

**Parameter `closeio`:** if true, calls SDL_CloseIO() on `src` before returning, even
in the case of an error.

**Returns:** the number of mappings added or -1 on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23433).

---
title: "SDLContext.RawApi — Method: AddGamepadMappingsFromFile"
description: "Exact Method: AddGamepadMappingsFromFile contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4b81c3d3030fb874
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AddGamepadMappingsFromFile

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AddGamepadMappingsFromFile`

<a id="api-62bc1ca279451ff1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AddGamepadMappingsFromFile(System.SByte*) d9ce21f7278542f301e95a14278e0984a23067e1485966f609e7e079d2b657ee -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.AddGamepadMappingsFromFile(sbyte* file)
```

Load a set of gamepad mappings from a file.
You can call this function several times, if needed, to load different
database files.
If a new mapping is loaded for an already known gamepad GUID, the later
version will overwrite the one currently loaded.
Any new mappings for already plugged in controllers will generate
SDL_EVENT_GAMEPAD_ADDED events.
Mappings not belonging to the current platform or with no platform field
specified will be ignored (i.e. mappings for Linux will be ignored in
Windows, etc).

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AddGamepadMapping

**See also:** SDL_AddGamepadMappingsFromIO

**See also:** SDL_GetGamepadMapping

**See also:** SDL_GetGamepadMappingForGUID

**See also:** SDL_HINT_GAMECONTROLLERCONFIG

**See also:** SDL_HINT_GAMECONTROLLERCONFIG_FILE

**See also:** SDL_EVENT_GAMEPAD_ADDED

**Parameter `file`:** the mappings file to load.

**Returns:** the number of mappings added or -1 on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41101).

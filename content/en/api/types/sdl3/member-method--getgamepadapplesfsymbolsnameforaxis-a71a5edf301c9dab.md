---
title: "SDLContext.RawApi — Method: GetGamepadAppleSfSymbolsNameForAxis"
description: "Exact Method: GetGamepadAppleSfSymbolsNameForAxis contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a71a5edf301c9dab
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadAppleSfSymbolsNameForAxis

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadAppleSfSymbolsNameForAxis`

<a id="api-882efcfd901ae7e7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadAppleSfSymbolsNameForAxis(Inno.Native.Sdl3.SDLGamepad*,Inno.Native.Sdl3.SDLGamepadAxis) 579db286bf46f48ba16d2defbb37df9646e79a077af3c0f212d3511a0977cf5b -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadAppleSfSymbolsNameForAxis(Inno.Native.Sdl3.SDLGamepad* gamepad, Inno.Native.Sdl3.SDLGamepadAxis axis)
```

Return the sfSymbolsName for a given axis on a gamepad on Apple platforms.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadAppleSFSymbolsNameForButton

**Parameter `gamepad`:** the gamepad to query.

**Parameter `axis`:** an axis on the gamepad.

**Returns:** the sfSymbolsName or NULL if the name can't be found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40061).

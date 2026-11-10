---
title: "SDLContext.RawApi — Method: GetScancodeName"
description: "Exact Method: GetScancodeName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.81cfbcd7e13b212c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetScancodeName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetScancodeName`

<a id="api-799ab9dcc5e05499"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetScancodeName(Inno.Native.Sdl3.SDLScancode) 339f08fc3ff08761ca83dd0354d9a4e8ed66764a9e054ddf9b574b034424400a -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetScancodeName(Inno.Native.Sdl3.SDLScancode scancode)
```

Get a human-readable name for a scancode.
**Warning**: The returned name is by design not stable across platforms,
e.g. the name for `SDL_SCANCODE_LGUI` is "Left GUI" under Linux but "Left
Windows" under Microsoft Windows, and some scancodes like
`SDL_SCANCODE_NONUSBACKSLASH` don't have any name at all. There are even
scancodes that share names, e.g. `SDL_SCANCODE_RETURN` and
`SDL_SCANCODE_RETURN2` (both called "Return"). This function is therefore
unsuitable for creating a stable cross-platform two-way mapping between
strings and scancodes.

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetScancodeFromKey

**See also:** SDL_GetScancodeFromName

**See also:** SDL_SetScancodeName

**Parameter `scancode`:** the desired SDL_Scancode to query.

**Returns:** a pointer to the name for the scancode. If the scancode doesn't
have a name this function returns an empty string ("").


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45475).

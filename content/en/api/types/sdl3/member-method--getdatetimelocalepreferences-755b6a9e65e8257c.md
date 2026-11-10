---
title: "SDLContext.RawApi — Method: GetDateTimeLocalePreferences"
description: "Exact Method: GetDateTimeLocalePreferences contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.755b6a9e65e8257c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetDateTimeLocalePreferences

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDateTimeLocalePreferences`

<a id="api-026fa7a082a54c41"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetDateTimeLocalePreferences(Inno.Native.Sdl3.SDLDateFormat*,Inno.Native.Sdl3.SDLTimeFormat*) 1dccd586f41a5824bce6094e7f6d7f118e2df98a0b677a4b06bbfecf3dbac42a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetDateTimeLocalePreferences(Inno.Native.Sdl3.SDLDateFormat* dateFormat, Inno.Native.Sdl3.SDLTimeFormat* timeFormat)
```

Gets the current preferred date and time format for the system locale.
This might be a "slow" call that has to query the operating system. It's
best to ask for this once and save the results. However, the preferred
formats can change, usually because the user has changed a system
preference outside of your program.

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dateFormat`:** a pointer to the SDL_DateFormat to hold the returned date
format, may be NULL.

**Parameter `timeFormat`:** a pointer to the SDL_TimeFormat to hold the returned time
format, may be NULL.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26076).

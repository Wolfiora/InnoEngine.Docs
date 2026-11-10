---
title: "SDLContext.RawApi — Method: GetUserFolder"
description: "Exact Method: GetUserFolder contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3746c25022888e27
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetUserFolder

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetUserFolder`

<a id="api-c722b9d5c5c4c850"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetUserFolder(Inno.Native.Sdl3.SDLFolder) b71deaec192fc214d70edc47bfa4394a5b53b6521991fc670d14f6d17d9f2a1d -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetUserFolder(Inno.Native.Sdl3.SDLFolder folder)
```

Finds the most suitable user folder for a specific purpose.
Many OSes provide certain standard folders for certain purposes, such as
storing pictures, music or videos for a certain user. This function gives
the path for many of those special locations.
This function is specifically for _user_ folders, which are meant for the
user to access and manage. For application-specific folders, meant to hold
data for the application to manage, see SDL_GetBasePath() and
SDL_GetPrefPath().
The returned path is guaranteed to end with a path separator ('
\
' on
Windows, '/' on most other platforms).
If NULL is returned, the error may be obtained with SDL_GetError().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `folder`:** the type of folder to find.

**Returns:** either a null-terminated C string containing the full path to the
folder, or NULL if an error happened.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33954).

---
title: "SDLContext.RawApi — Method: GetPrefPath"
description: "Exact Method: GetPrefPath contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7c55079ff47f8b9e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetPrefPath

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPrefPath`

<a id="api-290d7b23585e14e5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetPrefPath(System.SByte*,System.SByte*) 734224afe0b9933d9a8ab862ad29417465f5039f8a2d860174a3d035bfda7222 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetPrefPath(sbyte* org, sbyte* app)
```

Get the user-and-app-specific path where files can be written.
Get the "pref dir". This is meant to be where users can write personal
files (preferences and save games, etc) that are specific to your
application. This directory is unique per user, per application.
This function will decide the appropriate location in the native
filesystem, create the directory if necessary, and return a string of the
absolute path to the directory in UTF-8 encoding.
On Windows, the string might look like:
`C:
\
Users
\
bob
\
AppData
\
Roaming
\
My Company
\
My Program Name
\
`
On Linux, the string might look like:
`/home/bob/.local/share/My Program Name/`
On macOS, the string might look like:
`/Users/bob/Library/Application Support/My Program Name/`
You should assume the path returned by this function is the only safe place
to write files (and that SDL_GetBasePath(), while it might be writable, or
even the parent of the returned path, isn't where you should be writing
things).
Both the org and app strings may become part of a directory name, so please
follow these rules:
- Try to use the same org string (_including case-sensitivity_) for all
your applications that use this function.
- Always use a unique app string for each one, and make sure it never
changes for an app once you've decided on it.
- Unicode characters are legal, as long as they are UTF-8 encoded, but...
- ...only use letters, numbers, and spaces. Avoid punctuation like "Game
Name 2: Bad Guy's Revenge!" ... "Game Name 2" is sufficient.
Due to historical mistakes, `org` is allowed to be NULL or "". In such
cases, SDL will omit the org subdirectory, including on platforms where it
shouldn't, and including on platforms where this would make your app fail
certification for an app store. New apps should definitely specify a real
string for `org`.
The returned path is guaranteed to end with a path separator ('
\
' on
Windows, '/' on most other platforms).

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetBasePath

**Parameter `org`:** the name of your organization.

**Parameter `app`:** the name of your application.

**Returns:** a UTF-8 string of the user directory in platform-dependent
notation. NULL if there's a problem (creating directory failed,
etc.). This should be freed with SDL_free() when it is no longer
needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32865).

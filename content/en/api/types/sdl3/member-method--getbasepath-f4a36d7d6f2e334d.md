---
title: "SDLContext.RawApi — Method: GetBasePath"
description: "Exact Method: GetBasePath contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f4a36d7d6f2e334d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetBasePath

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetBasePath`

<a id="api-60fb74e183c9942c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetBasePath 17190a2d80ffac16870d0df6c07a67006ed952b94315ea0261cc3f068eaea6da -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetBasePath()
```

Get the directory where the application was run from.
SDL caches the result of this call internally, but the first call to this
function is not necessarily fast, so plan accordingly.
**macOS and iOS Specific Functionality**: If the application is in a ".app"
bundle, this function returns the Resource directory (e.g.
MyApp.app/Contents/Resources/). This behaviour can be overridden by adding
a property to the Info.plist file. Adding a string key with the name
SDL_FILESYSTEM_BASE_DIR_TYPE with a supported value will change the
behaviour.
Supported values for the SDL_FILESYSTEM_BASE_DIR_TYPE property (Given an
application in /Applications/SDLApp/MyApp.app):
- `resource`: bundle resource directory (the default). For example:
`/Applications/SDLApp/MyApp.app/Contents/Resources`
- `bundle`: the Bundle directory. For example:
`/Applications/SDLApp/MyApp.app/`
- `parent`: the containing directory of the bundle. For example:
`/Applications/SDLApp/`
**Android Specific Functionality**: This function returns "./", which
allows filesystem operations to use internal storage and the asset system.
**Nintendo 3DS Specific Functionality**: This function returns "romfs"
directory of the application as it is uncommon to store resources outside
the executable. As such it is not a writable directory.
The returned path is guaranteed to end with a path separator ('
\
' on
Windows, '/' on most other platforms).

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPrefPath

**Returns:** an absolute path in UTF-8 encoding to the application data
directory. NULL will be returned on error or when the platform
doesn't implement this functionality, call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50987).

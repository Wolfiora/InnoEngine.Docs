---
title: "SDLContext.RawApi — Method: GetRevision"
description: "Exact Method: GetRevision contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f069306d249c41fd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRevision

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRevision`

<a id="api-1d22b77d55d5abf1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRevision b433885681876cf3c9a9448bc2deba01b05c14f44ecf1a40f7d0b680b5abdc97 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetRevision()
```

Get the code revision of the SDL library that is linked against your
program.
This value is the revision of the code you are linking against and may be
different from the code you are compiling with, which is found in the
constant SDL_REVISION if you explicitly include SDL_revision.h
The revision is an arbitrary string (a hash value) uniquely identifying the
exact revision of the SDL library in use, and is only useful in comparing
against other revisions. It is NOT an incrementing number.
If SDL wasn't built from a git repository with the appropriate tools, this
will return an empty string.
You shouldn't use this function for anything but logging it for debugging
purposes. The string is not intended to be reliable in any way.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetVersion

**Returns:** an arbitrary string, uniquely identifying the exact revision of
the SDL library in use.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49800).

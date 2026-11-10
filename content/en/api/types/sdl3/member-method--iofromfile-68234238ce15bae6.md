---
title: "SDLContext.RawApi — Method: IoFromFile"
description: "Exact Method: IoFromFile contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.68234238ce15bae6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: IoFromFile

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IoFromFile`

<a id="api-2dc516790616161e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.IoFromFile(System.SByte*,System.SByte*) fd757cae9f19acd8fb1209b8c62995a4e490a65a8c3f05325fb6a97a8e8c6ffb -->

```csharp
public Inno.Native.Sdl3.SDLIOStream* Inno.Native.Sdl3.SDLContext.RawApi.IoFromFile(sbyte* file, sbyte* mode)
```

Use this function to create a new SDL_IOStream structure for reading from
and/or writing to a named file.
The `mode` string is treated roughly the same as in a call to the C
library's fopen(), even if SDL doesn't happen to use fopen() behind the
scenes.
Available `mode` strings:
- "r": Open a file for reading. The file must exist.
- "w": Create an empty file for writing. If a file with the same name
already exists its content is erased and the file is treated as a new
empty file.
- "wx": Create an empty file for writing. If a file with the same name
already exists, the call fails.
- "a": Append to a file. Writing operations append data at the end of the
file. The file is created if it does not exist.
- "r+": Open a file for update both reading and writing. The file must
exist.
- "w+": Create an empty file for both reading and writing. If a file with
the same name already exists its content is erased and the file is
treated as a new empty file.
- "w+x": Create an empty file for both reading and writing. If a file with
the same name already exists, the call fails.
- "a+": Open a file for reading and appending. All writing operations are
performed at the end of the file, protecting the previous content to be
overwritten. You can reposition (fseek, rewind) the internal pointer to
anywhere in the file for reading, but writing operations will move it
back to the end of file. The file is created if it does not exist.
**NOTE**: In order to open a file as a binary file, a "b" character has to
be included in the `mode` string. This additional "b" character can either
be appended at the end of the string (thus making the following compound
modes: "rb", "wb", "ab", "r+b", "w+b", "a+b") or be inserted between the
letter and the "+" sign for the mixed modes ("rb+", "wb+", "ab+").
Additional characters may follow the sequence, although they should have no
effect. For example, "t" is sometimes appended to make explicit the file is
a text file.
This function supports Unicode filenames, but they must be encoded in UTF-8
format, regardless of the underlying operating system.
In Android, SDL_IOFromFile() can be used to open content:// URIs. As a
fallback, SDL_IOFromFile() will transparently open a matching filename in
the app's `assets`.
Closing the SDL_IOStream will close SDL's internal file handle.
The following properties may be set at creation time by SDL:
- `SDL_PROP_IOSTREAM_WINDOWS_HANDLE_POINTER`: a pointer, that can be cast
to a win32 `HANDLE`, that this SDL_IOStream is using to access the
filesystem. If the program isn't running on Windows, or SDL used some
other method to access the filesystem, this property will not be set.
- `SDL_PROP_IOSTREAM_STDIO_FILE_POINTER`: a pointer, that can be cast to a
stdio `FILE *`, that this SDL_IOStream is using to access the filesystem.
If SDL used some other method to access the filesystem, this property
will not be set. PLEASE NOTE that if SDL is using a different C runtime
than your app, trying to use this pointer will almost certainly result in
a crash! This is mostly a problem on Windows; make sure you build SDL and
your app with the same compiler and settings to avoid it.
- `SDL_PROP_IOSTREAM_FILE_DESCRIPTOR_NUMBER`: a file descriptor that this
SDL_IOStream is using to access the filesystem.
- `SDL_PROP_IOSTREAM_ANDROID_AASSET_POINTER`: a pointer, that can be cast
to an Android NDK `AAsset *`, that this SDL_IOStream is using to access
the filesystem. If SDL used some other method to access the filesystem,
this property will not be set.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CloseIO

**See also:** SDL_FlushIO

**See also:** SDL_ReadIO

**See also:** SDL_SeekIO

**See also:** SDL_TellIO

**See also:** SDL_WriteIO

**Parameter `file`:** a UTF-8 string representing the filename to open.

**Parameter `mode`:** an ASCII string representing the mode to be used for opening
the file.

**Returns:** a pointer to the SDL_IOStream structure that is created or NULL on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30256).

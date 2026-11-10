---
title: "SDLContext.RawApi — Method: AsyncIoFromFile"
description: "Exact Method: AsyncIoFromFile contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2aeda1da80c9d286
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AsyncIoFromFile

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AsyncIoFromFile`

<a id="api-4939ed5a2c0a72ff"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AsyncIoFromFile(System.SByte*,System.SByte*) 9083f19313fb17a0a1e1a2446d98449006a3c4754a8aaff964764478075439ac -->

```csharp
public Inno.Native.Sdl3.SDLAsyncIO* Inno.Native.Sdl3.SDLContext.RawApi.AsyncIoFromFile(sbyte* file, sbyte* mode)
```

Use this function to create a new SDL_AsyncIO object for reading from
and/or writing to a named file.
The `mode` string understands the following values:
- "r": Open a file for reading only. It must exist.
- "w": Open a file for writing only. It will create missing files or
truncate existing ones.
- "r+": Open a file for update both reading and writing. The file must
exist.
- "w+": Create an empty file for both reading and writing. If a file with
the same name already exists its content is erased and the file is
treated as a new empty file.
There is no "b" mode, as there is only "binary" style I/O, and no "a" mode
for appending, since you specify the position when starting a task.
This function supports Unicode filenames, but they must be encoded in UTF-8
format, regardless of the underlying operating system.
This call is _not_ asynchronous; it will open the file before returning,
under the assumption that doing so is generally a fast operation. Future
reads and writes to the opened file will be async, however.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CloseAsyncIO

**See also:** SDL_ReadAsyncIO

**See also:** SDL_WriteAsyncIO

**Parameter `file`:** a UTF-8 string representing the filename to open.

**Parameter `mode`:** an ASCII string representing the mode to be used for opening
the file.

**Returns:** a pointer to the SDL_AsyncIO structure that is created or NULL on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24812).

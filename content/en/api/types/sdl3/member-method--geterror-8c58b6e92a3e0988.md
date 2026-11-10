---
title: "SDLContext.RawApi — Method: GetError"
description: "Exact Method: GetError contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8c58b6e92a3e0988
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetError

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetError`

<a id="api-c86dc24e5e8c0c75"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetError 3f570ebac12c6662fc82ab340a64a8ca9f219715c34058aa68570eee66e33287 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetError()
```

Retrieve a message about the last error that occurred on the current
thread.
It is possible for multiple errors to occur before calling SDL_GetError().
Only the last error is returned.
The message is only applicable when an SDL function has signaled an error.
You must check the return values of SDL function calls to determine when to
appropriately call SDL_GetError(). You should *not* use the results of
SDL_GetError() to decide if an error has occurred! Sometimes SDL will set
an error string even when reporting success.
SDL will *not* clear the error string for successful API calls. You *must*
check return values for failure cases before you can assume the error
string applies.
Error strings are set per-thread, so an error set in a different thread
will not interfere with the current thread's operation.
The returned value is a thread-local string which will remain valid until
the current thread's error string is changed. The caller should make a copy
if the value is needed after the next SDL API call.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ClearError

**See also:** SDL_SetError

**Returns:** a message with information about the specific error that occurred,
or an empty string if there hasn't been an error message set since
the last call to SDL_ClearError().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29957).

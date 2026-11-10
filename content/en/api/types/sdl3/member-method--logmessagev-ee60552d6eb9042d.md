---
title: "SDLContext.RawApi — Method: LogMessageV"
description: "Exact Method: LogMessageV contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ee60552d6eb9042d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LogMessageV

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LogMessageV`

<a id="api-6a79a671b240eba4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LogMessageV(System.Int32,Inno.Native.Sdl3.SDLLogPriority,System.SByte*,System.SByte*) 40c32bd663eded6d62639a69bea189a692f20181670026e38802f3f3c81a360d -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.LogMessageV(int category, Inno.Native.Sdl3.SDLLogPriority priority, sbyte* fmt, sbyte* ap)
```

Log a message with the specified category and priority.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_Log

**See also:** SDL_LogCritical

**See also:** SDL_LogDebug

**See also:** SDL_LogError

**See also:** SDL_LogInfo

**See also:** SDL_LogMessage

**See also:** SDL_LogTrace

**See also:** SDL_LogVerbose

**See also:** SDL_LogWarn

**Parameter `category`:** the category of the message.

**Parameter `priority`:** the priority of the message.

**Parameter `fmt`:** a printf() style message format string.

**Parameter `ap`:** a variable argument list.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29107).

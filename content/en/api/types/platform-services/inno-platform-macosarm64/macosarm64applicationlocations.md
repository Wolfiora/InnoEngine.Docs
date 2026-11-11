---
title: "MacOSArm64ApplicationLocations"
description: "Reference for MacOSArm64ApplicationLocations in Inno.Platform.MacOSArm64."
uid: api.inno.platform.macosarm64.1114a22e1ae9665c
kind: api
owners:
  - Inno.Platform.MacOSArm64
apiSurface: source-clr
contracts:
  - project.inno-platform-macosarm64
---
# `MacOSArm64ApplicationLocations`

This reference describes `MacOSArm64ApplicationLocations` in `Inno.Platform.MacOSArm64`. Read the [shared contract](../../../projects/inno-platform-macosarm64.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`GetPlayerContentDirectory`](#api-8fa75851b0d1c75c) | Method |
| [`userDataRoot`](#api-89a7dd87e1c30fd6) | Property |

## Type declaration

<a id="api-1114a22e1ae9665c"></a>
<!-- api: T:Inno.Platform.MacOSArm64.MacOSArm64ApplicationLocations 13cedcf7de393eb7ac90739d7a192f55664d259978fd7823be2366e94e2313fb -->

```csharp
public static class Inno.Platform.MacOSArm64.MacOSArm64ApplicationLocations
```

Defines MacOS application layout and user data locations without implementing storage services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/runtime/Inno.Platform.MacOSArm64/MacOSArm64ApplicationLocations.cs#L9).

## `GetPlayerContentDirectory`

<a id="api-8fa75851b0d1c75c"></a>
<!-- api: M:Inno.Platform.MacOSArm64.MacOSArm64ApplicationLocations.GetPlayerContentDirectory(System.String) 71c548741dfa37ee3b729a2f3bd83b40cc6400548c2ed45a29fff52edbdf7e9a -->

```csharp
public static string Inno.Platform.MacOSArm64.MacOSArm64ApplicationLocations.GetPlayerContentDirectory(string applicationDirectory)
```

Resolves the sole content location in a published MacOS application layout.

**Parameter `applicationDirectory`:** The absolute product executable directory.

**Returns:** The explicit content directory, without probing alternative layouts.

**Throws `System.ArgumentException`:** The application directory is empty or relative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/runtime/Inno.Platform.MacOSArm64/MacOSArm64ApplicationLocations.cs#L45).

## `userDataRoot`

<a id="api-89a7dd87e1c30fd6"></a>
<!-- api: P:Inno.Platform.MacOSArm64.MacOSArm64ApplicationLocations.userDataRoot 96fe8290263d5159d7b6fa6595a7561ae8b27b1a8f88902dd6b3bdcdd523bcbc -->

```csharp
public static string Inno.Platform.MacOSArm64.MacOSArm64ApplicationLocations.userDataRoot { get; }
```

Gets the current user's application data root according to MacOS system conventions.

**Throws `System.PlatformNotSupportedException`:** The application is running on another operating system.

**Throws `System.InvalidOperationException`:** The system did not provide a usable user location.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/runtime/Inno.Platform.MacOSArm64/MacOSArm64ApplicationLocations.cs#L20).

---
title: "WindowsX64ApplicationLocations"
description: "Reference for WindowsX64ApplicationLocations in Inno.Platform.WindowsX64."
uid: api.inno.platform.windowsx64.1f56baab13e20783
kind: api
owners:
  - Inno.Platform.WindowsX64
apiSurface: source-clr
contracts:
  - project.inno-platform-windowsx64
---
# `WindowsX64ApplicationLocations`

This reference describes `WindowsX64ApplicationLocations` in `Inno.Platform.WindowsX64`. Read the [shared contract](../../../projects/inno-platform-windowsx64.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`GetPlayerContentDirectory`](#api-d27851c77cf45965) | Method |
| [`userDataRoot`](#api-1db45ff1aa055cda) | Property |

## Type declaration

<a id="api-1f56baab13e20783"></a>
<!-- api: T:Inno.Platform.WindowsX64.WindowsX64ApplicationLocations 9c2c3039d594bc60e7bb48d22967d5b8646cbd1aa9abe3181dd0fcab40181c83 -->

```csharp
public static class Inno.Platform.WindowsX64.WindowsX64ApplicationLocations
```

Defines Windows application layout and user data locations without implementing storage services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/runtime/Inno.Platform.WindowsX64/WindowsX64ApplicationLocations.cs#L9).

## `GetPlayerContentDirectory`

<a id="api-d27851c77cf45965"></a>
<!-- api: M:Inno.Platform.WindowsX64.WindowsX64ApplicationLocations.GetPlayerContentDirectory(System.String) 976b9f70ce377ce3c119b46e6792e612cb3e4a9d8211351ffcbb6eb94171926f -->

```csharp
public static string Inno.Platform.WindowsX64.WindowsX64ApplicationLocations.GetPlayerContentDirectory(string applicationDirectory)
```

Resolves the sole content location in a published Windows application layout.

**Parameter `applicationDirectory`:** The absolute product executable directory.

**Returns:** The explicit content directory, without probing alternative layouts.

**Throws `System.ArgumentException`:** The application directory is empty or relative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/runtime/Inno.Platform.WindowsX64/WindowsX64ApplicationLocations.cs#L45).

## `userDataRoot`

<a id="api-1db45ff1aa055cda"></a>
<!-- api: P:Inno.Platform.WindowsX64.WindowsX64ApplicationLocations.userDataRoot 82e31f9a536519fa0cbe7cdc85bf8fa0206ce7a44fe176c99e75bb530132035f -->

```csharp
public static string Inno.Platform.WindowsX64.WindowsX64ApplicationLocations.userDataRoot { get; }
```

Gets the current user's application data root according to Windows system conventions.

**Throws `System.PlatformNotSupportedException`:** The application is running on another operating system.

**Throws `System.InvalidOperationException`:** The system did not provide a usable user location.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/runtime/Inno.Platform.WindowsX64/WindowsX64ApplicationLocations.cs#L20).

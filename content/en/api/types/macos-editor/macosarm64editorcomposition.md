---
title: "MacOSArm64EditorComposition"
description: "Reference for MacOSArm64EditorComposition in Inno.Editor.MacOSArm64."
uid: api.inno.editor.macosarm64.9c9e3f8e66142a85
kind: api
owners:
  - Inno.Editor.MacOSArm64
apiSurface: source-clr
contracts:
  - project.inno-editor-macosarm64
---
# `MacOSArm64EditorComposition`

This reference describes `MacOSArm64EditorComposition` in `Inno.Editor.MacOSArm64`. Read the [shared contract](../../projects/inno-editor-macosarm64.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Run`](#api-d7c21051191a6c8b) | Method |

## Type declaration

<a id="api-9c9e3f8e66142a85"></a>
<!-- api: T:Inno.Editor.MacOSArm64.MacOSArm64EditorComposition 6c5e159e24703436625e4e82a669cc61c23703e6b3ce0fa17b7efa324d9da4db -->

```csharp
public static class Inno.Editor.MacOSArm64.MacOSArm64EditorComposition
```

Composes the MacOS Editor from explicit platform integrations and shared product hosting.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e12d767c39771d8746f3e23ba6190bd2c82eb72/platforms/MacOSArm64/editor/Inno.Editor.MacOSArm64/MacOSArm64EditorComposition.cs#L39).

## `Run`

<a id="api-d7c21051191a6c8b"></a>
<!-- api: M:Inno.Editor.MacOSArm64.MacOSArm64EditorComposition.Run(System.String[],System.Threading.CancellationToken) f9012581831cd50a45dc74f6f489f1337588058790c89bdc095fb43544d9af8f -->

```csharp
public static int Inno.Editor.MacOSArm64.MacOSArm64EditorComposition.Run(string[] arguments, System.Threading.CancellationToken cancellationToken)
```

Runs the platform Editor on the caller's main thread; no directory opens the native folder dialog.

**Parameter `arguments`:** An optional project directory and the shared Editor command-line options.

**Returns:** Zero on normal exit or dialog cancellation, two on cancellation or invalid arguments, or one on startup failure.

**Parameter `cancellationToken`:** Cancels preparation or requests orderly shutdown of the shared Editor host.
An open native folder dialog retains its callback owner until the user completes or closes it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e12d767c39771d8746f3e23ba6190bd2c82eb72/platforms/MacOSArm64/editor/Inno.Editor.MacOSArm64/MacOSArm64EditorComposition.cs#L54).

---
title: "EditorConsole"
description: "Reference for EditorConsole in Inno.Editor.Diagnostics."
uid: api.inno.editor.diagnostics.bfb085ac3056ebf9
kind: api
owners:
  - Inno.Editor.Diagnostics
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-diagnostics#lifetime-and-policy
---
# `EditorConsole`

This reference describes `EditorConsole` in `Inno.Editor.Diagnostics`. Read the [shared contract](../../projects/inno-editor-diagnostics.md#lifetime-and-policy) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Editor.Diagnostics.IEditorConsole`, `Inno.Core.Logging.ILogSink`, `Inno.Core.Diagnostics.IDiagnosticSink`, `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8a43e4a0cc1800f0) | Method |
| [`Capture`](#api-82339b252b828490) | Method |
| [`Clear`](#api-57bdf5cb23de65f0) | Method |
| [`Clear`](#api-4befd79f78ae09ce) | Method |
| [`Dispose`](#api-e3868c17beae9b69) | Method |
| [`Receive`](#api-7d5af33ead7c6d33) | Method |
| [`Replace`](#api-b8ae7cf4fd3d1ad5) | Method |
| [`Start`](#api-4f085cbef4406d66) | Method |
| [`capacity`](#api-46f5de09454d3db8) | Property |
| [`clearOnPlay`](#api-2721ee148aeddcd1) | Property |

## Type declaration

<a id="api-bfb085ac3056ebf9"></a>
<!-- api: T:Inno.Editor.Diagnostics.EditorConsole b3dacacf951791cb34026255af7fe0a045ecc5afb7c059d7faf698ba780e3096 -->

```csharp
public sealed class Inno.Editor.Diagnostics.EditorConsole : Inno.Editor.Diagnostics.IEditorConsole, Inno.Core.Logging.ILogSink, Inno.Core.Diagnostics.IDiagnosticSink, System.IDisposable
```

Owns one editor's bounded Console history, current diagnostics, grouping, and Play Mode clearing policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsole.cs#L15).

## `#ctor`

<a id="api-8a43e4a0cc1800f0"></a>
<!-- api: M:Inno.Editor.Diagnostics.EditorConsole.#ctor(Inno.Core.Logging.LogRouter,Inno.Core.Diagnostics.DiagnosticHub,Inno.Editor.PlayMode.IEditorPlayMode) 51dc394ee92a754a68bd0e26d7c953f2e31fab7230c9926dd865e1c4232a2d10 -->

```csharp
public Inno.Editor.Diagnostics.EditorConsole.EditorConsole(Inno.Core.Logging.LogRouter logRouter, Inno.Core.Diagnostics.DiagnosticHub diagnosticHub, Inno.Editor.PlayMode.IEditorPlayMode playMode)
```

Creates a Console service that observes one editor Play Mode controller.

**Parameter `logRouter`:** The host logging router whose entries are presented by this Console.

**Parameter `diagnosticHub`:** The host diagnostic hub whose current reports are presented by this Console.

**Parameter `playMode`:** The Play Mode source used to clear ordinary logs when a new simulation request begins.

**Throws `System.ArgumentNullException`:** Thrown when `playMode` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsole.cs#L46).

## `Capture`

<a id="api-82339b252b828490"></a>
<!-- api: M:Inno.Editor.Diagnostics.EditorConsole.Capture f58fc8bfdba06f9a99b9e2ea7e9076b283216a962edcedaa5400f0a86b5ce3fe -->

```csharp
public Inno.Editor.Diagnostics.EditorConsoleSnapshot Inno.Editor.Diagnostics.EditorConsole.Capture()
```

Captures an immutable snapshot containing both individual occurrences and global groups.

**Returns:** A consistent snapshot that remains valid while new entries arrive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsole.cs#L170).

## `Clear`

<a id="api-57bdf5cb23de65f0"></a>
<!-- api: M:Inno.Editor.Diagnostics.EditorConsole.Clear 99546c2ab38348eb7484765ef2554c1bf93048fe005f4ffb7770574da6523a8e -->

```csharp
public void Inno.Editor.Diagnostics.EditorConsole.Clear()
```

Removes retained logs while keeping currently reported issues visible until their owners resolve them.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsole.cs#L190).

## `Clear`

<a id="api-4befd79f78ae09ce"></a>
<!-- api: M:Inno.Editor.Diagnostics.EditorConsole.Clear(Inno.Core.Diagnostics.DiagnosticSource) 7133d58af82dc1316782aff7b9da1ba992560190090d4057e49336566cbc0007 -->

```csharp
public void Inno.Editor.Diagnostics.EditorConsole.Clear(Inno.Core.Diagnostics.DiagnosticSource source)
```

Removes the current diagnostic report for one producer.

**Parameter `source`:** The producer whose report should be removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsole.cs#L155).

## `Dispose`

<a id="api-e3868c17beae9b69"></a>
<!-- api: M:Inno.Editor.Diagnostics.EditorConsole.Dispose 496326ddb9be5cbeb949348253365a85ddd26c81ac2e350717bc57eb38c685d8 -->

```csharp
public void Inno.Editor.Diagnostics.EditorConsole.Dispose()
```

Detaches this service and releases its subscriptions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsole.cs#L204).

## `Receive`

<a id="api-7d5af33ead7c6d33"></a>
<!-- api: M:Inno.Editor.Diagnostics.EditorConsole.Receive(Inno.Core.Logging.LogEntry) 0db96729c293dcbe033552e0fbb43eb2b395a1fc0bb0cecca84b0c155896c1a3 -->

```csharp
public void Inno.Editor.Diagnostics.EditorConsole.Receive(Inno.Core.Logging.LogEntry entry)
```

Appends one asynchronously dispatched log entry.

**Parameter `entry`:** The immutable entry to append.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsole.cs#L120).

## `Replace`

<a id="api-b8ae7cf4fd3d1ad5"></a>
<!-- api: M:Inno.Editor.Diagnostics.EditorConsole.Replace(Inno.Core.Diagnostics.DiagnosticReport) 773e3b28627168b989c7e5fdcdd8e2547f89f3ea957d8d7abb429fe81d177b65 -->

```csharp
public void Inno.Editor.Diagnostics.EditorConsole.Replace(Inno.Core.Diagnostics.DiagnosticReport report)
```

Replaces the complete current diagnostic report for one producer.

**Parameter `report`:** The complete report to expose in subsequent snapshots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsole.cs#L136).

## `Start`

<a id="api-4f085cbef4406d66"></a>
<!-- api: M:Inno.Editor.Diagnostics.EditorConsole.Start fa103043609b2a0243bbe7d869c51d17e6959b4804f5f2dbe7c374d8ab483f56 -->

```csharp
public void Inno.Editor.Diagnostics.EditorConsole.Start()
```

Attaches this service to the process logging, diagnostic, and Play Mode sources.

**Throws `System.ObjectDisposedException`:** Thrown after this service has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsole.cs#L92).

## `capacity`

<a id="api-46f5de09454d3db8"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsole.capacity b1c4c06de6dd97d40f3cec4229a4fe6e310c5300ee77fd1bb6b5ea61b502d2f0 -->

```csharp
public int Inno.Editor.Diagnostics.EditorConsole.capacity { get; set; }
```

Gets or sets the maximum number of ordinary log occurrences retained in memory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsole.cs#L59).

## `clearOnPlay`

<a id="api-2721ee148aeddcd1"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsole.clearOnPlay 1fdaf83d8e62c09fb64bf83c8d830f5b175d557ddbaf748b5e403ea25a7b6866 -->

```csharp
public bool Inno.Editor.Diagnostics.EditorConsole.clearOnPlay { get; set; }
```

Gets or sets whether ordinary Console logs are cleared when a new Play Mode request begins.
Current diagnostics remain visible because they represent active compiler and subsystem state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsole.cs#L84).

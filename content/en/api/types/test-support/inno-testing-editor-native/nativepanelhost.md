---
title: "NativePanelHost"
description: "Reference for NativePanelHost in Inno.Testing.Editor.Native."
uid: api.inno.testing.editor.native.78ba40ac5cc94e05
kind: api
owners:
  - Inno.Testing.Editor.Native
apiSurface: source-clr
contracts:
  - project.inno-testing-editor-native
---
# `NativePanelHost`

This reference describes `NativePanelHost` in `Inno.Testing.Editor.Native`. Read the [shared contract](../../../../contributing/testing/support/inno-testing-editor-native.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f0acaf51843db7a5) | Method |
| [`#ctor`](#api-b3882c138d0de948) | Method |
| [`#ctor`](#api-5caa0ab07355d77b) | Method |
| [`Dispose`](#api-3a20b6a79eacb6c1) | Method |
| [`DrawPanel`](#api-be14e04217b66770) | Method |
| [`Frame`](#api-458e181707274337) | Method |
| [`GetPanel`](#api-4c3b7fc5af365cae) | Method |
| [`SetDisplayMetrics`](#api-741cfabcfaf6dcdb) | Method |
| [`console`](#api-8c65e1e5fe6be6eb) | Property |
| [`diagnostics`](#api-3697005ba3a4ad96) | Property |
| [`logs`](#api-f03647fb9c492271) | Property |
| [`runtime`](#api-238bad74c25f6a95) | Property |
| [`ui`](#api-36605f17eb75cace) | Property |

## Type declaration

<a id="api-78ba40ac5cc94e05"></a>
<!-- api: T:Inno.Testing.Editor.Native.NativePanelHost 69d385dd39cf1b35dd8119c3a23de685ab5642cc574be245c3fb52b95ca4c69d -->

```csharp
public sealed class Inno.Testing.Editor.Native.NativePanelHost : System.IDisposable
```

Owns a real ImGui context and frame validation for a declared test composition.

**Constraints:** Construct, draw and dispose on the same thread. Do not overlap hosts sharing ImGui global state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativePanelHost.cs#L32).

## `#ctor`

<a id="api-f0acaf51843db7a5"></a>
<!-- api: M:Inno.Testing.Editor.Native.NativePanelHost.#ctor(System.Reflection.Assembly,System.Boolean,Inno.Editor.Core.EditorKeyboardPolicy,System.String[]) 6d3dfd23fcf4682063c2eb582321dc9cc1568ee08434fe6bee1a5ba756a5ac68 -->

```csharp
public Inno.Testing.Editor.Native.NativePanelHost.NativePanelHost(System.Reflection.Assembly composition, bool supportsVertexOffsets, Inno.Editor.Core.EditorKeyboardPolicy keyboard, params string[] assemblies)
```

Creates the owned diagnostics, discovery, interactions and native frame context.

**Parameter `composition`:** The calling test assembly owning the complete discovery closure.

**Parameter `supportsVertexOffsets`:** Whether to advertise and validate native vertex offsets.

**Parameter `keyboard`:** The explicit keyboard convention used by the test.

**Parameter `assemblies`:** Additional declared panel assemblies to load before discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativePanelHost.cs#L71).

## `#ctor`

<a id="api-b3882c138d0de948"></a>
<!-- api: M:Inno.Testing.Editor.Native.NativePanelHost.#ctor(System.Reflection.Assembly,System.Boolean,System.String[]) 1db04fbd72cdc7bd300819fe1fa7bb8ef00ed0a1bac08ade8d3596db161a497b -->

```csharp
public Inno.Testing.Editor.Native.NativePanelHost.NativePanelHost(System.Reflection.Assembly composition, bool supportsVertexOffsets, params string[] assemblies)
```

Creates a panel host with an explicit vertex-offset capability.

**Parameter `composition`:** The calling test assembly owning the complete discovery closure.

**Parameter `supportsVertexOffsets`:** Whether to advertise and validate native vertex offsets.

**Parameter `assemblies`:** Additional declared panel assemblies to load before discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativePanelHost.cs#L58).

## `#ctor`

<a id="api-5caa0ab07355d77b"></a>
<!-- api: M:Inno.Testing.Editor.Native.NativePanelHost.#ctor(System.Reflection.Assembly,System.String[]) bdceaf467c8731bee8ce03785f85cf794a879b7966c174b7494db18d335ddc8e -->

```csharp
public Inno.Testing.Editor.Native.NativePanelHost.NativePanelHost(System.Reflection.Assembly composition, params string[] assemblies)
```

Creates a panel host with the default keyboard convention and vertex-offset validation disabled.

**Parameter `composition`:** The calling test assembly owning the complete discovery closure.

**Parameter `assemblies`:** Additional declared panel assemblies to load before discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativePanelHost.cs#L50).

## `Dispose`

<a id="api-3a20b6a79eacb6c1"></a>
<!-- api: M:Inno.Testing.Editor.Native.NativePanelHost.Dispose a04607593f521959ce71377bdf49866752da3c59e44901dd0e5cb29ff8f9011c -->

```csharp
public void Inno.Testing.Editor.Native.NativePanelHost.Dispose()
```

Releases the owned UI, native context and services on their creating thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativePanelHost.cs#L238).

## `DrawPanel`

<a id="api-be14e04217b66770"></a>
<!-- api: M:Inno.Testing.Editor.Native.NativePanelHost.DrawPanel(Inno.Editor.Interactions.EditorPanelExtension,System.Action,System.Single) 2ac9c9857104ee0bc6aebfaeb7b57d4c084202875940c9be9faab8c73603b010 -->

```csharp
public void Inno.Testing.Editor.Native.NativePanelHost.DrawPanel(Inno.Editor.Interactions.EditorPanelExtension panel, System.Action? afterDraw = null, float deltaTime = 0.016666668)
```

Draws the actual panel inside a bounded native window and completes the frame.

**Parameter `panel`:** The borrowed panel belonging to this host's interaction runtime.

**Parameter `afterDraw`:** An optional operation performed after the panel draws and before the window closes.

**Parameter `deltaTime`:** The explicit elapsed frame time in seconds.

**Throws `System.InvalidOperationException`:** The panel is quarantined by a real draw failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativePanelHost.cs#L205).

## `Frame`

<a id="api-458e181707274337"></a>
<!-- api: M:Inno.Testing.Editor.Native.NativePanelHost.Frame(System.Action,System.Single) a5402267199444acae91919421fba6ede3d0c024ebb8e38de1bae1fed4a59aba -->

```csharp
public void Inno.Testing.Editor.Native.NativePanelHost.Frame(System.Action draw, float deltaTime = 0.016666668)
```

Executes a real native frame and validates its resulting draw data.

**Parameter `draw`:** The drawing operation executed within the UI scope.

**Parameter `deltaTime`:** The explicit elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativePanelHost.cs#L156).

## `GetPanel`

<a id="api-4c3b7fc5af365cae"></a>
<!-- api: M:Inno.Testing.Editor.Native.NativePanelHost.GetPanel(System.String) 8356dcd903a1562d5e4630e475787598f4cf34fda9b330b05dfe9d10a007f079 -->

```csharp
public Inno.Editor.Interactions.EditorPanelExtension Inno.Testing.Editor.Native.NativePanelHost.GetPanel(string id)
```

Finds and opens exactly one discovered panel.

**Parameter `id`:** The registered panel identity.

**Returns:** The borrowed panel, valid until this host is disposed.

**Throws `System.InvalidOperationException`:** The identity has no unique discovered panel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativePanelHost.cs#L144).

## `SetDisplayMetrics`

<a id="api-741cfabcfaf6dcdb"></a>
<!-- api: M:Inno.Testing.Editor.Native.NativePanelHost.SetDisplayMetrics(System.Numerics.Vector2,System.Single,System.Single) d23536f40052a0ce47234a6f34807f61c6f58bf378c3078bd1fb962072f5ac56 -->

```csharp
public void Inno.Testing.Editor.Native.NativePanelHost.SetDisplayMetrics(System.Numerics.Vector2 logicalSize, float framebufferScale, float zoom)
```

Sets the native display dimensions, framebuffer scale and UI zoom.

**Parameter `logicalSize`:** The logical display size in UI coordinates.

**Parameter `framebufferScale`:** The physical framebuffer scale.

**Parameter `zoom`:** The UI style zoom.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativePanelHost.cs#L184).

## `console`

<a id="api-8c65e1e5fe6be6eb"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativePanelHost.console eb16c3f70b36305f89a0ca8bf985832a22c92545d1c46aea091904b1d4d3bc87 -->

```csharp
public Inno.Editor.Diagnostics.EditorConsole Inno.Testing.Editor.Native.NativePanelHost.console { get; }
```

Gets the borrowed console consuming the host's logs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativePanelHost.cs#L128).

## `diagnostics`

<a id="api-3697005ba3a4ad96"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativePanelHost.diagnostics dcb031cf0bfe17deb5e1ecc42ab4610498a73c8305300962145308d4dd6bd3ac -->

```csharp
public Inno.Core.Diagnostics.DiagnosticHub Inno.Testing.Editor.Native.NativePanelHost.diagnostics { get; }
```

Gets the borrowed diagnostic hub for this host's lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativePanelHost.cs#L120).

## `logs`

<a id="api-f03647fb9c492271"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativePanelHost.logs 25951fd97859db03ab45b589a5642db48fa1a5a109860b8a21d978e4e5bbc370 -->

```csharp
public Inno.Core.Logging.LogRouter Inno.Testing.Editor.Native.NativePanelHost.logs { get; }
```

Gets the borrowed log router for this host's lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativePanelHost.cs#L124).

## `runtime`

<a id="api-238bad74c25f6a95"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativePanelHost.runtime b68b519a35959061bb12b0281a34584c0abc2101e851591ce2a9aff801d7bdcf -->

```csharp
public Inno.Editor.Interactions.EditorInteractionRuntime Inno.Testing.Editor.Native.NativePanelHost.runtime { get; }
```

Gets the borrowed interaction runtime and discovered panels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativePanelHost.cs#L132).

## `ui`

<a id="api-36605f17eb75cace"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativePanelHost.ui 8f408dca57b9ce962d65a17e8dd1b3c46f341648404eec8c8a7a910f01710bd8 -->

```csharp
public Inno.Editor.ImGui.EditorUiSession Inno.Testing.Editor.Native.NativePanelHost.ui { get; }
```

Gets the borrowed UI session owning the host's frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativePanelHost.cs#L136).

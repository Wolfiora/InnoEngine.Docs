---
title: "ImGuiEditorRuntime"
description: "Reference for ImGuiEditorRuntime in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.8087070d5ed4a25c
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiEditorRuntime`

This reference describes `ImGuiEditorRuntime` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Core.EditorRuntime`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5b0933a1c21879cf) | Method |
| [`Dispose`](#api-72cdfe30d2ba4709) | Method |
| [`Draw`](#api-d525c32326b01978) | Method |
| [`HandleKeyPressed`](#api-8a505e6c977af94b) | Method |
| [`PrepareFrame`](#api-f4a37d00113af70f) | Method |
| [`PrepareShutdown`](#api-614e6f5fb39945fc) | Method |
| [`SaveState`](#api-e6df2d03a3e0a5a2) | Method |
| [`Start`](#api-c802b44624c45217) | Method |
| [`Update`](#api-98f7201500fe4b8d) | Method |
| [`interactions`](#api-f9eed542e7c3ed60) | Property |
| [`panelCount`](#api-56725484e450cec2) | Property |

## Type declaration

<a id="api-8087070d5ed4a25c"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiEditorRuntime d2ebf491be3056de94934ff3b5759284bc41ab1dfe30ba55b34121ad3801e7c8 -->

```csharp
public sealed class Inno.Editor.ImGui.ImGuiEditorRuntime : Inno.Editor.Core.EditorRuntime
```

Presents the backend-independent editor interaction runtime through ImGui.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/ImGuiEditorRuntime.cs#L21).

## `#ctor`

<a id="api-5b0933a1c21879cf"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiEditorRuntime.#ctor(Inno.Editor.Core.EditorContext,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Logging.LogRouter,System.Collections.Generic.IEnumerable{System.Object}) 2acc9ee2e2908f78c462d8b7b1aec772c976879afabe284c81d7cc6e3d598f8c -->

```csharp
public Inno.Editor.ImGui.ImGuiEditorRuntime.ImGuiEditorRuntime(Inno.Editor.Core.EditorContext context, Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Logging.LogRouter logs, System.Collections.Generic.IEnumerable<object> hostServices)
```

Creates an ImGui editor runtime with stable host-owned extension services.

**Parameter `context`:** The shared editor context that owns project settings and frame state.

**Parameter `types`:** The host-owned type catalog that coordinates extension generations.

**Parameter `logs`:** The host-owned logging router used by editor infrastructure.

**Parameter `hostServices`:** Services available to discovered extension constructors.

**Throws `System.ArgumentNullException`:** Thrown when `context`, `types`, or
`hostServices` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/ImGuiEditorRuntime.cs#L52).

## `Dispose`

<a id="api-72cdfe30d2ba4709"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiEditorRuntime.Dispose 56ce3bddd2a3a76044ef3770e6717f70fb737c864c760066682a40f53647db68 -->

```csharp
public override void Inno.Editor.ImGui.ImGuiEditorRuntime.Dispose()
```

Releases the resources owned by this implementation.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Editor extensions still own live work. The interaction runtime remains retained for safe shutdown.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/ImGuiEditorRuntime.cs#L302).

## `Draw`

<a id="api-d525c32326b01978"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiEditorRuntime.Draw 8d5f23c8f102edadce817cbfa9870cd30224ee63f42e638048b7fd90f44192f3 -->

```csharp
public void Inno.Editor.ImGui.ImGuiEditorRuntime.Draw()
```

Draws the complete editor frame through ImGui.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/ImGuiEditorRuntime.cs#L154).

## `HandleKeyPressed`

<a id="api-8a505e6c977af94b"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiEditorRuntime.HandleKeyPressed(Inno.Core.Events.KeyPressedEvent) 25190555373cbaaaf6630e1bab8b980434919491e08d793cf090b45a8f547ea8 -->

```csharp
public void Inno.Editor.ImGui.ImGuiEditorRuntime.HandleKeyPressed(Inno.Core.Events.KeyPressedEvent keyEvent)
```

Dispatches contextual shortcuts, leaving editing keys with active text widgets while permitting explicit save.

**Parameter `keyEvent`:** The keyboard event received from the application event stream.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/ImGuiEditorRuntime.cs#L281).

## `PrepareFrame`

<a id="api-f4a37d00113af70f"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiEditorRuntime.PrepareFrame 0fd149d426fc677bbd006dd24da29732abd4a35b6f281287243eeb561062a63d -->

```csharp
public void Inno.Editor.ImGui.ImGuiEditorRuntime.PrepareFrame()
```

Applies pending style inputs with the owned context before the backend creates its native frame.

**Throws `System.ObjectDisposedException`:** This runtime has retired.

**Throws `System.InvalidOperationException`:** The owning native context is unavailable, incorrect, or already drawing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/ImGuiEditorRuntime.cs#L143).

## `PrepareShutdown`

<a id="api-614e6f5fb39945fc"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiEditorRuntime.PrepareShutdown a91d640b7ac10b53590d935adcea677a55f5aeecf8401d02a31f8aa7401e38dd -->

```csharp
public void Inno.Editor.ImGui.ImGuiEditorRuntime.PrepareShutdown()
```

Freezes automatic extension-state persistence and writes the final project state before editor
modules begin shutting down.

**Constraints:** This operation is idempotent and prevents module teardown from overwriting the saved
module sections with transient empty state.

**Throws `System.ObjectDisposedException`:** Thrown after this runtime has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/ImGuiEditorRuntime.cs#L126).

## `SaveState`

<a id="api-e6df2d03a3e0a5a2"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiEditorRuntime.SaveState 289289c297cdf37a480adeb2f6cc32fdee7cc0b5cb9b8bf15520dbcace087fe2 -->

```csharp
public void Inno.Editor.ImGui.ImGuiEditorRuntime.SaveState()
```

Captures all stateful active modules and panels and flushes their project state to disk.

**Throws `System.ObjectDisposedException`:** Thrown after this runtime has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/ImGuiEditorRuntime.cs#L108).

## `Start`

<a id="api-c802b44624c45217"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiEditorRuntime.Start 428b4c17e1a7f8e316341e74c8bb7279fbb1751de9bea2ec93f611401beddb17 -->

```csharp
public override void Inno.Editor.ImGui.ImGuiEditorRuntime.Start()
```

Starts value processing after validating the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/ImGuiEditorRuntime.cs#L84).

## `Update`

<a id="api-98f7201500fe4b8d"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiEditorRuntime.Update(Inno.Editor.Core.EditorFrame) d6878e3fa91f27ada9b1732c23976c096bce0163924ba3f097b6b0fb7e9be60b -->

```csharp
public override void Inno.Editor.ImGui.ImGuiEditorRuntime.Update(Inno.Editor.Core.EditorFrame frame)
```

Recomputes owned state from the current validated inputs.

**Parameter `frame`:** The frame consumed by update; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/ImGuiEditorRuntime.cs#L96).

## `interactions`

<a id="api-f9eed542e7c3ed60"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiEditorRuntime.interactions bab9fb74578b8cb4a22220c3267f89c65d74b355310fe7b90497d3d91ef1eb63 -->

```csharp
public Inno.Editor.Interactions.EditorInteractions Inno.Editor.ImGui.ImGuiEditorRuntime.interactions { get; }
```

Gets the active presentation-independent interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/ImGuiEditorRuntime.cs#L75).

## `panelCount`

<a id="api-56725484e450cec2"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiEditorRuntime.panelCount 3f99106a464c2f64c4b2443045fc9f4dfa23fad8cac1fff8b06ae1b9aceb7b54 -->

```csharp
public int Inno.Editor.ImGui.ImGuiEditorRuntime.panelCount { get; }
```

Gets the number of active dockable panels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/ImGuiEditorRuntime.cs#L79).

---
title: "EditorInteractionRuntime"
description: "Reference for EditorInteractionRuntime in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.470449256a99ee92
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorInteractionRuntime`

This reference describes `EditorInteractionRuntime` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Core.EditorRuntime`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0001d1f4bd085d65) | Method |
| [`#ctor`](#api-43c52e63c51fd011) | Method |
| [`#ctor`](#api-e4241534c9781cc7) | Method |
| [`Dispose`](#api-3ac22066fce98db8) | Method |
| [`Flush`](#api-9538fcfe33cf575b) | Method |
| [`HandleKeyPressed`](#api-2acba40474e38bbd) | Method |
| [`PrepareShutdown`](#api-1f0d11dec8e0cfbf) | Method |
| [`SaveState`](#api-fb2574fa3e2c56bf) | Method |
| [`Start`](#api-b3b02a65e605223e) | Method |
| [`Update`](#api-0bfba6e9e0d5704c) | Method |
| [`interactions`](#api-36d69ec9eeca36e8) | Property |
| [`modals`](#api-da3f749b9420e2f1) | Property |
| [`panelCount`](#api-8bf72d3f1797e3d0) | Property |
| [`panels`](#api-8f871903c08fd05f) | Property |

## Type declaration

<a id="api-470449256a99ee92"></a>
<!-- api: T:Inno.Editor.Interactions.EditorInteractionRuntime 23680778df7eccf049365b48d270f44eb90b8e7d7f3b06255c18d2c831077e12 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorInteractionRuntime : Inno.Editor.Core.EditorRuntime
```

Hosts attribute-discovered editor extensions without depending on a presentation backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractionRuntime.cs#L17).

## `#ctor`

<a id="api-0001d1f4bd085d65"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractionRuntime.#ctor(Inno.Editor.Core.EditorContext,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Logging.LogRouter,System.Collections.Generic.IEnumerable{System.Object}) 70e0384e4d0e0f78421a556855fdc2bcda151a1fad5b7330264d63df7e694d76 -->

```csharp
public Inno.Editor.Interactions.EditorInteractionRuntime.EditorInteractionRuntime(Inno.Editor.Core.EditorContext context, Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Logging.LogRouter logs, System.Collections.Generic.IEnumerable<object> hostServices)
```

Creates an interaction runtime with stable host-owned extension services.

**Parameter `context`:** The passive editor context shared with the presentation backend.

**Parameter `hostServices`:** Stable host-owned services that editor extension constructors may request by assignable contract.

**Parameter `logs`:** The host-owned logging router used by editor infrastructure.

**Parameter `types`:** The type catalog that owns editor extension generations.

**Throws `System.ArgumentNullException`:** Thrown when `context` or `hostServices` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractionRuntime.cs#L98).

## `#ctor`

<a id="api-43c52e63c51fd011"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractionRuntime.#ctor(Inno.Editor.Core.EditorContext,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Logging.LogRouter) 66d20fc907ceecab02e9bce55d5a3c791a896cd1e1251f76b4c525b204e570c7 -->

```csharp
public Inno.Editor.Interactions.EditorInteractionRuntime.EditorInteractionRuntime(Inno.Editor.Core.EditorContext context, Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Logging.LogRouter logs)
```

Creates an interaction runtime for an existing passive editor context.

**Parameter `context`:** The passive editor context shared with the presentation backend.

**Parameter `types`:** The type catalog that owns editor extension generations.

**Parameter `logs`:** The host-owned logging router used by editor infrastructure.

**Throws `System.ArgumentNullException`:** Thrown when `context` or `logs` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractionRuntime.cs#L71).

## `#ctor`

<a id="api-e4241534c9781cc7"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractionRuntime.#ctor(System.String,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Logging.LogRouter,Inno.Editor.Core.EditorKeyboardPolicy) 6513d8fd8d6f5586b931a579127243b65cb7da8e30160edeb2de382de251460b -->

```csharp
public Inno.Editor.Interactions.EditorInteractionRuntime.EditorInteractionRuntime(string projectDirectory, Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Logging.LogRouter logs, Inno.Editor.Core.EditorKeyboardPolicy keyboard)
```

Creates an interaction runtime for one project.

**Parameter `projectDirectory`:** The project root containing Assets and Library.

**Parameter `types`:** The type catalog that owns editor extension generations.

**Parameter `logs`:** The host-owned logging router used by editor infrastructure.

**Parameter `keyboard`:** The explicit immutable product keyboard conventions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractionRuntime.cs#L46).

## `Dispose`

<a id="api-3ac22066fce98db8"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractionRuntime.Dispose d60cb27d2e8b959ff5c8ff66aa89e43169b90313df7f9b615e80ce7a20a5dc76 -->

```csharp
public override void Inno.Editor.Interactions.EditorInteractionRuntime.Dispose()
```

Releases the resources owned by this implementation.

**Throws `System.AggregateException`:** Thrown after all shutdown stages have been attempted when one or more stages failed.

**Throws `Inno.Core.Execution.RetirementPendingException`:** A stage still owns live work. This runtime retains all remaining stages and rejects new updates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractionRuntime.cs#L248).

## `Flush`

<a id="api-9538fcfe33cf575b"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractionRuntime.Flush 5fb05b891a7730eb80a06bf51918560f6e0f31783fd8b18875bbeda4400892cf -->

```csharp
public void Inno.Editor.Interactions.EditorInteractionRuntime.Flush()
```

Flushes actions queued during the current presentation traversal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractionRuntime.cs#L194).

## `HandleKeyPressed`

<a id="api-2acba40474e38bbd"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractionRuntime.HandleKeyPressed(Inno.Core.Events.KeyPressedEvent) 84980f2ba94add2fdae225938bbe8f0cdefc40503e5316472f9648f00278b6a1 -->

```csharp
public void Inno.Editor.Interactions.EditorInteractionRuntime.HandleKeyPressed(Inno.Core.Events.KeyPressedEvent keyEvent)
```

Dispatches an unhandled keyboard event through contextual shortcuts.

**Parameter `keyEvent`:** The keyboard event received from the application event stream.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractionRuntime.cs#L232).

## `PrepareShutdown`

<a id="api-1f0d11dec8e0cfbf"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractionRuntime.PrepareShutdown cab1b7bd858216b430c228d7cb641665ad0047f2d5cb80d0d4b2fb21a665db93 -->

```csharp
public void Inno.Editor.Interactions.EditorInteractionRuntime.PrepareShutdown()
```

Freezes automatic extension-state persistence and writes the final state before modules
begin shutting down.

**Constraints:** This operation is idempotent. After it succeeds, later disposal cannot recapture transient
teardown state such as an empty scene workspace.

**Throws `System.ObjectDisposedException`:** Thrown after this runtime has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractionRuntime.cs#L220).

## `SaveState`

<a id="api-fb2574fa3e2c56bf"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractionRuntime.SaveState 3be93e258f208d5f57d8c94a37b0231eb08e40c5491d6b860c39af8d32e371ab -->

```csharp
public void Inno.Editor.Interactions.EditorInteractionRuntime.SaveState()
```

Captures every stateful active module and panel and atomically flushes changed project state
to disk.

**Throws `System.ObjectDisposedException`:** Thrown after this runtime has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractionRuntime.cs#L203).

## `Start`

<a id="api-b3b02a65e605223e"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractionRuntime.Start 22e611e26bdaf089002f884f2cba3b36e1f3495a086c994fc065d51e0b39d82a -->

```csharp
public override void Inno.Editor.Interactions.EditorInteractionRuntime.Start()
```

Starts value processing after validating the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractionRuntime.cs#L162).

## `Update`

<a id="api-0bfba6e9e0d5704c"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractionRuntime.Update(Inno.Editor.Core.EditorFrame) aa0759adb5703097f589a8a2524e0dc1b55c214a2a364e985590e70e47320d49 -->

```csharp
public override void Inno.Editor.Interactions.EditorInteractionRuntime.Update(Inno.Editor.Core.EditorFrame frame)
```

Recomputes owned state from the current validated inputs.

**Parameter `frame`:** The frame consumed by update; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractionRuntime.cs#L179).

## `interactions`

<a id="api-36d69ec9eeca36e8"></a>
<!-- api: P:Inno.Editor.Interactions.EditorInteractionRuntime.interactions 3d55ca24dc5eb244f27cd0d27cf7c74c63de85c7cc50e1ce524ccb6e55ca9b0c -->

```csharp
public Inno.Editor.Interactions.EditorInteractions Inno.Editor.Interactions.EditorInteractionRuntime.interactions { get; }
```

Gets the active presentation-independent interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractionRuntime.cs#L128).

## `modals`

<a id="api-da3f749b9420e2f1"></a>
<!-- api: P:Inno.Editor.Interactions.EditorInteractionRuntime.modals 31a938599a3c6f1b35d8c6ef331ea8d26a1967faa92deac6f5db7ec17bc7ae79 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Interactions.EditorModalExtension> Inno.Editor.Interactions.EditorInteractionRuntime.modals { get; }
```

Gets active modal extensions in deterministic order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractionRuntime.cs#L145).

## `panelCount`

<a id="api-8bf72d3f1797e3d0"></a>
<!-- api: P:Inno.Editor.Interactions.EditorInteractionRuntime.panelCount 0292e5cbadae1e2b5115b2174cf5eaa4b72c9b0c48622fe0fef2fa891374270e -->

```csharp
public int Inno.Editor.Interactions.EditorInteractionRuntime.panelCount { get; }
```

Gets the number of active dockable panels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractionRuntime.cs#L157).

## `panels`

<a id="api-8f871903c08fd05f"></a>
<!-- api: P:Inno.Editor.Interactions.EditorInteractionRuntime.panels 09a9e0a91beec16dd6167461a5de613f3ca623f0eea148bfc1a94a7f55ee94b9 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Interactions.EditorPanelExtension> Inno.Editor.Interactions.EditorInteractionRuntime.panels { get; }
```

Gets active dockable panel extensions in deterministic order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractionRuntime.cs#L133).

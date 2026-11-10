---
title: "IEditorReloadParticipant"
description: "Reference for IEditorReloadParticipant in Inno.Editor.Core."
uid: api.inno.editor.core.fa4de390b36f1fe8
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `IEditorReloadParticipant`

This reference describes `IEditorReloadParticipant` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Capture`](#api-f23d48c097bce75c) | Method |
| [`RefreshDiagnostics`](#api-8be2833be6e5f52b) | Method |

## Type declaration

<a id="api-fa4de390b36f1fe8"></a>
<!-- api: T:Inno.Editor.Core.IEditorReloadParticipant 9fb84922b68e171337c0651f2860a8593f5108627920e10900a3dba28c062fd4 -->

```csharp
public interface Inno.Editor.Core.IEditorReloadParticipant
```

Contributes editor-owned live state to an assembly reload without coupling the reload requester
to a feature domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Reloading/IEditorReloadParticipant.cs#L10).

## `Capture`

<a id="api-f23d48c097bce75c"></a>
<!-- api: M:Inno.Editor.Core.IEditorReloadParticipant.Capture(Inno.Extensibility.Modules.AssemblyReloadContext) a97e1e82330a341126e70b26056ca9bc4b3fbe28a1db68c0451e07c328a8c68b -->

```csharp
Inno.Extensibility.Reload.IGenerationChange Inno.Editor.Core.IEditorReloadParticipant.Capture(Inno.Extensibility.Modules.AssemblyReloadContext context)
```

Captures one isolated transaction for the prepared assembly generation.

**Parameter `context`:** The prepared assembly reload context containing previous and candidate participant state.

**Returns:** A transaction that has captured current state but has not modified live editor objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Reloading/IEditorReloadParticipant.cs#L21).

## `RefreshDiagnostics`

<a id="api-8be2833be6e5f52b"></a>
<!-- api: M:Inno.Editor.Core.IEditorReloadParticipant.RefreshDiagnostics aa986d97059e4d2caed90a1ea09007d4e85bf3640ac4bae22dcc27e7f6413e86 -->

```csharp
void Inno.Editor.Core.IEditorReloadParticipant.RefreshDiagnostics()
```

Republishes diagnostics derived from the participant's current live state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Reloading/IEditorReloadParticipant.cs#L26).

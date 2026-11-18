---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1293ccd408fb23cabb50a5111ab0f29c1553ca05cb23c34de39abc1c1faff1fd
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiEditorRuntime.#ctor(Inno.Editor.Core.EditorContext,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Logging.LogRouter,System.Collections.Generic.IEnumerable{System.Object})
title: ImGuiEditorRuntime.Constructor
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: c77a1909af22cb492ec06de67ccf0d506a828d447a487717dc7e7e0ddbfa3c2a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The shared editor context that owns project settings and frame state.

**Parameter `types`:** The host-owned type catalog that coordinates extension generations.

**Parameter `logs`:** The host-owned logging router used by editor infrastructure.

**Parameter `hostServices`:** Services available to discovered extension constructors.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context`, `types`, or `hostServices` is `null`.

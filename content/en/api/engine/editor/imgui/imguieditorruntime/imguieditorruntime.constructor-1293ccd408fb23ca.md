---
uid: api.1293ccd408fb23cabb50a5111ab0f29c1553ca05cb23c34de39abc1c1faff1fd
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiEditorRuntime.#ctor(Inno.Editor.Core.EditorContext,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Logging.LogRouter,System.Collections.Generic.IEnumerable{System.Object})"
source: xml
reviewed: ecf3f2ccb7bc51e53e349ca1f23ac1c154c3275f260caa919d473fcd2b595517
title: "ImGuiEditorRuntime.Constructor"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Creates an ImGui editor runtime with stable host-owned extension services.

**Parameter `context`:** The shared editor context that owns project settings and frame state.

**Parameter `types`:** The host-owned type catalog that coordinates extension generations.

**Parameter `logs`:** The host-owned logging router used by editor infrastructure.

**Parameter `hostServices`:** Services available to discovered extension constructors.

**Exception `T:System.ArgumentNullException`:** Thrown when `context`, `types`, or `hostServices` is `null`.

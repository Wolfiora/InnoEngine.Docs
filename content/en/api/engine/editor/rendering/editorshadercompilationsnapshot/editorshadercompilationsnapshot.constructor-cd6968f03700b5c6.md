---
uid: api.cd6968f03700b5c68a870e4a435d2088aa5fb67727f10caa5193750393ea9316
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorShaderCompilationSnapshot.#ctor(Inno.Editor.Rendering.EditorShaderCompilationState,System.Boolean,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.ShaderDiagnostic})"
source: xml
reviewed: 44c646e30b946ac5ede805148658788cca0c95c830a5e44883bfe175ea675b5e
title: "EditorShaderCompilationSnapshot.Constructor"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Contains detached compiler state without retaining assets, tasks or extension instances.

**Parameter `state`:** Latest requested semantic candidate state.

**Parameter `usingLastGood`:** Whether rendering still uses a previous successful candidate.

**Parameter `diagnostics`:** Immutable latest completed compiler diagnostics.

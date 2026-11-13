---
uid: api.cd6968f03700b5c68a870e4a435d2088aa5fb67727f10caa5193750393ea9316
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorShaderCompilationSnapshot.#ctor(Inno.Editor.Rendering.EditorShaderCompilationState,System.Boolean,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.ShaderDiagnostic})"
source: xml
reviewed: b4236bd1ee85cd4052894c3ffc8a664951ce54ba591b072a7d41fd735f01138f
title: "Constructor"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Contains detached compiler state without retaining assets, tasks or extension instances.

**Parameter `state`:** Latest requested semantic candidate state.

**Parameter `usingLastGood`:** Whether rendering still uses a previous successful candidate.

**Parameter `diagnostics`:** Immutable latest completed compiler diagnostics.

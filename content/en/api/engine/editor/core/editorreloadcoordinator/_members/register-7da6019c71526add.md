---
uid: api.7da6019c71526add2037b605f8f729409e716777947d0d0cf443e9aa5eb22e13
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorReloadCoordinator.Register(Inno.Editor.Core.IEditorReloadParticipant)"
source: xml
reviewed: 66fa18fcb80b36dad2490935058187f8669957e11b79ac0f0a112af077071289
title: "Register"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Registers an editor feature that owns generation-bound live state.

**Parameter `participant`:** The feature participant. The coordinator retains only a weak reference to this instance.

**Returns:** A registration lease that strongly retains the participant until the lease is disposed. The coordinator itself retains only a weak reference.

**Exception `T:System.ArgumentNullException`:** Thrown when `participant` is `null`.

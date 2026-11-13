---
uid: api.3af8b85981752beccc3750fbfbd8ad48daf7bef9edd5110af849c22f6a1a0330
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorReloadCoordinator.RegisterGuard(Inno.Editor.Core.IEditorReloadGuard)"
source: xml
reviewed: f4d7c59b5bc0c5eafa1b5425a66042957c8ce2ea6c3567e2af09a83e10dae1cb
title: "RegisterGuard"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Registers a weak admission guard without stopping its owner or creating a generation transaction.

**Parameter `guard`:** The owner whose current state determines reload admission.

**Returns:** A caller-owned lease retaining the guard until registration is released.

**Exception `T:System.ArgumentNullException`:** The guard is null.

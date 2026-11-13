---
uid: api.3af8b85981752beccc3750fbfbd8ad48daf7bef9edd5110af849c22f6a1a0330
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorReloadCoordinator.RegisterGuard(Inno.Editor.Core.IEditorReloadGuard)"
source: xml
reviewed: 3e69c3628553dc90867c4d66a4d411bb7b85421e00ee01d0659f718ffa8e94e6
title: "RegisterGuard"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Registers a weak admission guard without stopping its owner or creating a generation transaction.

**Parameter `guard`:** The owner whose current state determines reload admission.

**Returns:** A caller-owned lease retaining the guard until registration is released.

**Exception `T:System.ArgumentNullException`:** The guard is null.

---
uid: api.b8806a4369a9bbfa4468b24f7f28074ba7cf96b23f743ea9f33e4c5a4baa2925
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorScenePlayMode.BeginPlayMode(Inno.Runtime.RuntimeSession)"
source: xml
reviewed: 95511d22342c55b3064db5883be6c44969c11b81b8192768b0ebb0b7e99dac4e
title: "BeginPlayMode"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Captures the editable scene set and materializes independent runtime copies in the supplied session.

**Parameter `runtimeSession`:** The isolated Play Mode session that receives the immutable start snapshot and owns editor-side operations performed against the runtime copies.

**Returns:** A lease that presents the runtime copies to editor features, prevents their persistence, and restores the Edit presentation when disposed.

**Exception `T:System.ArgumentNullException`:** Thrown when `runtimeSession` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when another Play Mode lease is active, the target world is not empty, or the snapshot cannot be materialized atomically.
